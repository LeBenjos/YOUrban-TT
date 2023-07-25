import express from 'express'
import bodyParser from 'body-parser'
import marketsRoutes from './routes/markets.js'

// Build APP
const app = express()
const PORT = 3001

app.use(bodyParser.json())
app.use('/markets', marketsRoutes)

app.get('/', (req, res) => res.send('Hello world'))

app.listen(PORT, () => {
  console.log(`Serveur Express en cours d\'exécution sur le port http://localhost:${PORT}`)
})
