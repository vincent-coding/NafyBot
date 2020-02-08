const Discord = require("discord.js"),
      superagent = require("superagent");

module.exports.run = async(client, message, args) => {

    let msg = await message.channel.send("Génération...");

    let {body} = await superagent.get(`https://randomfox.ca/floof/`);
    if(!{body}) return message.channel.send(":x: Erreur - Une erreur inconnue est survenue.");

    message.channel.send({
        embed: {
            color: 0xffffff,
            title: "Image de renard aléatoire",
            description:`Voici le renard que **${message.author}** a demandé`,
            image:{
                url: `${body.image}`
            }
        }
    });
    msg.delete();
};

module.exports.help = {
    name:"fox"
};
