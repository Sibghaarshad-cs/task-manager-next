import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import AddTaskForm from "../components/AddTaskForm";
import FilterButtons from "../components/FilterButtons";
import TaskList from "../components/TaskList";


export default async function Home({ searchParams }) {

  // Check if user is logged in
  const cookieStore = await cookies();

  const userId = cookieStore.get("userId");

  if (!userId) {
    redirect("/login");
  }


  const params = await searchParams;

  const filter = params?.filter || "all";

  let where = {};

  if (filter === "active") {
    where.completed = false;
  } else if (filter === "completed") {
    where.completed = true;
  }


  const tasks = await prisma.task.findMany({
  where: {
    ...where,
    userId: Number(userId.value),
  },
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

        <FilterButtons filter={filter} />

        <TaskList tasks={tasks} />

      </div>
    </main>
  );
}