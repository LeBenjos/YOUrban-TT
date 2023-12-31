import Database from "../Utils/Database.js";

export default class MarketRepository{
    constructor(){
        this.dbMarkets = new Database()
    }

    selectMarket(){
        return this.dbMarkets.data
    }

    getMarketById(id){
        return this.dbMarkets.data.filter(market => market.id == id)
    }

    getMarketByName(name){
        return this.dbMarkets.data.filter(market => market.etablissement == name)
    }

    deleteMarket(id){
        const newData = this.dbMarkets.data.filter(market => market.id != id)
        this.dbMarkets.encodeData(newData)
    }

    addMarket(newData){
        newData.forEach(data => {
            this.dbMarkets.data.push(data)
        });
        this.dbMarkets.encodeData()
    }

    selectMarketByType(type){
        return this.dbMarkets.data.filter(market => market.etablissement_type == type)
    }

    selectMarketByCity(city){
        return this.dbMarkets.data.filter(market => market.location == city)
    }

    encodeData(newData){
        this.dbMarkets.encodeData(newData)
    }
}
