#!/usr/bin/env node
//going to run when you link/install the package and run node-rpsls
//rock, paper, scissors, lizard spock

import {rpsls} from "../lib/rpsls.js"
import minimist from 'minimist';

const args  = minimist(process.argv.slice(2));

if (args.h || args.help){
    let help_text = `Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

    -h, --help        display this help message and exit
    -r, --rules       display the rules and exit

    Examples:
    node-rpsls        Return JSON with single player RPSLS result.
                      e.g. {"player":"rock"}
    node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"Spock","result":"lose"}` 
    console.log(help_text);
    process.exit();
    }   


    var rules = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`
if (args.r || args.rules){
    console.log(rules)
    process.exit();
    }

try {
    const res = rpsls(args._[0]);
    console.log(JSON.stringify(res));
} catch (error) {
    console.error("move is out of range");
    console.log(rules);
    process.exit(1);
}
