// Show a compact spinner while gallery content is being prepared.
export function Spinner() {
  return (
    <div role="status" className="flex min-h-64 flex-col items-center justify-center gap-3 text-sm text-[#777771]">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-[#e6ddd6] border-t-[#bd8061]" />
      <span>Loading photos...</span>
    </div>
  )
}
