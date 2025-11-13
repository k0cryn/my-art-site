import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Art & Characters</h1>
      <Link href="/characters">
        <button className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700">
          View Characters
        </button>
      </Link>
    </div>
  );
}