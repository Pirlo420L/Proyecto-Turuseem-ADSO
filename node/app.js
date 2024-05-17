import express from 'express';
import cors from 'cors';

import db from './database/db.js';
import apprenticeRoutes from './routes/routes.js'

const app = express();

app.use(cors())
app.use(express.json())
app.use('/aprendiz', apprenticeRoutes)

try {
    await db.authenticate()
    console.log('Conexion a la db exitosa');
} catch (error) {
    console.log(`Error de conexion a la bd ${error}`);
}

app.get('/', (req, res) => {
    res.send('Holaaaaaaa')
})

app.listen(8000, () => {
    console.log('Server running on port 8000');
})