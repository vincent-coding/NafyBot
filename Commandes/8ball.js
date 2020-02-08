const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.channel.send(':x: Erreur - Veuillez entrer une question !');
    let reponse =["Oui", "Non", "Peut-être", "Je ne sais pas", "Probablement", "Probablement pas"],
        reptaille = Math.floor((Math.random()* reponse.length)),
        question = args.join(" ").slice();

        message.channel.send({
            embed:{
                title:"8Ball :interrobang:",
                color: 0xffffff,
                fields:[
                    {
                        name: "> Question",
                        value: `> ${question}`
                    },
                    {
                        name: "> Réponse",
                        value: `> ${reponse[reptaille]}`
                    }
                ]
            }
        });
};

module.exports.help = {
    name:"8ball"
};