var version = "0.7.5";
module.exports.run = async(client, message, args) => {

    message.channel.send(`:robot: Version actuel du bot : **${version}**`)
};

module.exports.help = {
    name:"version"
}