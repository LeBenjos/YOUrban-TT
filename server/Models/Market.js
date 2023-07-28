export default class Market{
    setId(id){
        if(Number.isInteger(id)){
            this.id = id
        }
        return this
    }

    setEtablissementType(etablissement_type){
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
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(mail.match(validRegex)){
            this.mail = mail
        }
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

    getLocation(){
        return this.location
    }

    getEtablissement(){
        return this.etablissement
    }
}