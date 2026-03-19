import express from 'express';
import redis from 'redis';

const app = express();
const PORT = process.env.PORT || 2000;

// The hostname 'redis' matches the service name in docker-compose.yml
const client = redis.createClient({
    url: 'redis://redis:6379'
});

client.on('error', err => console.log('Redis Error', err));
client.connect();

app.get('/', async (_req, res) => {
    await client.set('last_visit', new Date().toISOString());
    const lastVisit = await client.get('last_visit');
    
    res.json({
        message: "Welcome! Redis is connected.",
        time: new Date().toISOString(),
        stored_in_redis: lastVisit
    });
});

app.get('/counter', async (_req, res) => {
    try {
        const counter = await client.incr('visit_counter');
        res.json({
            message: `This endpoint counts visits using Redis ${counter}`, 
        });
    } catch (err) {
        console.log('Redis error:', err.message);
        res.status(500).json({ error: 'Redis not available' });
    }
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));
