import { useEffect, useState, useRef } from "react";
export const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });
  //Keeping reference
  const isMounted = useRef(true);

  useEffect(() => {
    //Dismounting effect, value turns into false
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    setstate({ data: null, loading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setstate({
            loading: false,
            error: null,
            data,
          });
        } else {
          console.log("SetState isn't called");
        }
      });
  }, [url]);
  return state;
};
