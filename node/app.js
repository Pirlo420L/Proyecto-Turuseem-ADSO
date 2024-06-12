import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
// import expressSession from 'express-session';

import db from './database/db.js';
import apprenticeRoutes from './routes/ApprenticeRoutes.js'
import memorandumRoutes from './routes/memorandumRoutes.js'
import userRouter from './routes/UserRoutes.js'
import programaRoutes from './routes/programaRoutes.js'

const app = express();

app.use(cors())
app.use(express.json())
app.use('/aprendiz', apprenticeRoutes)
app.use('/memorando', memorandumRoutes)
app.use('/api/user', userRouter)
app.use('/programa', programaRoutes)

try {
    await db.authenticate()
    console.log('Conexion a la db exitosa');
} catch (error) {
    console.log(`Error de conexion a la bd ${error}`);
}

app.listen(8000, () => {
    console.log('Server running on port 8000');
})