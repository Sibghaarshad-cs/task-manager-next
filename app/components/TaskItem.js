import { toggleTask, deleteTask } from "../action";

export default function TaskItem({ task }) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow mb-3">
      <div className="flex items-center gap-3">
        {/* Toggle Task */}
        <form
          action={async () => {
            "use server";
            await toggleTask(task.id);
          }}
        >
          <button
            type="submit"
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              task.completed
                ? "bg-green-500 border-green-500 text-white"
                : "border-gray-400"
            }`}
          >
            {task.completed ? "✓" : ""}
          </button>
        </form>

        {/* Task Title */}
        <span
          className={
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-800"
          }
        >
          {task.title}
        </span>
      </div>

      {/* Delete Task */}
      <form
        action={async () => {
          "use server";
          await deleteTask(task.id);
        }}
      >
        <button
          type="submit"
          className="text-red-500 hover:text-red-700 text-xl font-bold"
        >
          ✕
        </button>
      </form>
    </div>
  );
}