import express from "express"
import database from "../Utils/Database.js"
import Market from "../Models/Market.js"

class MarketController{
    constructor(){
        this.dbMarkets = database
    }

    selectMarkets(req, res){
        res.json(this.dbMarkets.data)
    }

    addMarket(req, res){
        const newData = req.body
        newData.forEach(data => {
            const id = this.dbMarkets.data[this.dbMarkets.data.length - 1].id + 1

            const newMarket = (new Market(id))
            .setEtablissement_type(data.etablissement_type)
            .setEtablissement(data.etablissement)
            .setLocation(data.location)
            .setAddress(data.address)
            .setMail(data.mail)

            console.log(newMarket.getMarket())
            this.dbMarkets.data.push(newMarket.getMarket())
        });
        
        this.dbMarkets.encodeData()
        res.json(newData)
    }
}

export default new MarketController()