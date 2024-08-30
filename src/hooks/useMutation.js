import { useState } from "react";

function useMutation(promise) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  async function execute(payload, options = {}) {
    setLoading(true);
    try {
      const res = await promise(payload);
      if (res?.data) {
        setData(res?.data);
        options?.onSuccess?.();
      }
    } catch (error) {
      options?.onFail?.();
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  return { data, loading, error, execute };
}
export default useMutation;
