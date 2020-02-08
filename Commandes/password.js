const discord    = require('discord.js'),
      superagent = require('superagent');

module.exports.run = async(client, message, args) => {


    let msg = await message.channel.send("Génération...");

    let {body} = await superagent.get(`https://www.passwordrandom.com/query?command=password&format=json&count=1`);
    if(!{body}) return message.channel.send(":x: Erreur - Une erreur inconnue est survenue.");

    message.author.send({
        embed:{
            color:0xffffff,
            title:'Mot de passe',
            description:`:white_check_mark: Le mot de passe a bien été généré.\n\nLe voici : ||${body.char}||`
        }
    });
    message.channel.send(':white_check_mark: Le mot de passe vous a bien été envoyé par message privée.');
    
    msg.delete();
};

module.exports.help = {
    name:"password"
}