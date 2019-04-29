open Webapi.Dom.MouseEvent;
open Webapi.Dom.EventTarget;

type state = {
  dragging: bool,
  initialX: int,
  initialWidth: int,
  width: int,
  documentCursor: option(string),
};

let initialState: state = {
  dragging: false,
  initialX: 0,
  initialWidth: 0,
  width: 100,
  documentCursor: None,
};

type action =
  | MouseDown(int)
  | MouseUp
  | MouseMove(int);

let document = Webapi.Dom.Document.asEventTarget(Webapi.Dom.document);

let clearSelection: unit => unit =
  () => [%bs.raw
    {|window.getSelection && window.getSelection().removeAllRanges()|}
  ];

let clamp = (min: option(int), max: option(int), value: int) =>
  switch (min, max, value) {
  | (_, Some(max), _) when value > max => max
  | (Some(min), _, _) when value < min => min
  | _ => value
  };

[@bs.deriving abstract]
type ref = {current: Dom.element};

type callback = int => unit;

let callOnDrag = (onDrag, size) =>
  switch (onDrag) {
  | Some(onDrag) => onDrag(size)
  | None => ()
  };

[@react.component]
[@genType]
let make =
    (
      ~width: option(int)=?,
      ~minWidth: option(int)=?,
      ~maxWidth: option(int)=?,
      ~children: (ReasonReact.reactElement, ReasonReact.reactElement),
      ~onDragStart: option(callback)=?,
      ~onDrag: option(callback)=?,
      ~onDragEnd: option(callback)=?,
    ) => {
  let paneRef: ref = [%bs.raw {|React.useRef(null)|}];
  // ReasonML JSX wants a different type, so we use this hack.
  let paneRefForJSX: ReactDOMRe.domRef = [%bs.raw {|paneRef|}];
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | MouseDown(x) => {
            ...state,
            dragging: true,
            initialX: x,
            initialWidth:
              Webapi.Dom.Element.clientWidth(currentGet(paneRef)),
          }
        | MouseMove(x) => {
            ...state,
            width:
              clamp(
                minWidth,
                maxWidth,
                state.initialWidth + state.initialX - x,
              ),
          }
        | MouseUp => {...state, dragging: false}
        },
      initialState,
    );

  React.useEffect4(
    () =>
      if (state.dragging) {
        let onUp = _e => {
          callOnDrag(onDragEnd, state.width);
          dispatch(MouseUp);
        };
        let onMove = (e: Dom.mouseEvent) => {
          callOnDrag(onDrag, state.width);
          clearSelection();
          dispatch(MouseMove(pageX(e)));
        };
        addMouseMoveEventListener(onMove, document);
        addMouseUpEventListener(onUp, document);
        Some(
          () => {
            removeMouseMoveEventListener(onMove, document);
            removeMouseUpEventListener(onUp, document);
          },
        );
      } else {
        None;
      },
    (state.dragging, state.documentCursor, dispatch, state.width),
  );

  let onMouseDown =
    React.useCallback2(
      e => {
        callOnDrag(onDragStart, state.width);
        clearSelection();
        dispatch(MouseDown(ReactEvent.Mouse.pageX(e)));
      },
      (dispatch, state.width),
    );

  let finalWidth =
    switch (width) {
    | Some(width) => string_of_int(width) ++ "px"
    | None => string_of_int(state.width) ++ "px"
    };

  let classPrefix = "splitterer";
  let prefix = (c: string) => classPrefix ++ "__" ++ c;
  let addDraggingIfDragging = (dragging: bool, c: string) =>
    dragging ? c ++ " " ++ c ++ "--dragging" : c;
  let getClass = (c: string, dragging: bool) => {
    prefix(addDraggingIfDragging(dragging, c));
  };

  <div className=classPrefix>
    <div className={getClass("pane", state.dragging)}>
      <div className={getClass("pane-inner", state.dragging)}>
        {fst(children)}
      </div>
    </div>
    <div className={getClass("handle", state.dragging)} onMouseDown />
    <div
      ref=paneRefForJSX
      className={getClass("pane", state.dragging)}
      style={ReactDOMRe.Style.make(~width=finalWidth, ~flex="unset", ())}>
      <div className={getClass("pane-inner", state.dragging)}>
        {snd(children)}
      </div>
    </div>
  </div>;
};