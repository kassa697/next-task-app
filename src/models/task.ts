import mongoose, { Document } from "mongoose";

export interface Task {
  title: string;
  desription: string;
  dueDate: string;
  isCompleted: boolean;
}

// interfaceを参照して足し算のイメージ
export interface TaskDocument extends Task, Document {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

//上のTaskDocmentを型定義しているイメージ
const taskSchema = new mongoose.Schema<TaskDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    desription: {
      type: String,
    },
    dueDate: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const TaskModel =
  mongoose.models.Task || mongoose.model("Task", taskSchema);
