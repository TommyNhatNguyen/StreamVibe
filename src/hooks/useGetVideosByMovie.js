import { useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";

export function useGetVideosByMovie(movieList) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function execute() {
    setLoading(true);
    try {
      const requests = movieList?.map((item) => {
        const { id: movieId } = item || {};
        return axiosInstance.get(`movie/${movieId}/videos`);
      });
      const res = await Promise.all(requests);
      if (res) {
        console.log(res);
        res.forEach((response) => {
          const resData = response?.data || [];
          setData((prev) => [...prev, resData]);
        });
      }
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  return { data, loading, error, execute };
}
export default useGetVideosByMovie;
