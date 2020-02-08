const Discord = require("discord.js"),
      superagent = require("superagent");

module.exports.run = async(client, message, args) => {

    if(!message.channel.nsfw) return message.channel.send(':x: Erreur - Vous devez être dans un channel NSFW pour exécuter cette commande !');
    if(!message.mentions.members.first()) return message.channel.send(':x: Erreur - Vous devez mentionnez un autre un utilisateur !');

    let msg = await message.channel.send("Génération...");

    let {body} = await superagent.get(`https://some-random-api.ml/animu/wink`);
    if(!{body}) return message.channel.send(":x: Erreur - Une erreur inconnue est survenue.");

    message.channel.send({
        embed: {
            color: 0xffffff,
            title: "Clin d'œil",
            description:`${message.mentions.members.first()}, ${message.author} vous a fait un clin d'œil`,
            image:{
                url: `${body.link}`
            }
        }
    });
    msg.delete();
};

module.exports.help = {
    name:"wink"
};
