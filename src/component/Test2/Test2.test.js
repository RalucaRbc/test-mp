import React from "react";
import { render } from "@testing-library/react";
import { Test2 } from "./Test2.component";

describe("testing the Test2 component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render Test2 component correctly", () => {
    const wrapper = render(<Test2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
