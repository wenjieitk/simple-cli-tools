const createCsvWriter = require('csv-writer').createObjectCsvWriter

const appendFile = (input) => {
    const csvWriter = createCsvWriter({
        path: './result.csv',
        header: [ {id: 'input', title: 'Input'} ]
    })
    const records = [ {input} ] 
    csvWriter.writeRecords(records).then(() => console.log('...CSV created!'))
}

module.exports = {
    appendFile
}