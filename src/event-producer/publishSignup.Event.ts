import { Queue } from "bullmq";
import { connection } from "../config/reddis.connection";

export const publishSignupEvent = new Queue("user-queue", { connection });