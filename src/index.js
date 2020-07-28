#!/usr/bin/env node
const opening = require('./utils/opening')
const yargs = require("yargs")
const appendFile = require("./utils/fileGenerator").appendFile

const options = yargs
 .usage("Usage: -t <text>")
 .option("t", { alias: "text", describe: "Your input text", type: "string", demandOption: true })
 .argv

opening.displayOutput('Welcome to CSV generator by Wen Jie!')
console.log(`Creating csv file for you.....`)

console.log(options.text.toUpperCase())
console.log(options.text.split("").map((t,i) => (i%2 === 0) ?t.toLowerCase() :t.toUpperCase()).join(""))

appendFile(options.text.split('').join(','))