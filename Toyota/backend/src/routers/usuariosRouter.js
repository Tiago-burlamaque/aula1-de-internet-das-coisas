import express from 'express'
const routerUser = express.Router()
import db from '../config/db.js'

routerUser.get('/', async (req, res) => {
    try {
        const [results] = await db.query("SELECT * FROM usuario where activo = 1")
        res.send(results);
    } catch (error) {
        console.log(error)
    }
})

routerUser.post('/', async (req, res) => {
    const { nome, email, senha } = req.body
    try {
        const [results] = await db.query("INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)",
            [nome, email, senha]
        )
        const [novoUsuario] = await db.query('SELECT * FROM usuario WHERE id = ?', [results.insertId])
        res.status(201).json(novoUsuario[0])
        res.send(results)
    } catch (error) {
        console.log(error)
    }
})

export { routerUser }