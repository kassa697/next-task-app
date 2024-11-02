import { TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (
  _: NextResponse,
  { params }: { params: { id: string } }
) => {
  try {
    connectDb();
    const task = await TaskModel.findById(params.id);
    if (!task) {
      return NextResponse.json(
        { message: "タスクが存在しません" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "タスクの取得成功", task });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "タスク取得失敗" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
