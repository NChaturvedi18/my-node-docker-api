import express from 'express';
const app = express();

//Define the port to run the server on
const PORT = process.env.PORT || 1000;
app.get('/', (_req, res) => {
    res.json({
        message: "Welcome to my Node.js API!",
        time: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
