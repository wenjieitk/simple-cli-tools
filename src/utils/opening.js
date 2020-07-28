const chalk = require("chalk")
const boxen = require("boxen")

const boxenOptions = {
    padding: 3,
    margin: 3,
    borderStyle: "round",
    borderColor: "blue"
}

const displayOutput = (input = null) => {
    const text = chalk.gray.bold(input || "Welcome!")
    const msgBox = boxen( text, boxenOptions )
    console.log(msgBox)
}

module.exports = {
    displayOutput
}