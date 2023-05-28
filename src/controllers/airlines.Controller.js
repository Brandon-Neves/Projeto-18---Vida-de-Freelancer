import { db } from '../database/database.js'

export async function createAirlines(req, res) {
  const { name } = req.body

  try {
    await db.query(
      `INSERT INTO 
    airlines (name)
    VALUES ($1)`,
      [name]
    )
    res.sendStatus(201)
  } catch (err) {
    res.sendStatus(500)
  }
}

export async function getAirlines(req, res) {
  try {
    const { rows } = await db.query(`SELECT * FROM airlines;`)
    res.send(rows).status(200)
  } catch (err) {
    res.sendStatus(500)
  }
}
