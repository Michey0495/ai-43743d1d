export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <div className="inline-block w-8 h-8 border-2 border-white/20 border-t-blue-500 rounded-full animate-spin" />
      <p className="text-white/50 mt-4 text-base">読み込み中...</p>
    </div>
  );
}
