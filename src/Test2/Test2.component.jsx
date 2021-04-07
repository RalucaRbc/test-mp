import React, { useState, useEffect } from "react";
import { ResultList } from "../component/ResultList/ResultList.component";

export const Test2 = () => {
  const [data, setData] = useState([]);
  const [err, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch("http://localhost:3800/test2")
        .then((res) => res.json())
        .then((res) => setData(res));
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  }, []);


  return (
    <div>
      <h2>Test 2</h2>
      <input type="text" value=""/>

      {!err && !loading && <ResultList data={data} />}
      {err && <div>{err}</div>}
      {loading && <div>Se incarca... </div>}

    </div>
  );
};
