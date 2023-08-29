import 'dotenv/config';

import  express  from 'express';
import cors from 'cors';

import clientecontroller from './controller/clientcontroller.js'


const server = express();
server.use(cors());
server.use(express.json());
server.use(clientecontroller)

server.listen(process.env.PORT, () => console.log(`subiu a api bb, na porta: ${process.env.PORT}`))
