#!/usr/bin/env node
//should run when you link/install node-rps
//rock paper scissors
import {rps} from "../lib/rpsls.js"
import minimist from 'minimist';

const args  = minimist(process.argv.slice(2));

//console.log("bin/rps-cli.js is being called");
if (args.h || args.help){
    let help_text = `Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)

    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit

    Examples:
    node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
    node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`
    console.log(help_text);
    process.exit();
    }


if (args.r || args.rules){
    let rules = `Rules for Rock Paper Scissors:   
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`
    console.log(rules)
    process.exit();
}

try {
    const res = rps(args._[0]);
    console.log(JSON.stringify(res));
} catch (error) {
    console.log("There was an error");
    console.log(error);
    process.exit(1);
}
