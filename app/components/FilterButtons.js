import Link from "next/link";

export default function FilterButtons({ filter }) {
  return (
    <div className="flex gap-3 mb-6">

      <Link
        href="/dashboard?filter=all"
        className={`px-4 py-2 rounded-lg ${
          filter === "all"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        All
      </Link>

      <Link
        href="/dashboard?filter=active"
        className={`px-4 py-2 rounded-lg ${
          filter === "active"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        Active
      </Link>

      <Link
        href="/dashboard?filter=completed"
        className={`px-4 py-2 rounded-lg ${
          filter === "completed"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        Completed
      </Link>

    </div>
  );
}