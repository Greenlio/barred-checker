const { Minehut } = require('minehut')
const { Server } = require('./config.json')
async function mainFunction() {
	const minehut = new Minehut();
	const server = await minehut.servers.get(Server, true);
    
    // is barred online?
    console.log(`Is ${Server} online: ` + server.online)
    // how many people can barred have
    console.log(`How many people ${Server} can have: ` + server.maxPlayers)
    // how many online
    console.log(`How many are on ${Server}: ` + server.playerCount)
};

mainFunction()
