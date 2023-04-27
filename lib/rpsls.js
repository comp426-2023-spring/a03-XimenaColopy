//import { rps } from 'node-rpsls'
//import { rpsls } from 'node-rpsls'

console.log("lib/rpsls.js is being called");

export function rps(move){
    //console.log("lib/rpsls.js --> rps() is being called");
    const op = ['rock', 'paper', 'scissors'];
    
    let opp_move = op[Math.floor(Math.random() * 3)]

    if (move === undefined){
        console.log("move is undefined", move);
        return {'player': opp_move};
    }

    let res = '';
    if (op.indexOf(move) ==  op.indexOf(opp_move)){
        res = 'tie'
    } else if (op.indexOf(move) - op.indexOf(opp_move) == 1 || op.indexOf(move) - op.indexOf(opp_move) == -2){
        res = 'win'
    } else {
        res = 'lose'
    }
    return {player: move, opponent: opp_move, result: res};
}



export function rpsls(move){
    console.log("lib/rpsls.js --> rpsls() is being called");
    const op = ['spock', 'scissors', 'paper', 'rock', 'lizard'];

    let opp_move = op[Math.floor(Math.random() * 5)]

    if (move === undefined){
        console.log("move is undefined", move);
        return {'player': opp_move};
    }

    let res = '';
    if (op.indexOf(move) ==  op.indexOf(opp_move)){
        res = 'tie';
    } else if (((op.indexOf(opp_move) - op.indexOf(move)+5) %5)%2){
        res = 'win';
    } else {
        res = 'lose';
    }
    
    return {player: move, opponent: opp_move, result: res};
}
