import { Spinner } from "./UI/Spinner";
import { Fallback } from "./UI/Fallback";
import type { Photo } from "../types/types";

function PhotosGrid({
  filteredPhotos,
  favorites,
  toggleFavorite,
  loading,
}: {
  filteredPhotos: any[];
  favorites: unknown[];
  toggleFavorite: (action: { type: "TOGGLE"; payLoad: number }) => void;
  loading: boolean;
}) {
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : filteredPhotos.length === 0 ? (
        <Fallback />
      ) : (
        <section
          aria-label="Photo gallery"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {filteredPhotos.map((photo: Photo) => {
            const isFavorite = favorites.includes(photo.id);
            const thumbnailUrl = `https://picsum.photos/id/${photo.id}/400/300`;
            return (
              <article
                key={photo.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(30,30,20,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(30,30,20,0.10)]"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-[#e9e5df]">
                  <img
                    src={thumbnailUrl}
                    alt={photo.author}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      toggleFavorite({
                        type: "TOGGLE",
                        payLoad: photo.id,
                      })
                    }
                    aria-label={
                      isFavorite
                        ? `Remove ${photo.author} from favorites`
                        : `Add ${photo.author} to favorites`
                    }
                    aria-pressed={isFavorite}
                    className={`absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 shadow-sm backdrop-blur transition hover:scale-105 ${isFavorite ? "text-rose-500" : "text-[#777771]"}`}
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill={isFavorite ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path d="M20.8 8.6c0 4.2-8.8 10-8.8 10s-8.8-5.8-8.8-10a4.6 4.6 0 0 1 8.8-1.8 4.6 4.6 0 0 1 8.8 1.8Z" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between px-4 py-4">
                  <div>
                    <h2 className="text-sm font-medium">{photo.author}</h2>
                  </div>
                  <span className="text-xs text-[#aaa9a2]">0{photo.id}</span>
                </div>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
}

export default PhotosGrid;
