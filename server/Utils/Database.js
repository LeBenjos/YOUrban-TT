import fs from 'fs'

class Database{
    constructor(){
        this.decodeData()
    }

    decodeData(){
        fs.readFile('./App/MOCK_DATA.json', (error, data) => {
            if(error){ throw error }
            this.data = JSON.parse(data);
        });
    }

    encodeData(){
        
        const data = JSON.stringify(this.data, null, 2);

        fs.writeFile('./App/MOCK_DATA.json', data, (error) => {
            if(error){ throw error }
            console.log('Data written to file');
        });
    }
}

const database = new Database()

export default database