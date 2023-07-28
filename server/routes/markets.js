import express from 'express'
import marketController from '../Controllers/MarketController.js'
import validator from '../Utils/Validator.js'

const router = express.Router()
router.param('id', (req, res, next, id) => validator.isId(req, res, next, id));
router.param('name', (req, res, next) => validator.isName(req, res, next));
router.param('type', (req, res, next) => validator.isType(req, res, next));
router.param('city', (req, res, next) => validator.isCity(req, res, next));

// Exercice 1
router.get('/', (req, res) => marketController.selectMarket(req, res))
router.post('/', (req, res) => marketController.addMarket(req, res))
router.get('/name/:name', (req, res) => marketController.getMarket(req, res))
router.get('/:id', (req, res) => marketController.getMarket(req, res))
router.delete('/:id', (req, res) => marketController.deleteMarket(req, res))
router.patch('/:id', (req, res) => marketController.updateMarket(req, res))

// Exercice 2
router.get('/type/:type', (req, res) => marketController.selectMarketByType(req, res))
router.get('/city/:city', (req, res) => marketController.selectMarketByCity(req, res))
router.get('/type/:type/:city', (req, res) => marketController.selectMarketByTypeAndCity(req, res))

// Exercice Bonus
router.get('/etablissement/:city', (req, res) => marketController.selectEtablissementByCity(req, res))
router.get('/etablissement/:city/:type', (req, res) => marketController.selectEtablissementByCityAndType(req, res))
router.delete('/etablissement/:city', (req, res) => marketController.deleteEtablissementByCity(req, res))
router.delete('/etablissement/type/:type', (req, res) => marketController.deleteEtablissementByType(req, res))

export default router
