import React, { useState, useEffect } from "react";
import { ResultList } from "../ResultList/ResultList.component";

export const Test2 = () => {
  const [data, setData] = useState([]);
  const [err, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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

  const editSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const getData = (data) => {
    return searchTerm
      ? data.filter(
          (x) => (x.name || "").toLowerCase().indexOf(searchTerm) >= 0
        )
      : data;
  };

  const filterData = getData(data);

  return (
    <div>
      <h2>Test 2</h2>
      <span className="icon-arrow-left2"></span>
      <input
        type="text"
        value={searchTerm}
        onChange={editSearchTerm}
        placeholder="Search by name"
      />

      {!err && !loading && <ResultList data={filterData} />}
      {err && <div>{err}</div>}
      {loading && <div>Loading... </div>}
    </div>
  );
};
