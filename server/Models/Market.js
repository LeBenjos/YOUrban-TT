export default class Market{
    setId(id){
        this.id = id
        return this
    }

    setEtablissement_type(etablissement_type){
        this.etablissement_type = etablissement_type
        return this
    }

    setEtablissement(etablissement){
        this.etablissement = etablissement
        return this
    }

    setLocation(location){
        this.location = location
        return this
    }

    setAddress(address){
        this.address = address
        return this
    }

    setMail(mail){
        this.mail = mail
        return this
    }

    getMarket(){
        return {
            "id": this.id,
            "etablissement_type": this.etablissement_type,
            "etablissement": this.etablissement,
            "location": this.location,
            "address": this.address,
            "mail": this.mail
        }
    }
}