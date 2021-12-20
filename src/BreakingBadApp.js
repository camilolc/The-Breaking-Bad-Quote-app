import React, { useLayoutEffect, useRef } from "react";
import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch";
import "./breakingbadapp.css";
import { Img } from "./components/Img";
export const BreakingBadApp = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  //   console.log(data);
  //let's check for data values
  const { quote, author, loading } = !!data && data[0];

  const pTag = useRef();
  useLayoutEffect(() => {
    //Dom paragraph
  }, [quote]);
  return (
    <>
      <h1> The Breaking Bad Fan App</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={pTag}>
          {quote}
        </p>
        <footer className="blockquote-footer mt-3">{author}</footer>
      </blockquote>
      <div className="card-grid">
        {author !== undefined ? <Img author={author} /> : loading}
        {/* <Img author={author} /> */}
      </div>
      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </>
  );
};
