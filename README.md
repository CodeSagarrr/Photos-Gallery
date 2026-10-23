# Photo Gallery

A responsive photo gallery built with React, TypeScript, Vite, and Tailwind CSS. Browse photos, search by author, and save favourites in your browser.

## Features

- Responsive gallery grid: one column on mobile, two on tablet, and four on desktop.
- Author search with a 500 ms debounce.
- Favourite buttons that save selections in `localStorage` between visits.
- Lazy-loaded photo images.
- Loading spinner, no-results message, and an error message if photo loading fails.

## Getting started

You need Node.js and npm installed.

1. Install the project dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local address printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Type-check the app and create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint on the project. |

## How the app is organized

- `src/App.tsx` — Loads photo data, coordinates search and favourites, and lays out the page.
- `src/components/Header.tsx` — Gallery title and author search input.
- `src/components/PhotosGrid.tsx` — Responsive photo cards and favourite buttons.
- `src/components/UI/Spinner.tsx` — Loading state.
- `src/components/UI/Fallback.tsx` — No-results and error messages.
- `src/hooks/useFetchPhotos.ts` — Loads up to 30 photo records from Picsum and exposes loading and error state.
- `src/hooks/useDebounce.ts` — Delays search filtering until typing pauses.
- `src/hooks/favoritesReducer.ts` — Adds and removes favourite photo IDs.

## Photo data and network use

The gallery requests photo records from `https://picsum.photos/v2/list?limit=30`. Photo thumbnails are loaded from Picsum as needed. An internet connection is required for photos to appear. If the request fails, the app displays the error message returned by the hook.

## Styling

Tailwind CSS 4 is loaded from `src/index.css` and integrated with Vite through `@tailwindcss/vite` in `vite.config.ts`.
