const discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;

    message.channel.send({
        embed:{
            color:0xffffff,
            title:"Avatar",
            description:`Voici l'image de profil de ${membre.user}`,
            image: {
                url: membre.user.displayAvatarURL
            },
            footer:{
                text:`Demandé par ${message.author.tag}`
            }
        }
    })

};

module.exports.help = {
    name:"avatar"
}