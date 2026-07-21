export default function AddTaskForm() {
  return (
    <form className="flex gap-3 mb-6">
      <input
        type="text"
        placeholder="Enter a new task..."
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add
      </button>
    </form>
  );
}