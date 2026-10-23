import { useEffect, useState } from "react";
import type { Photo } from "../types/types";

export const useFetchPhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  let url = "https://picsum.photos/v2/list?limit=30";

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const response = await res.json();
        setPhotos(response);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message || "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [url]);
  return { loading, error, photos };
};
