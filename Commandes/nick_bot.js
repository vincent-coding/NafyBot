module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES")) return message.channel.send(':x: Erreur - Permissions manquante : **MANAGE_NICKNAMES**');
    if(!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return message.channel.send(':x: Erreur - Permissions manquante du bot : **MANAGE_NICKNAME**');

    if(!args[0]) return message.channel.send(':x: Erreur - Veuillez préciser un nouveaux pseudonyme pour le bot !');
    message.guild.member(client.user).setNickname(args[0]);
    return message.channel.send(`:white_check_mark: Le surnom du bot à bien été changé en **${args[0]}** !`);
};

module.exports.help = {
    name:"nick"
}