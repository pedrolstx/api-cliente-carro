import 'dotenv/config';
import  express  from 'express';
import cors from 'cors';

import clientecontroller from './controller/clientecontroller.js'
import carrocontroller from './controller/carrocontroller.js'

const server = express();
server.use(cors());
server.use(express.json());
server.use(clientecontroller)
server.use(carrocontroller)

server.listen(process.env.PORT, () => console.log(`API Online na PORTA: ${process.env.PORT}`))
