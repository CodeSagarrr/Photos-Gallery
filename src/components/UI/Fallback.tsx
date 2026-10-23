// Show an error message or explain when the search has no matches.
type FallbackProps = {
  message?: string
  isError?: boolean
}

export function Fallback({ message = 'Try another author name to find a photo.', isError = false }: FallbackProps) {
  return (
    <div role={isError ? 'alert' : undefined} className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-[#deddd7] bg-white/60 px-6 text-center">
      <span className="mb-3 text-3xl" aria-hidden="true">{isError ? '!' : '?'}</span>
      <h2 className="text-base font-medium">{isError ? 'Photos could not be loaded' : 'No photos found'}</h2>
      <p className="mt-1 text-sm text-[#85857f]">{message}</p>
    </div>
  )
}
