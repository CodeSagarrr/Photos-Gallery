import { useCallback } from "react";

function Header({
  setQuery,
}: {
  query: string;
  setQuery: (value: string) => void;
}) {

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    [setQuery],
  );
  
  return (
    <header className="mb-9 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#81817b]">
          A little inspiration
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Beautiful Pictures<span className="text-[#d58b6a]">.</span>
        </h1>
        <p className="mt-3 max-w-md text-sm leading-6 text-[#777771]">
          A collection of moments worth keeping. Find a photographer and
          explore.
        </p>
      </div>
      <label className="relative block w-full sm:max-w-xs">
        <span className="sr-only">Search photos by author</span>
        <svg
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#92928c]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m16 16 4 4" />
        </svg>
        <input
          onChange={handleInputChange}
          placeholder="Search by author..."
          className="w-full rounded-full border border-[#e8e7e2] bg-white py-3 pl-12 pr-5 text-sm outline-none transition placeholder:text-[#aaa9a2] focus:border-[#c99a80] focus:ring-2 focus:ring-[#c99a80]/15"
        />
      </label>
    </header>
  );
}

export default Header;
