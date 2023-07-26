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
            const market = this.service.getMarketById(id)
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
            this.service.deleteMarketById(id)
            res.send(`Market ${id} deleted`)
        }
    }
}

export default new MarketController()
