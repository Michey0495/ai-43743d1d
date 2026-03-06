import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-white/70 text-lg mb-8">
        ページが見つかりませんでした
      </p>
      <Link href="/">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white text-base px-8 py-4 cursor-pointer transition-all duration-200">
          トップページに戻る
        </Button>
      </Link>
    </div>
  );
}
