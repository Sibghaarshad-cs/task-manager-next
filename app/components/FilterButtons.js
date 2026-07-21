export default function FilterButtons() {
  return (
    <div className="flex gap-3 mb-6">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        All
      </button>

      <button className="bg-gray-200 px-4 py-2 rounded-lg">
        Active
      </button>

      <button className="bg-gray-200 px-4 py-2 rounded-lg">
        Completed
      </button>
    </div>
  );
}