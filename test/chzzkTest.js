const chzzk = require("../src/plugins/chzzk.js");

async function test(id) {
	const res = await chzzk.live(id);
	console.log(res);
}

test("45e71a76e949e16a34764deb962f9d9f")
test("51d2b920e94da2731db5803d01b3c821")
