import { useState,useEffect } from "react";

export function useMovies(query) {
    const KEY = "acf94f75";

      const [movies, setMovies] = useState([]);
      // const [watched, setWatched] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState("");
 useEffect(() => {
   const controller = new AbortController();
   const fecthMovies = async () => {
     try {
       setIsLoading(true);
       setError("");
       const res = await fetch(
         `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
         { signal: controller.signal }
       );

       if (!res.ok) {
         throw new Error("Something went wrong with fetching data");
       }

       const data = await res.json();
       if (data.Response === "False") {
         throw new Error("Movies not found");
       }

       setMovies(data.Search);
       setIsLoading(false);
       setError("");
     } catch (err) {
       console.log(err.message);
       if (err.name !== "AbortError") {
         setError(err.message);
       }
     } finally {
       setIsLoading(false);
     }
   };

   if (query.length < 3) {
     setMovies([]);
     setError("");
     return;
   }
   fecthMovies();

   return function () {
     controller.abort();
   };
 }, [query]);

return {movies,isLoading,error}

}