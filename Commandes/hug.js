const discord    = require('discord.js'),
      superagent = require('superagent');

module.exports.run = async(client, message, args) => {

    if(!message.channel.nsfw) return message.channel.send(':x: Erreur - Vous devez être dans un channel NSFW pour exécuter cette commande !');
    if(!message.mentions.members.first()) return message.channel.send(':x: Erreur - Vous devez mentionnez un autre un utilisateur !');

    let msg = await message.channel.send("Génération...");

    let {body} = await superagent.get(`https://some-random-api.ml/animu/hug`);
    if(!{body}) return message.channel.send(":x: Erreur - Une erreur inconnue est survenue.");

    message.channel.send({
        embed: {
            color: 0xffffff,
            title: "Câlin !!",
            description:`Voici le câlin que **${message.author}** a demandé pour ${message.mentions.members.first()}`,
            image:{
                url: `${body.link}`
            }
        }
    });
    msg.delete();
};

module.exports.help = {
    name:"hug"
}