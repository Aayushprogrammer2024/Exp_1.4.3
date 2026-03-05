import { createClient } from 'redis';

// Create Redis client using environment variable
const redisClient = createClient({
    url: process.env.REDIS_URL
});

// Handle Redis errors
redisClient.on('error', (err) => {
    console.error('Redis Error:', err);
});

// Connect function
const connectRedis = async () => {
    await redisClient.connect();
    console.log("✅ Redis Connected");
};

export { redisClient, connectRedis };