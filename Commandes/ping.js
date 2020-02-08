const Discord = require('discord.js');

module.exports.run = async(client, message, args) =>{

    let debut = Date.now();
    await message.channel.send("Ping").then(async(m) => await m.edit(`Ping : ${Date.now() - debut} ms`));

};

module.exports.help = {
    name: "ping"
};