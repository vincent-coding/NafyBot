const { get } = require("https");

module.exports.run = async(client, message, args) => {

    if(!message.channel.nsfw) return message.channel.send(':x: Erreur - Vous devez être dans un channel NSFW pour exécuter cette commande !');

    get("https://neko-love.xyz/api/v1/neko", (res) => {
        const { statusCode } = res;
        if(statusCode !== 200) return message.channel.send('x: Erreur - Une erreur est survenue !');
        res.setEncoding('utf8');
        let rawData = "";
        res.on("data", chunk => {
            rawData += chunk;
        });
        res.on('end', () => {
            try{
                const parsedData = JSON.parse(rawData);
                message.channel.send({
                    embed:{
                        color:0xffffff,
                        title:`Voici l'image que ${message.author.username} à demandé`,
                        image:{
                            url: parsedData.url
                        }
                    }
                });
            } catch (error) {
                console.error(error.message);
            }
        });
    }).on("error", (error) => {
        console.error(error.message);
    });
};

module.exports.help = {
    name:"manga"
}