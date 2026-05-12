import { Worker } from "bullmq";
import { connection } from "../config/reddis.connection";

type signup_schema = {
  id: number;
  email: string;
};

const signup_worker = new Worker(
  "signup-queue",
  async (job) => {
    return job
  },
  {
    connection,
  },
);

export { signup_worker };