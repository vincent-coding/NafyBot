module.exports = async(client) => {

    client.user.setPresence({
        game: {
            name: "nb?help liste des commandes"
        }
    });
};