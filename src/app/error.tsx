"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-white mb-4">
        エラーが発生しました
      </h1>
      <p className="text-white/70 text-base mb-8">
        予期しないエラーが発生しました。もう一度お試しください。
      </p>
      <Button
        onClick={reset}
        className="bg-blue-500 hover:bg-blue-600 text-white text-base px-8 py-4 cursor-pointer transition-all duration-200"
      >
        再試行
      </Button>
    </div>
  );
}
