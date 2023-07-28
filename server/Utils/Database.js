import fs from 'fs'

export default class Database{
    constructor(){
        this.decodeData()
    }

    decodeData(){
        fs.readFile('./App/MOCK_DATA.json', (error, data) => {
            if(error){ throw error }
            this.data = JSON.parse(data)
        })
    }

    encodeData(newData = this.data){
        const data = JSON.stringify(newData, null, 2)

        fs.writeFile('./App/MOCK_DATA.json', data, (error) => {
            if(error){ throw error }
            console.log('Data written to file')
        })
    }
}
