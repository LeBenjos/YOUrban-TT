import Market from "../Models/Market.js";
import MarketRepository from "../Repository/MarketRepository.js"

export default class MarketService{
    constructor(){
        this.repository = new MarketRepository()
    }

    selectMarket(){
        const allMarket = this.repository.selectMarket()
        const response = []

        allMarket.forEach(market => {
            response.push(
                new Market()
                .setId(market.id)
                .setEtablissement_type(market.etablissement_type)
                .setEtablissement(market.etablissement)
                .setLocation(market.location)
                .setAddress(market.address)
                .setMail(market.mail)
            )
        });

        return response
    }

    getMarketById(id){
        const market = this.repository.getMarketById(id)
        const response = []
        
        market.forEach(m => {
            response.push(new Market()
            .setId(m.id)
            .setEtablissement_type(m.etablissement_type)
            .setEtablissement(m.etablissement)
            .setLocation(m.location)
            .setAddress(m.address)
            .setMail(m.mail))  
        });
        
        return response
    }

    addMarket(newMarket){
        const newData = []

        newMarket.forEach(m => {
            newData.push(new Market()
            .setId(m.id)
            .setEtablissement_type(m.etablissement_type)
            .setEtablissement(m.etablissement)
            .setLocation(m.location)
            .setAddress(m.address)
            .setMail(m.mail))
        });

        this.repository.addMarket(newData)
    }

    deleteMarketById(id){
        this.repository.deleteMarket(id)
    }
}