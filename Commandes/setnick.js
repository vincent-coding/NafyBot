module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES")) return message.channel.send(':x: Erreur - Permissions manquante : **MANAGE_NICKNAMES**');
    if(!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return message.channel.send(':x: Erreur - Permissions manquante du bot : **MANAGE_NICKNAME**');

    if(!message.mentions.members.first()) return message.channel.send(':x: Erreur - Vous devez mentionnez un utilisateur !');
    if(!args[1]) return message.channel.send(':x: Erreur - Veuillez préciser un nouveaux pseudonyme pour l\'utilisateur !');
    message.mentions.members.first().setNickname(args[1]);
    return message.channel.send(`:white_check_mark: Le surnom de ${message.mentions.members.first()}à bien été changé en **${args[1]}** !`);
};

module.exports.help = {
    name:"setnick"
}