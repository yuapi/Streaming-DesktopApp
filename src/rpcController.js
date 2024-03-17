const chzzk = require("./plugins/chzzk.js");
const { initRPC, setRPC } = require("./plugins/discord.js");

function init(view) {
	initRPC();
	view.webContents.on("did-navigate-in-page", (event, url, isMainFrame) => {
		if (url.startsWith("https://chzzk.naver.com/live/")) setChzzkLive(url.split("/")[4]);
		else if (url.startsWith("https://chzzk.naver.com/video/")) setChzzkVideo(url.split("/")[4]);
		else if (url === "https://chzzk.naver.com" || url === "https://chzzk.naver.com/") setChzzkMain();
		else if (url.startsWith("https://chzzk.naver.com/")) setChzzkChannel(url.split("/")[3]);
	})
}

function setChzzkMain() {
	const setting = {
		details: "치지직",
		state: "탐색중",
		largeImageKey: "chzzk_logo",
		largeImageText: "치지직",
	}
	setRPC(setting);
}

async function setChzzkChannel(id) {
	const content = await chzzk.channel(id);

	const setting = {
		details: content.channelName,
		state: "탐색중",
		largeImageKey: "chzzk_logo",
		largeImageText: "치지직",
	}
	setRPC(setting);
}

async function setChzzkLive(id) {
	const content = await chzzk.live(id);

	const setting = {
		details: content.liveTitle,
		state: content.channel.channelName,
		startTimestamp: getTimeStamp(content.openDate),
		largeImageKey: "chzzk_logo",
		largeImageText: "치지직",
		buttons: [{ label: "치지직에서 시청하기", url: `https://chzzk.naver.com/live/${id}` }]
	}
	setRPC(setting);
}

async function setChzzkVideo(id) {
	const content = await chzzk.video(id);

	const setting = {
		details: `[다시보기] ${content.videoTitle}`,
		state: content.channel.channelName,
		largeImageKey: "chzzk_logo",
		largeImageText: "치지직",
		buttons: [{ label: "치지직에서 시청하기", url: `https://chzzk.naver.com/video/${id}` }]
	}
	setRPC(setting);
}

function getTimeStamp(date) {
    let year  = date.substr(0,4);
    let month = date.substr(5,2) - 1; // 1월=0,12월=11
    let day   = date.substr(8,2);
    let hour  = date.substr(11,2);
    let min   = date.substr(14,2);
    let sec = date.substr(17,2);
   
    return new Date(year, month, day, hour, min, sec).getTime();
}

module.exports = { init };