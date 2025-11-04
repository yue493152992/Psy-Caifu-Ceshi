import Link from "next/link";

export default function ResultIndex() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-blue-50 to-purple-50 p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">结果页示例入口</h1>
        <p className="text-zinc-600 mb-6">请选择一个具体组合查看结果页示例。</p>
        <Link href="/result/doll-jewelry" className="px-6 py-3 font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-full inline-block">
          查看示例：布娃娃 × 珠宝
        </Link>
      </div>
    </main>
  );
}


