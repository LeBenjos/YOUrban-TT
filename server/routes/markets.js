import express from 'express'
import marketController from '../Controllers/MarketController.js'
import validator from '../Utils/Validator.js'

const router = express.Router()
router.param('id', (req, res, next, id) => validator.isId(req, res, next, id));
// router.param('name', (req, res, next, id) => validator.isName(req, res, next, id));

router.get('/', (req, res) => marketController.selectMarket(req, res))
router.post('/', (req, res) => marketController.addMarket(req, res))
router.get('/name/:name', (req, res) => marketController.getMarket(req, res))
router.get('/:id', (req, res) => marketController.getMarket(req, res))
router.delete('/:id', (req, res) => marketController.deleteMarket(req, res))
router.patch('/:id', (req, res) => marketController.updateMarket(req, res))

export default router
