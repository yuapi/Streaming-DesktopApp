const axios = require("axios");
const headers = {
	"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Whale/3.25.232.19 Safari/537.36"
}

async function channel(id) {
	const url = `https://api.chzzk.naver.com/service/v1/channels/${id}`;

	try {
		const { data } = await axios.get(url, { headers });

		return data.content;
	} catch (error) {
		console.error("Error: ", error);
		return null;
	}
}

async function live(id) {
	const url = `https://api.chzzk.naver.com/service/v2/channels/${id}/live-detail`;

	try {
		const { data } = await axios.get(url, { headers });

		if (data.content.status === "CLOSE") return null;
		else return data.content;
	} catch (error) {
		console.error("Error: ", error);
		return null;
	}
}

async function video(id) {
	const url = `https://api.chzzk.naver.com/service/v2/videos/${id}`;

	try {
		const { data } = await axios.get(url, { headers });

		return data.content;
	} catch (error) {
		console.error("Error: ", error);
		return null;
	}
}

module.exports = { channel, live, video };