import { db } from '../database/database.js'

export async function createAmenities(req, res) {
  const { name } = req.body

  try {
    await db.query(
      `INSERT INTO 
    amenities (name)
    VALUES ($1)`,
      [name]
    )
    res.sendStatus(201)
  } catch (err) {
    res.sendStatus(500)
  }
}

export async function getAmenities(req, res) {
  try {
    const { rows } = await db.query(`SELECT * FROM amenities;`)
    res.send(rows).status(200)
  } catch (err) {
    res.sendStatus(500)
  }
}
