import express from 'express';
import connectCitiesRoutes from './routes/city.routes';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
const server = express();
const port = process.env.PORT || 5000;

// parse requests of content-type: application/json
server.use(json());
server.use(cors());
// parse requests of content-type: application/x-www-form-urlencoded
server.use(urlencoded({ extended: true }));

// GET endpoint route
server.get('/express', (req, res) => {
  res.json({ message: 'EXPRESS BACKEND IS CONNECTED TO REACT' });
});

server.get('/', (req, res) => {
  res.json({ message: 'Just Travelous Express server' });
});

// Connect server with routes created
connectCitiesRoutes(server);

// set port, listen for requests
server.listen(port, () => console.log(`Listening on port ${port}`));
