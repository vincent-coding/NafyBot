const Discord    = require('discord.js'),
      superagent = require('superagent');

module.exports.run = async(client, message, args) => {

    let msg = await message.channel.send("Génération...");
    
    let {body} = await superagent.get(`https://some-random-api.ml/img/red_panda`);
    if(!{body}) return message.channel.send(":x: Erreur - Une erreur inconnue est survenue.");
    
    message.channel.send({
        embed: {
            color: 0xffffff,
            title: "Image de panda roux aléatoire",
            description:`Voici l'image de panda roux que **${message.author}** a demandé`,
            image:{
                url: `${body.link}`
            }
        }
    });
    msg.delete();
    };
    
module.exports.help = {
    name:"redpanda"
};
    