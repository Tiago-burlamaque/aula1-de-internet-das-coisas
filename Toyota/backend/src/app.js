import express from 'express'
import cors from 'cors'

// Importando a rota veiculo
import { router } from './routers/veiculoRouter.js'
import { routerUser } from './routers/usuariosRouter.js'


const app = express()

app.use(cors())
app.use(express.json())

// Endpoints
app.use("/veiculo", router);
app.use("/usuario", routerUser)

export default app;