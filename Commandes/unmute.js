const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES" && "MANAGE_ROLES")) return message.channel.send(":x: Erreur - Permissions manquantes : **MANAGE_MESSAGES** et **MANAGE_ROLES**").catch(console.error);
    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES" && "MANAGE_ROLES")) return message.channel.send(":x: Erreur - Permissions manquantes du bot : **MANAGE_MESSAGES** et **MANAGE_ROLES**").catch(console.error);

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(":x: Erreur - Le membre est introuvable ou n'existe pas !");

    if(message.mentions.members.first().roles.find(role => role.name === "NafyMute")) {
        let muterole = message.guild.roles.find(role => role.name === 'NafyMute');
        member.removeRole(muterole);
        message.channel.send(`:white_check_mark: L'utilisateur **${member}** a bien été unmute`); 
    }else {
        message.channel.send(`:x: Erreur - L'utilisateur **${member}** n'est pas mute !`);
    };
};

module.exports.help = {
    name: "unmute"
};