import prisma from "@/lib/prisma";

import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import AddTaskForm from "./components/AddTaskForm";
import FilterButtons from "./components/FilterButtons";
import TaskList from "./components/TaskList";

export default async function Home() {
  const tasks = await prisma.task.findMany({
  orderBy: {
    id: "asc",
  },
});

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <Header />

        <ProgressBar />

        <AddTaskForm />

        <FilterButtons />

        <TaskList tasks={tasks} />

      </div>
    </main>
  );
}