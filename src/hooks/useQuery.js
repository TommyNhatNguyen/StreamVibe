import { useEffect, useState } from "react";

function useQuery(promise, dependencies = []) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, dependencies);
  async function fetchData() {
    setLoading(true);
    try {
      const res = await promise();
      if (res?.data) {
        setData(res.data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  return { data, error, loading, refetch: fetchData };
}
export default useQuery;
