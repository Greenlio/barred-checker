const { Minehut } = require('minehut')
const { Server } = require('config.json')
// i know the code is messy stop screaming at me i just started making this
async function mainFunction() {
	const minehut = new Minehut();
	const server = await minehut.servers.get(Server, true);
    //let's get organized, then ill go to bed.
    
    // is barred online?
    console.log(`Is ${Server} online: ` + server.online)
    // how many people can barred have
    console.log(`How many people can ${Server} have: ` + server.maxPlayers)
    // how many online
    console.log(`How many are on ${Server}: ` + server.playerCount)
};

mainFunction()