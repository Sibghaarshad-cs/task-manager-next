"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createTask(formData) {
  const title = formData.get("title");

  if (!title) return;

  await prisma.task.create({
    data: {
      title,
      completed: false,
      user: {
        connect: {
          id: 1,
        },
      },
    },
  });

  revalidatePath("/");
}

export async function toggleTask(id) {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!task) return;

  await prisma.task.update({
    where: {
      id: Number(id),
    },
    data: {
      completed: !task.completed,
    },
  });

  revalidatePath("/");
}

export async function deleteTask(id) {
  await prisma.task.delete({
    where: {
      id: Number(id),
    },
  });

  revalidatePath("/");
}