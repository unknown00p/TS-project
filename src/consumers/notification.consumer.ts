import { Worker } from "bullmq";
import { connection } from "../config/reddis.connection";

type signup_schema = {
  email: string;
};

const signup_worker = new Worker(
  "user-queue",
  async (job) => {
    console.log('job');
  },
  {
    connection,
  },
);

signup_worker.on("completed",(job)=>{
  console.log(job.data)
})

export { signup_worker };
