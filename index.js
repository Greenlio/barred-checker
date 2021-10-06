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
    // testing area
    var sdk = server.serverProperties.difficulty
    if (sdk == 1) sdk = 'Survival'
    if (sdk == 2) sdk = 'Creative'
    if (sdk == 3) sdk = 'Spectator'
    if (sdk == 4) sdk = 'Adventure'
    console.log(`Difficulty of ${Server}: ` + sdk)
    var sdk2 = server.creditsPerDay
    if (sdk == 283.870967742) sdk2 = 'MHUnlimited'
    if (sdk2 == 90.66666666666667) sdk2 = 'MH75'
    if (sdk2 == 46.4516129032) sdk2 = 'MH35'
    if (sdk2 == 24) sdk2 = 'MH20'
    if (sdk2 == 40) sdk2 = 'Daily'
    if (sdk2 == 0) sdk2 = 'Free'
    console.log(`Plan of ${Server}: ` + sdk2)
};

mainFunction()
