const chzzk = require("../src/plugins/chzzk.js");

async function test(id) {
	const res = await chzzk.live(id);
	console.log(res);
}