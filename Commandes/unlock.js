const discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(':x: Erreur - Permissions manquante : **ADMINISTRATOR**');
    if(!message.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) return message.channel.send(':x: Erreur - Permissions manquante : *MANAGE_CHANNELS**')

    message.channel.overwritePermissions(message.guild.id , {
        SEND_MESSAGES: true
    });
    message.channel.send(':white_check_mark: Le channel à bien été dévérouillé avec succès !');
};

module.exports.help = {
    name:"unlock"
}