import express from 'express';
import cors from 'cors';
import userRouter from "./routes/user.routes"
import moveRouter from "./routes/move.routes"
import {PrismaClient} from '@prisma/client';

import dotenv from 'dotenv';

const port = process.env.PORT || 3000;

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/user',userRouter)
app.use('/move',moveRouter)

export const prisma = new PrismaClient();


// open mongoose connection

app.listen(port, () => console.log(`API running in port ${port}`));