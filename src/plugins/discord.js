const { Client } = require("@xhayper/discord-rpc");
const { clientId } = require("../../config.json").discord;

const client = new Client({
    clientId: clientId
});


function initRPC() {
	client.login();
}

function setRPC(setting) {
	client.user?.setActivity(setting);
}

module.exports = { initRPC, setRPC };