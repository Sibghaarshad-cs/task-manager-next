export default function TaskItem({ task }) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow mb-3">
      <div className="flex items-center gap-3">
        <input type="checkbox" />

        <span>{task.title}</span>
      </div>

      <button className="text-red-500 hover:text-red-700">
        ✕
      </button>
    </div>
  );
}