import React, { useEffect, useState } from "react";

function useDebounce(input, delay) {
  const [value, setValue] = useState("");
  useEffect(() => {
   let timer= setTimeout(() => {
      setValue(input);
    }, [delay]);
    return ()=>clearTimeout(timer)
  }, [input]);
  return value;
}

export default useDebounce;
