import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

const fetchData = (pageNum) => {
  return axios.get(
    `https://api.punkapi.com/v2/beers?page=${pageNum}&per_page=5`
  );
};

export const Paginated = () => {
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, isError, error, data } = useQuery(
    ["fetchedData", pageNum],
    () => fetchData(pageNum)
  );
  if (isLoading) {
    return <h2>Loading</h2>;
  }
  if (isError) {
    return error.message;
  }
  return (
    <>
      <div>
        {data?.data((x) => {
          return <h3>{x.name}</h3>;
        })}
      </div>
      <div>
        <button onClick={() => setPageNum(pageNum - 1)}>Prev</button>
        <button
          onClick={() => setPageNum(pageNum + 1)}
          disabled={pageNum === 1}
        >
          Next
        </button>
      </div>
    </>
  );
};
