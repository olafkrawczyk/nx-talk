/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors';
import { isOdd } from '@nx-sample/is-odd';

const messages: string[] = [];

const app = express();

app.use(cors());
app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend-echo!' });
});

app.post('/api/echo', (req, res) => {
  if (typeof req.body.message !== 'string') {
    
    res.status(400).send({ messages, error: 'Invalid message' });
    return;
  }

const date = new Date();
const time = date.toLocaleTimeString();
 console.log(isOdd(2));
  messages.push(`[${time}] ${req.body.message}`);
  res.send({ messages });
});


const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
