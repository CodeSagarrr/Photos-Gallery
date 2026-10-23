import { useEffect, useMemo, useReducer, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { useFetchPhotos } from "./hooks/useFetchPhotos";
import PhotosGrid from "./components/PhotosGrid";
import { useDebounce } from "./hooks/useDebounce";
import favoritesReducer from "./hooks/favoritesReducer";
import { Fallback } from "./components/UI/Fallback";

function App() {
  const { photos, loading, error } = useFetchPhotos();
  // Reducer for toggle
  const [favorites, dispatch] = useReducer(favoritesReducer, [], () =>
    JSON.parse(localStorage.getItem("favorites") || "[]"),
  );
  // search query
  const [query, setQuery] = useState("");
  let search = useDebounce(query, 300);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Filter the local photo 
  const filteredPhotos = useMemo(() => {
    return (
      photos.filter((item) =>
        item.author.toLowerCase().includes(search.toLowerCase()),
      ) || []
    );
  }, [photos, search]);

  if(error){
    return <Fallback message={error} isError={true}/>
  }


  return (
    <main className="min-h-screen bg-[#f8f8f6] px-5 py-10 text-[#20201e] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Header query={query} setQuery={setQuery} />

        <div className="mb-4 flex items-center justify-between border-b border-[#e9e8e3] pb-3 text-sm text-[#777771]">
          <p>
            Curated collection{" "}
            <span className="ml-2 text-xs text-[#aaa9a2]">
              {filteredPhotos.length} photos
            </span>
          </p>
          <span className="text-xs">Made for the moment</span>
        </div>

        {/* {Photo layout} */}
        <PhotosGrid
          filteredPhotos={filteredPhotos}
          loading={loading}
          favorites={favorites}
          toggleFavorite={dispatch}
        />

        <footer className="mt-10 border-t border-[#e9e8e3] pt-5 text-center text-xs text-[#aaa9a2]">
          A small collection of beautiful moments
        </footer>
      </div>
    </main>
  );
}

export default App;
