const Discord = require('discord.js'),
      client = new Discord.Client(),
      fs = require('fs');

client.login("MonToken");

client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune Commandes trouvée !");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`)

        client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events on été chargé.`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
    });
});
