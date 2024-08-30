import { useEffect, useState } from "react";

function useDebounce(changedValue, delayTime) {
  const [debouncedValue, setDebouncedValue] = useState(changedValue);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDebouncedValue(changedValue);
    }, delayTime);
    return () => clearTimeout(timeOutId);
  }, [changedValue, delayTime]);
  return debouncedValue;
}
export default useDebounce;
