import React from 'react'
import {render} from '@testing-library/react'
import {processData, Test} from './test.component'

// export const processData = (data, setData) => {
//   const newData = [];
//   data.forEach((e) =>
//     newData.push({ value: e.value * e.multiplier, multiplier: e.multiplier })
//   );
//   setData(newData);
// };


describe("testing the processData function", () => { 
  const setState = jest.fn();
  const useStateMock = (initState) => [initState, setState];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Is a test where we want to mock useState', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    const wrapper = render(<Test />);
   
    
    expect(setState).toHaveBeenCalledTimes(1);
});
})

