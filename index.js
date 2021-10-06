const { Minehut } = require('minehut')


async function myFunction() {
	const minehut = new Minehut();
	const server = await minehut.servers.get('Barred', true);

	const plugins = await server.getInstalledContent();
	const pluginsmap = plugins.map(p => p.title)
    console.log(pluginsmap)

    if (pluginsmap.includes('Amongus')) {
        console.log('true')
    } else {
        console.log('no')
    }
};

myFunction()