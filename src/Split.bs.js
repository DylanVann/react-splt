// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Utils$ReactHooksTemplate from "./Utils.bs.js";

var initialState = /* record */[
  /* dragging */false,
  /* initialX */0,
  /* initialWidth */0,
  /* width */100,
  /* documentCursor */undefined
];

var $$document = document;

function callOnDrag(onDrag, size) {
  if (onDrag !== undefined) {
    return Curry._1(onDrag, size);
  } else {
    return /* () */0;
  }
}

function Split(Props) {
  var width = Props.width;
  var minWidth = Props.minWidth;
  var maxWidth = Props.maxWidth;
  var children = Props.children;
  var onDragStart = Props.onDragStart;
  var onDrag = Props.onDrag;
  var onDragEnd = Props.onDragEnd;
  Props.direction;
  var match = Props.className;
  var className = match !== undefined ? match : "splitterer";
  var match$1 = Props.classNameDragging;
  var classNameDragging = match$1 !== undefined ? match$1 : "splitterer--dragging";
  var paneRef = React.useRef(null);
  var match$2 = React.useReducer((function (state, action) {
          if (typeof action === "number") {
            return /* record */[
                    /* dragging */false,
                    /* initialX */state[/* initialX */1],
                    /* initialWidth */state[/* initialWidth */2],
                    /* width */state[/* width */3],
                    /* documentCursor */state[/* documentCursor */4]
                  ];
          } else if (action.tag) {
            return /* record */[
                    /* dragging */state[/* dragging */0],
                    /* initialX */state[/* initialX */1],
                    /* initialWidth */state[/* initialWidth */2],
                    /* width */Utils$ReactHooksTemplate.clamp(minWidth, maxWidth, (state[/* initialWidth */2] + state[/* initialX */1] | 0) - action[0] | 0),
                    /* documentCursor */state[/* documentCursor */4]
                  ];
          } else {
            var optionCurrent = paneRef.current;
            return /* record */[
                    /* dragging */true,
                    /* initialX */action[0],
                    /* initialWidth */(optionCurrent == null) ? 0 : optionCurrent.clientWidth,
                    /* width */state[/* width */3],
                    /* documentCursor */state[/* documentCursor */4]
                  ];
          }
        }), initialState);
  var dispatch = match$2[1];
  var state = match$2[0];
  React.useEffect((function (param) {
          if (state[/* dragging */0]) {
            var onUp = function (_e) {
              callOnDrag(onDragEnd, state[/* width */3]);
              return Curry._1(dispatch, /* MouseUp */0);
            };
            var onMove = function (e) {
              callOnDrag(onDrag, state[/* width */3]);
              Utils$ReactHooksTemplate.clearSelection(/* () */0);
              return Curry._1(dispatch, /* MouseMove */Block.__(1, [e.pageX]));
            };
            $$document.addEventListener("mousemove", onMove);
            $$document.addEventListener("mouseup", onUp);
            return (function (param) {
                      $$document.removeEventListener("mousemove", onMove);
                      $$document.removeEventListener("mouseup", onUp);
                      return /* () */0;
                    });
          }
          
        }), /* tuple */[
        state[/* dragging */0],
        state[/* documentCursor */4],
        dispatch,
        state[/* width */3]
      ]);
  var onMouseDown = React.useCallback((function (e) {
          callOnDrag(onDragStart, state[/* width */3]);
          Utils$ReactHooksTemplate.clearSelection(/* () */0);
          return Curry._1(dispatch, /* MouseDown */Block.__(0, [e.pageX]));
        }), /* tuple */[
        dispatch,
        state[/* width */3]
      ]);
  var finalWidth = width !== undefined ? String(width) + "px" : String(state[/* width */3]) + "px";
  var match$3 = state[/* dragging */0];
  var joinedClassNames = match$3 ? className + (" " + classNameDragging) : className;
  return React.createElement("div", {
              className: joinedClassNames
            }, React.createElement("div", undefined, React.createElement("div", undefined, children[0])), React.createElement("div", {
                  onMouseDown: onMouseDown
                }), React.createElement("div", {
                  ref: paneRef,
                  style: {
                    width: finalWidth,
                    flex: "unset"
                  }
                }, React.createElement("div", undefined, children[1])));
}

var make = Split;

export {
  initialState ,
  $$document ,
  callOnDrag ,
  make ,
  
}
/* document Not a pure module */
