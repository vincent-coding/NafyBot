const Discord = require('discord.js');
      moment = require('moment');

module.exports.run = async(client, message, args) => {
    
    let erreur = "";
    message.channel.send({
        embed:{
            color:0xffffff,
            thumbnail:{
                url:`${message.guild.iconURL}`
            },
            author: {
                name:`${message.guild.name}`,
                icon_url: `${message.guild.iconURL}`
              },
            fields:[
                {
                    name:":pushpin: Propriétaire",
                    value: `> ${message.guild.owner}`,
                    inline: true
                },
                {
                    name:"🆔 du serveur",
                    value:`> ${message.guild.id}`,
                    inline:true
                },
                {
                    name:"👥 Utilisateur",
                    value:`**${message.guild.memberCount}** Utilisateurs`,
                    inline:true
                },
                {
                    name:"🌍 Région",
                    value:`${message.guild.region}`,
                    inline:true
                },
                {
                    name:"🔒 Niveau vérification",
                    value:`Niveau : **${message.guild.verificationLevel}**`,
                    inline:true
                },
                {
                    name:"📆 Date de création",
                    value: moment.utc(message.guild.createdAt).format('LL'),
                    inline:true
                }
            ]
        }
    }).catch(console.error);
};

module.exports.help = {
    name:"serverstats"
};
