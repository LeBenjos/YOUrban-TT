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

    deleteMarket(id){
        this.dbMarkets.data = this.dbMarkets.data.filter(market => market.id != id)
        this.dbMarkets.encodeData()
    }

    addMarket(newData){
        newData.forEach(data => {
            this.dbMarkets.data.push(data)
        });
        this.dbMarkets.encodeData()
    }
}
