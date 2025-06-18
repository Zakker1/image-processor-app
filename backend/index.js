const express = require('express');
const multer = require('multer');
const { createClient } = require('redis');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });
app.use(cors());

const redis = createClient({ url: 'redis://redis:6379' });
redis.connect();

app.post('/upload', upload.single('image'), async (req, res) => {
  const taskId = uuidv4();
  const imagePath = path.resolve(req.file.path);

  await redis.hSet(`task:${taskId}`, { status: 'pending' });
  await redis.rPush('tasks', JSON.stringify({ taskId, imagePath }));

  res.json({ taskId });
});

app.get('/status/:taskId', async (req, res) => {
  const data = await redis.hGetAll(`task:${req.params.taskId}`);
  res.json(data);
});

app.listen(3000, () => console.log('Backend running on port 3000'));