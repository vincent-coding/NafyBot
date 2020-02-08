const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    
    if(!args[0]){
        return message.channel.send({
            embed:{
                title:"NafyBot - Commandes",
                color:0xffffff,
                description:`Le prefix est **\`n?\`**\n\nPour voir la liste des commandes disponibles, veuillez ajouté un de ses arguments.\n\n▫Commandes de modération : **\`modération\`**\n▫Commandes fun : **\`fun\`**\n▫Commandes utile : **\`utile\`**\n▫Commandes NSFW : **\`nsfw\`**\n\n⬇ Exemple d'utilisation ⬇\n▫n?help modération`,
                footer:{
                    text:`© Tout droit résérvé à CRYP70 - Vcoding#4488  et SmolderDash202#8101`
                }
            }
        });
    }
    if(args[0]){
        if(args[0].toLowerCase() == "moderation" || args[0].toLowerCase() == "modération"){
            return message.channel.send({
                embed:{
                    title:"🛡 Commandes de modération 🛡",
                    color:0xffffff,
                    description:"▫ `clear` efface un nombre de message\n▫ `kick` kick un membre\n▫ `ban` ban un membre\n▫ `mute` mute un membre\n▫ `unmute` unmute un joueur mute\n▫ `sondage` crée un sondange\n▫ `nick` change le pseudonyme du bot\n▫ `setnick` change le pseudonyme d'un utilisateur\n▫ `lock` vérouille un channel\n▫ `unlock` dévérouille un channel\n▫ `fban` simule un bannissement\n▫ `fkick` simule une expulsion",
                    footer:{
                        text:"n?help pour accèder au reste des commandes."
                    }
                }
            });
        };
        if(args[0].toLowerCase() == "fun" || args[0].toLowerCase() == "funny"){
            return message.channel.send({
                embed:{
                    title:"🎡 Commandes fun 🎡",
                    color:0xffffff,
                    description:"▫ `cat` affiche une image aléatoire de chat\n▫ `dog` affiche une image aléatoire de chien\n▫ `fox` affiche une image aléatoire de renard\n▫ `pikachu` affiche une image aléatoire de pikachu\n▫ `panda` affiche une image aléatoire de panda\n▫ `koala` affiche une image aléatoire de koala\n▫ `bird` affiche une image aléatoire d'oiseau\n▫ `redpanda` affiche une image aléatoire de panda roux\n▫ `8ball` permet de poser une question au bot\n▫ `roll` lance un dé et donne le résultat",
                    footer:{
                        text:"n?help pour accèder au reste des commandes."
                    }
                }
            });
        };
        if(args[0].toLowerCase() == "utile" || args[0].toLowerCase() == "utility"){
            return message.channel.send({
                embed:{
                    title:"📡 Commandes utiles 📡",
                    color:0xffffff,
                    description:"▫ `help` affiche l'aide\n▫ `ping` affiche la latence du bot\n▫ `stats` affiche les statistiques d'un utilisateur\n▫ `serverstats` affiche les statistiques du serveur\n▫ `binary` permet d'encoder ou de décoder du binaire\n▫ `avatar` permet d'afficher l'images de profil d'un utilisateur\n▫ `password` génère un mot de passe\n▫ `version` donne la version actuel du bot\n▫ `invite` donne le lien d'invitation du bot\n▫ `changelogs` donne les nouveauté sdu bot",
                    footer:{
                        text:"n?help pour accèder au reste des commandes."
                    }
                }
            });
        };
        if(args[0].toLowerCase() == "nsfw"){
            return message.channel.send({
                embed:{
                    title:"🍆 Commandes NSFW 🍆",
                    color:0xffffff,
                    description:"▫ `manga` affiche une image aléatoire de hentai\n▫ `hug` permet de faire un calin à un utilisateur\n▫ `toutou` permet de dire à un utilisateur que c'est un bon toutou\n▫ `wink` permet de faire un clin d'œil",
                    footer:{
                        text:"n?help pour accèder au reste des commandes."
                    }
                }
            });
        };
        message.channel.send({
            embed:{
                title:"NafyBot - Commandes",
                color:0xffffff,
                description:`Le prefix est **\`n?\`**\n\nPour voir la liste des commandes disponibles, veuillez ajouté un de ses arguments.\n\n▫Commandes de modération : **\`modération\`**\n▫Commandes fun : **\`fun\`**\n▫Commandes utile : **\`utile\`**\n\n⬇ Exemple d'utilisation ⬇\n▫n?help modération`,
                footer:{
                    text:`© Tout droit résérvé à CRYP70 - Vcoding#4488  et SmolderDash202#8101`
                }
            }
        });
    };
};

module.exports.help = {
    name:"help"
};