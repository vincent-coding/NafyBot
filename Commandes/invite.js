module.exports.run = async(client, message, args) => {
    message.channel.send({
        embed: {
          title:":tools: Lien d'invitation du bot :tools: ",
          description:"▫ [Lien par ici](https://discordapp.com/oauth2/authorize?client_id=598175569879760921&scope=bot&permissions=8)",
          color: 0xffffff
        }
      })
};

module.exports.help = {
    name:"invite"
};