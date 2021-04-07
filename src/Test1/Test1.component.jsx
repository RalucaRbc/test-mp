import React from "react";

export const processData = (data) =>
  data.map((e) => ({
    value: e.value * e.multiplier,
    multiplier: e.multiplier,
  }));

export const Test1 = () => {
  const [data, setData] = React.useState([
    { value: 2, multiplier: 2 },
    { value: 3, multiplier: 3 },
  ]);

  return (
    <div>
      <h2>Test 1</h2>
      {JSON.stringify(data)}
      <button type="button" onClick={() => setData(processData(data))}>
        Run
      </button>
    </div>
  );
};
