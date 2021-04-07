import React from "react";

export const processData = (data, setData) => {
  const newData = [];
  data.forEach((e) =>
    newData.push({ value: e.value * e.multiplier, multiplier: e.multiplier })
  );
  setData(newData);
};

export const Test = () => {
  const [data, setData] = React.useState([
    { value: 2, multiplier: 2 },
    { value: 3, multiplier: 3 },
  ]);

  return (
    <div>
      {JSON.stringify(data)}
      <button type="button" onClick={() => processData(data, setData)}>
        Run
      </button>
    </div>
  );
};

