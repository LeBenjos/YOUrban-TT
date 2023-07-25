import express from 'express'
import marketController from '../Controllers/MarketController.js'

const router = express.Router()
router.get('/', (req, res) => marketController.selectMarkets(req, res))
router.post('/', (req, res) => marketController.addMarket(req, res))

export default router
