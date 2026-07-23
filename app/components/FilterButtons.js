import Link from "next/link";

export default function FilterButtons() {
  return (
    <div className="flex gap-3 mb-6">
      <Link
        href="/?filter=all"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        All
      </Link>

      <Link
        href="/?filter=active"
        className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
      >
        Active
      </Link>

      <Link
        href="/?filter=completed"
        className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
      >
        Completed
      </Link>
    </div>
  );
}