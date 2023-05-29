import { db } from '../database/database.js'

export async function createCities(req, res) {
  const { name } = req.body

  try {
    await db.query(
      `INSERT INTO 
    cities (name)
    VALUES ($1)`,
      [name]
    )
    res.sendStatus(201)
  } catch (err) {
    res.sendStatus(500)
  }
}

export async function getCities(req, res) {
  try {
    const { rows } = await db.query(`SELECT * FROM cities;`)
    if (rows.length === 0) return res.sendStatus(404)
    res.send(rows).status(200)
  } catch (err) {
    res.sendStatus(500)
  }
}

// export async function getCitiesId(req, res) {
//   const id = req.params.id
//   console.log(id)

//   try {
//     const { rows } = await db.query(
//       `SELECT * FROM flights
//       WHERE (id_city_to) = ($1);`,
//       [id]
//     )
//     if (rows.length === 0) return res.sendStatus(404)
//     res.send(rows).status(200)
//   } catch (err) {
//     res.sendStatus(500)
//   }
// }
