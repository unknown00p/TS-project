import IOreddis from "ioredis";

export const connection = new IOreddis({
  host: "localhost",
  port: Number(process.env.REDDIS_PORT),
  // password: process.env.REDDIS_PASSWORD,
  maxRetriesPerRequest: null,
});