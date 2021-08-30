const fs = require('fs-extra')

const ceemde = JSON.parse(fs.readFileSync('./database/data/totalcmd.json'))

/**
 * for add total command
 * @params {direktori} 
 * dah lah
**/
const cmdadd = () => {
	ceemde[0].totalcmd += 1
	fs.writeFileSync('./database/data/totalcmd.json', JSON.stringify(ceemde))
}

module.exports = {
	cmdadd
}