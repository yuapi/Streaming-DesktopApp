const { app, BrowserWindow } = require("electron");
const path = require("path");

const rpcController = require("./src/rpcController.js");

const createWindow =() => {
	const win = new BrowserWindow({
		width: 1280,
		height: 720,
		minWidth: 1280,
		minHeight: 720,
		icon: path.join(__dirname, "assets/icon/chzzk_ico.png")
	})

	win.setMenu(null);
	win.loadURL("https://chzzk.naver.com");

	rpcController.init(win);
} 

app.whenReady().then(() => {
	createWindow();
})