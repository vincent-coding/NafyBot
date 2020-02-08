const discord = require('discord.js');
var version = "0.7.5";

module.exports.run = async(client, message, args) => {

    message.channel.send({
        embed:{
            color:0xffffff,
            title:`Changement effectué par la version **${version}**`,
            description:"▫ Ajout de la commande `fban`\n▫ Ajout de la commande `fkick`\n▫ Ajout de la commande `changelogs`\n▫ Modification mineure des commandes `ban` et `kick`"
        }
    })    
};

module.exports.help = {
    name:"changelogs"
}