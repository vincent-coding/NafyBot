const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Erreur - Permission manquante : **MANAGE_MESSAGES**").catch(console.error);

    if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: Erreur - Permission du bot manquante : **MANAGE_MESSAGES**").catch(console.error);

    if(!args[0]) return message.channel.send(":x: Erreur - Vous devez spécifier un nombre de message à supprimer.");

    if(isNaN(args[0])) return message.channel.send(":x: Erreur - Veuillez spécifier un nombre !");

    if(args >= 101 || args <= 0) return message.channel.send(":x: Erreur - Veuillez entré un nombre en 1 et 100 !");

    message.channel.bulkDelete(args[0]).catch(console.error);

    message.channel.send(`:white_check_mark: ${args[0]} message ont été supprimés !`).catch(console.error);
    
};

module.exports.help = {
    name: "clear"
};