import mongoose from "mongoose";

// final db = Db('mongodb://$host:$port/4ki');

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || "");
  } catch (error) {
    console.log(`DB接続に失敗 log ${error}`);
    throw new Error();
  }
};
