class Validator{
    isId(req, res, next, id){
        if (!isNaN(id)) {
            next()
        } else {
            switch(id){
                case "name":
                    this.isName(req, res, next)
                    break
                case "type":
                    this.isType(req, res, next)
                    break
                case "city":
                    this.isCity(req, res, next)
                    break
            }
            res.status(400).send('L\'ID du marché doit être un nombre.')
        }
    }

    isName(req, res, next){
        if(req.params.name){
            req.params.name = req.params.name.split("_")
            req.params.name = req.params.name.join(" ")
            next()
        } else {
            res.status(400).send('Le nom du marché doit être renseigné.')
        }
    }

    isType(req, res, next){
        if(req.params.type){
            req.params.type = req.params.type.split("_")
            req.params.type = req.params.type.join(" ")
            next()
        } else {
            res.status(400).send('Le type du marché doit être renseigné.')
        }
    }

    isCity(req, res, next){
        if(req.params.city){
            req.params.city = req.params.city.split("_")
            req.params.city = req.params.city.join(" ")
            next()
        } else {
            res.status(400).send('La ville du marché doit être renseigné.')
        }
    }
}

export default new Validator()
