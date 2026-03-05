import { createClient } from "redis";

const redisClient = createClient({
  url: "redis://red-d6kt1995pdvs73883t5g:6379"
});

redisClient.on("error", (err) => {
  console.error("Redis Error:", err);
});

export const connectRedis = async () => {
  await redisClient.connect();
  console.log("✅ Redis connected");
};

export default redisClient;