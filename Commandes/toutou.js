const superagent = require('superagent');

module.exports.run = async(client, message, args) => {

    if(!message.channel.nsfw) return message.channel.send(':x: Erreur - Vous devez être dans un channel NSFW pour exécuter cette commande !');
    if(!message.mentions.members.first()) return message.channel.send(':x: Erreur - Vous devez mentionnez un autre un utilisateur !');

    let msg = await message.channel.send("Génération...");

    let {body} = await superagent.get(`https://some-random-api.ml/animu/pat`);
    if(!{body}) return message.channel.send(":x: Erreur - Une erreur inconnue est survenue.");

    message.channel.send({
        embed: {
            color: 0xffffff,
            title: "Bon toutou",
            description:`${message.mentions.members.first()} est un bon toutou d'après ${message.author}`,
            image:{
                url: `${body.link}`
            }
        }
    });
    msg.delete();
};

module.exports.help = {
    name:"toutou"
}