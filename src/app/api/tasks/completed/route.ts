// api 使う時は「route.ts」というファイル名

import { TaskDocument, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDb();
    const completedTasks: TaskDocument[] = await TaskModel.find({
      isCompleted: true,
    });

    return NextResponse.json({
      message: "タスクの取得に成功",
      tasks: completedTasks,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "タスクの取得に失敗", status: 500 });
  }
};

export const dynamic = "force-dynamic";
