import { db } from '../database/database.js'
import dayjs from 'dayjs'

export async function createFlights(req, res) {
  const { cityfrom, cityto } = req.query
  const flight = req.body

  try {
    const { rows } = await db.query(
      `SELECT * FROM cities WHERE id = $1 OR id = $2`,
      [cityfrom, cityto]
    )
    if (rows.length === 0) return res.sendStatus(404)
    await db.query(
      `INSERT INTO 
    flights (id_city_from, id_city_to, id_airline, depart, return, price)
    VALUES ($1, $2, $3, $4, $5, $6)`,
      [cityfrom, cityto, 5, flight.depart, flight.return, flight.price]
    )
    res.sendStatus(201)
  } catch (err) {
    res.sendStatus(500)
  }
}

export async function getFlightsCityId(req, res) {
  const id = req.params.id

  try {
    const { rows } = await db.query(
      `SELECT flights.id, flights.depart, flights.price,
      c1.name AS cityfrom,
      c2.name AS cityto FROM flights 
      JOIN cities c1 ON id_city_from = c1.id 
      JOIN cities c2 ON id_city_to = c2.id WHERE id_city_from = $1;`,
      [id]
    )
    if (rows.length === 0) return res.sendStatus(404)
    res.send(rows).status(200)
  } catch (err) {
    res.sendStatus(500)
  }
}

export async function getFlightsId(req, res) {
  const id = req.params.id
  console.log(id)

  try {
    const { rows } = await db.query(
      `SELECT flights.depart, flights.return, flights.price,
    c1.name AS cityfrom,
    c2.name AS cityto,
    airlines.name
    FROM flights
    JOIN cities c1 ON id_city_from = c1.id 
    JOIN cities c2 ON id_city_to = c2.id
    JOIN airlines ON id_airline = airlines.id
    WHERE flights.id = $1;`,
      [id]
    )
    if (rows.length === 0) return res.sendStatus(404)
    res.send(rows[0]).status(200)
  } catch (err) {
    res.sendStatus(500)
  }
}
