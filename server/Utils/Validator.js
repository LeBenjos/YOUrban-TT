class Validator{
    isId(req, res, next, id){
        if (!isNaN(id)) {
            next();
        } else {
            res.status(400).send('L\'ID du marché doit être un nombre.');
        }
    }

    isName(){
        
    }
}

export default new Validator()