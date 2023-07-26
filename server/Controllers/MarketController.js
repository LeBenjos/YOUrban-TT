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
            let name = req.params.name
            const nameArray = name.split("_")
            name = nameArray.join(" ")
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
}

export default new MarketController()
