import { useCallback, useEffect, useRef, useState } from "react";
import useQuery from "./useQuery";
import scrollTop from "../utils/scrollTop";

function useInfiniteScroll(promise, denpendencies, query) {
  const observer = useRef();
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [renderData, setRenderData] = useState([]);
  const { data, loading, error, refetch } = useQuery(
    () => promise(query, pageNumber),
    [pageNumber, ...denpendencies]
  );
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      if (
        error?.response?.data?.status_code === 22 ||
        error?.response?.data?.success
      ) {
        setHasMore(false);
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  useEffect(() => {
    if (data) {
      setRenderData((prev) => [...prev, ...data?.results]);
    }
  }, [data]);
  const resetData = () => {
    setRenderData([]);
    setPageNumber(1);
    scrollTop("instant");
  };
  return {
    data: renderData,
    ref: lastElementRef,
    loading,
    hasMore,
    refetch,
    resetData,
  };
}
export default useInfiniteScroll;
