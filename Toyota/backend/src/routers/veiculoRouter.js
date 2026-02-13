import express from "express"
const router = express.Router();
import db from '../config/db.js'

router.get("/", async (req, res) => {
    const [results] = await db.query("SELECT * FROM veiculo where ativo = 1");
    res.send(results);
})

// export default router;
export { router }          