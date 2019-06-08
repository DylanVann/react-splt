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