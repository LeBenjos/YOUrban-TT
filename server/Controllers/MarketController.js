import express from "express"
import MarketService from "../Services/MarketService.js"
import Market from "../Models/Market.js";

class MarketController{
    constructor(){
        this.service = new MarketService()
    }

    selectMarket(req, res){
        const allMarket = this.service.selectMarket()
        res.send(allMarket)
    }

    getMarket(req, res){
        if(req.params.id){
            const id = req.params.id
            if(!this.service.isIdExist(id)){
                throw new Error("This market doesn't exist")
            }

            const market = this.service.getMarketById(id)
            res.send(market)
        } else if(req.params.name){
            const name = req.params.name
            if(!this.service.isNameExist(name)){
                throw new Error("This market doesn't exist")
            }

            const market = this.service.getMarketByName(name)
            res.send(market)
        }
    }

    addMarket(req, res){
        this.service.addMarket(req.body)
        res.send("create market")
    }

    deleteMarket(req, res){
        if(req.params.id){
            const id = req.params.id
            if(!this.service.isIdExist(id)){
                throw new Error("This market doesn't exist")
            }

            this.service.deleteMarketById(id)
            res.send(`Market ${id} deleted`)
        }
    }

    updateMarket(req, res){
        const id = req.params.id
        if(!this.service.isIdExist(id)){
            throw new Error("This market doesn't exist")
        }

        this.service.updateMarket(req, this.service.getMarketById(id))
        res.send(`Market ${id} updated`)
    }

    selectMarketByType(req, res){
        const market = this.service.selectMarketByType(req.params.type)
        res.send(market)
    }

    selectMarketByCity(req, res){
        const market = this.service.selectMarketByCity(req.params.city)
        res.send(market)
    }

    selectMarketByTypeAndCity(req, res){
        const type = this.service.selectMarketByType(req.params.type)
        const city = this.service.selectMarketByCity(req.params.city)
        const response = type.filter(marketT => city.some(marketC => marketT.getLocation() == marketC.getLocation()))        
        res.send(response)
    }

    selectEtablissementByCity(req, res){
        const market = this.service.selectMarketByCity(req.params.city)
        const response = []
        market.forEach(m => {
            response.push(m.getEtablissement())
        });

        res.send(response)
    }

    selectEtablissementByCityAndType(req, res){
        const city = this.service.selectMarketByCity(req.params.city)
        const type = this.service.selectMarketByType(req.params.type)
        const market = city.filter(marketC => type.some(marketT => marketC.getLocation() == marketT.getLocation()))

        const response = []
        market.forEach(m => {
            response.push(m.getEtablissement())
        });

        res.send(response)
    }

    deleteEtablissementByCity(req, res){
        const number = this.service.deleteMarketByCity(req.params.city)

        res.send(`All establishments in ${req.params.city} (${number}) are deleted`)
    }

    deleteEtablissementByType(req, res){
        const number = this.service.deleteMarketByType(req.params.type)

        res.send(`All ${req.params.type} establishments (${number}) are deleted`)
    }
}

export default new MarketController()
