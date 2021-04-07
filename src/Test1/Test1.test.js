import React from "react";
import { render } from "@testing-library/react";
import { processData, Test1 } from "./Test1.component";

// export const processData = (data, setData) => {
//   const newData = [];
//   data.forEach((e) =>
//     newData.push({ value: e.value * e.multiplier, multiplier: e.multiplier })
//   );
//   setData(newData);
// };

describe("testing the processData function", () => {
  const data = [];
  const setState = jest.fn();
  const useStateMock = (initState) => [initState, setState];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render Test component correctly", () => {
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
    const wrapper = render(<Test1 />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should return an array of objects where value = value * multiplier", () => {
    const data = [
      { value: 2, multiplier: 2 },
      { value: 3, multiplier: 3 },
    ];

    expect(processData(data)).toEqual([
      { value: 4, multiplier: 2 },
      { value: 9, multiplier: 3 },
    ]);
  });
});
