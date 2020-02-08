const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    message.delete();
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(":x: Erreur - Permission manquante : **BAN_MEMBERS**");
    
    if(message.mentions.users.size === 0) {
        return message.channel.send(":x: Erreur - Vous devez mentionner un utilisateur !");
    }

    let ban = message.guild.member(message.mentions.users.first());

    if(!ban) {
        return message.channel.send(":x: Erreur - L'utisateur mentionné n'a pas été trouvé !");
    }

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(":x: Erreur - Permission du bot manquante : **BAN_MEMBERS**");

    ban.ban().then(member => {
        message.channel.send(`:white_check_mark: ${member.user.username} à bien été banni par ${message.author.username}.`);
    });
};

module.exports.help = {
    name: "ban"
};