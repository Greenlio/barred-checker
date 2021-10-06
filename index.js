const { Minehut } = require('minehut')

// i know the code is messy stop screaming at me i just started making this
async function mainFunction() {
	const minehut = new Minehut();
	const server = await minehut.servers.get('Barred', true);
    //let's get organized, then ill go to bed.
    
    // is barred online?
    console.log('Is Barred online: ' + server.online)
    // how many people can barred have
    console.log('How many people can Barred have: ' + server.maxPlayers)
    // how many online
    console.log('How many are on Barred: ' + server.playerCount)
};

mainFunction()