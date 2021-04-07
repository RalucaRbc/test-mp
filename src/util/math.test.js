import { sum } from "./math";

describe("testing the math utility helper", () => {

  let test=0;
  afterEach(() => {
    test=0;
  });

  it("should add 2 numbers", () => {
    const expected = 12;
    const result = sum(5, 7);
    test=test+1;
    console.log(test);

    expect(result).toEqual(expected);
  });
  
  it("should add the numbers provided", () => {
    const expected=25;
    const result=sum(10, 5, 10);
    test=test+1;
    console.log(test);

    expect(result).toEqual(expected);
  });

  it("should any amount of numbers provided", () => {
    const expected=100;
    const result=sum(20, 20, 20, 20, 20);
    test=test+1;
    console.log(test);

    expect(result).toEqual(expected)
  })
});
