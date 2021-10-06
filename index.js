const { Minehut } = require('minehut')

// i know the code is messy stop screaming at me i just started making this
async function mainfunction() {
	const minehut = new Minehut();
	const server = await minehut.servers.get('Barred', true);
    console.log(server.playerCount)
};

mainFunction()