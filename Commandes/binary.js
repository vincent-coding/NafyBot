const Discord    = require('discord.js'),
      superagent = require('superagent');

module.exports.run = async(client, message, args) => {

    if(!args[0]) {
        return message.channel.send({
            embed:{
                color:0xffffff,
                title:"Choisissez un arguments.",
                description:"Veuillez entrez la commande avec un arguments.\n\n▫ encode -> Permet d'encoder en code binaire\n▫ decode -> Permet de decoder du code binaire\n\n⬇ Exemple d'utilisation ⬇\nn?binary encode montext\nn?binary decode moncodebinaire"
            }
        });
    }
    if(args[0]) {
        if(args[0].toLowerCase() == "encode") {
            if(!args[1]) return message.channel.send(':x: Erreur - Veuillez présicer un mot ou une phrases à encodé !');

            let msg = await message.channel.send("Lancement de l'encodage...");

            let {body} = await superagent.get(`https://some-random-api.ml/binary?text=${args[1]}`);
            if(!{body}) return message.channel.send(":x: Erreur - Une erreur inconnue est survenue.");

            message.channel.send({
                embed:{
                    color:0xffffff,
                    title:`Voici le message encodé de ${message.author.username}`,
                    description:`💬 Message original 💬\n\`\`\`${args[1]}\`\`\`\n🔏 Message encodé 🔏\n\`\`\`${body.binary}\`\`\``
                }
            });

            msg.delete();
            return;
        }
        if(args[0].toLowerCase() == "decode"){
            if(!args[1]) return message.channel.send(':x: Erreur - Veuillez présicer un mot ou une phrases à encodé !');
            if(isNaN(args[1])) return message.channel.send(':x: Erreur - Un code binaire n\'ai composé que de 0 et de 1 !');

            let msg = await message.channel.send("Lancement du décodage...");
            
            let {body} = await superagent.get(`https://some-random-api.ml/binary?decode=${args[1]}`);
            if(!{body}) return message.channel.send(":x: Erreur - Une erreur inconnue est survenue.");

            message.channel.send({
                embed:{
                    color:0xffffff,
                    title:`Voici le message décodé de ${message.author.username}`,
                    description:`🔏 Message encodé 🔏\n\`\`\`${args[1]}\`\`\`\n🔓Message décodé🔓\n\`\`\`${body.text}\`\`\``,
                    footer:{
                        text:"Si vos texte renvoie que des chiffre celas signifie que vous avez fait une erreur !"
                    }
                }
            });

            msg.delete();
            return;
        }
        return message.channel.send({
            embed:{
                color:0xffffff,
                title:"Choisissez un arguments.",
                description:"Veuillez entrez la commande avec un arguments.\n\n▫ encode -> Permet d'encoder en code binaire\n▫ decode -> Permet de decoder du code binaire\n\n⬇ Exemple d'utilisation ⬇\nn?binary encode montext\nn?binary decode moncodebinaire"
            }
        });
    }

};

module.exports.help={
    name:"binary"
};