const { app, BrowserWindow } = require("electron");

const rpcController = require("./src/rpcController.js");

const createWindow =() => {
	const win = new BrowserWindow({
		width: 1280,
		height: 720
	})

	win.loadURL("https://chzzk.naver.com");

	rpcController.init(win);
} 

app.whenReady().then(() => {
	createWindow();
})