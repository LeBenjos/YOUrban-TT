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
                .setEtablissementType(market.etablissement_type)
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
        let response
        
        market.forEach(m => {
            response = (new Market()
            .setId(m.id)
            .setEtablissementType(m.etablissement_type)
            .setEtablissement(m.etablissement)
            .setLocation(m.location)
            .setAddress(m.address)
            .setMail(m.mail))  
        });
        
        return response
    }

    getMarketByName(name){
        const market = this.repository.getMarketByName(name)
        let response
        
        market.forEach(m => {
            response = (new Market()
            .setId(m.id)
            .setEtablissementType(m.etablissement_type)
            .setEtablissement(m.etablissement)
            .setLocation(m.location)
            .setAddress(m.address)
            .setMail(m.mail))  
        });

        return response
    }

    addMarket(newData){
        const newMarket = []

        newData.forEach(m => {
            if(this.isIdExist(m.id)){
                throw new Error(`Market id ${m.id} already exist!`)
            } else {
                newMarket.push(new Market()
                .setId(m.id)
                .setEtablissementType(m.etablissement_type)
                .setEtablissement(m.etablissement)
                .setLocation(m.location)
                .setAddress(m.address)
                .setMail(m.mail))
            }
        });

        this.repository.addMarket(newMarket)
    }

    deleteMarketById(id){
        this.repository.deleteMarket(id)
    }

    updateMarket(req, market){
        const { id, etablissement_type, etablissement, location, address, mail } = req.body
        
        if(id){
            if(this.isIdExist(id) && id != req.params.id){
                throw new Error(`Market id ${id} already exist!`)
            } else {
                market.setId(id)
            }
        }

        if(etablissement_type){
            market.setEtablissementType(etablissement_type)
        }

        if(etablissement){
            market.setEtablissement(etablissement)
        }

        if(location){
            market.setLocation(location)
        }

        if(address){
            market.setAddress(address)
        }

        if(mail){
            market.setMail(mail)
        }

        this.repository.deleteMarket(req.params.id)
        this.repository.addMarket([market])
    }

    selectMarketByCity(city){
        const allCityMarket = this.repository.selectMarketByCity(city)
        const response = []

        allCityMarket.forEach(market => {
            response.push(
                new Market()
                .setId(market.id)
                .setEtablissementType(market.etablissement_type)
                .setEtablissement(market.etablissement)
                .setLocation(market.location)
                .setAddress(market.address)
                .setMail(market.mail)
            )
        });

        return response
    }

    selectMarketByType(type){
        const allTypeMarket = this.repository.selectMarketByType(type)
        const response = []

        allTypeMarket.forEach(market => {
            response.push(
                new Market()
                .setId(market.id)
                .setEtablissementType(market.etablissement_type)
                .setEtablissement(market.etablissement)
                .setLocation(market.location)
                .setAddress(market.address)
                .setMail(market.mail)
            )
        });

        return response
    }

    deleteMarketByCity(city){
        const allMarket = this.repository.selectMarket()
        const cityMarket = this.repository.selectMarketByCity(city)
        if(cityMarket.length == 0){ throw new Error("0 market found") }

        const newData = allMarket.filter(marketA => cityMarket.some(marketC => marketC.location != marketA.location))
        this.repository.encodeData(newData)
        
        return cityMarket.length
    }

    deleteMarketByType(type){
        const allMarket = this.repository.selectMarket()
        const typeMarket = this.repository.selectMarketByType(type)
        if(typeMarket.length == 0){ throw new Error("0 market found") }

        const newData = allMarket.filter(marketA => typeMarket.some(marketT => marketT.etablissement_type != marketA.etablissement_type))
        this.repository.encodeData(newData)
        
        return typeMarket.length
    }

    isIdExist(id){
        if(this.getMarketById(id) instanceof Market){
            return true
        }
        return false
    }

    isNameExist(name){
        if(this.getMarketByName(name) instanceof Market){
            return true
        }
        return false
    }
}