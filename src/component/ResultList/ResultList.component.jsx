import React from "react";
import { ResultItem } from "../ResultItem/ResultItem.component";

export const ResultList = ({ data }) => {
  return (
    <div>
      {data.map((i) => (
        <ResultItem {...i} />
      ))}
    </div>
  );
};
