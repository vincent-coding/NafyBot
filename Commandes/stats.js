const Discord = require("discord.js"),
      moment = require('moment');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    
    message.channel.send({
        embed: {
            color: 0xffffff,
            title: `Statistiques du l'utilisateur **${membre.user.tag}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [
                {
                    name: '> ID :',
                    value: membre.id 
                },
                {
                    name: '> Crée le :',
                    value: moment.utc(membre.user.createdAt).format("LL")
                },
                {
                   name: '> Activité :',
                    value: membre.user.presence.game ? membre.user.presence.game.name : 'Aucun jeu'
                },
                {
                    name: '> Rejoin le :',
                    value: moment.utc(membre.joinedAt).format('LL')
                },
                {
                    name: '> Status',
                    value : message.author.presence.status == "online" ? "Disponible" : message.author.presence.status == "idle" ? "Inactif" : message.author.presence.status == "dnd" ? "Ne pas déranger" : "Invisible"
                },
                {
                    name: "> Role le plus haut",
                    value: `${membre.highestRole}`
                }
            ],
            footer: {
                text: `Informations de l'utilisateur ${membre.user.username}`
            }
        }
    });
};

module.exports.help = {
    name: "stats"
};