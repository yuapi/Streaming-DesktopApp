const { app, BrowserWindow, BrowserView } = require("electron");
const path = require("path");

const rpcController = require("./src/rpcController.js");

const createWindow = () => {
	const win = new BrowserWindow({
		width: 1280,
		height: 720,
		minWidth: 1280,
		minHeight: 720,
		backgroundColor: "#141517",
		titleBarOverlay: {
			color: '#00000000',
			symbolColor: '#ffffff',
			height: 32,
		},
		icon: path.join(__dirname, "src/icons/chzzk_ico.png")
	})
	win.setMenu(null);
	win.webContents.openDevTools();
	win.webContents.loadURL("https://chzzk.naver.com")

	// const navView = new BrowserView();
	// win.setBrowserView(navView);
	// navView.setBounds({ x: 0, y: 0, width: win.getContentBounds().width, height: 32})
	// navView.setAutoResize({ width: true, height: false })
	// navView.webContents.loadFile(path.join(__dirname, "src/templates/nav.html"));

	// const mainView = new BrowserView();
	// win.setBrowserView(mainView);
	// mainView.setBounds({ x: 0, y: 32, width: win.getContentBounds().width, height: win.getContentBounds().height})
	// mainView.setAutoResize({ width: true, height: true })
	// mainView.webContents.loadURL("https://chzzk.naver.com")
	// mainView.webContents.insertCSS("::-webkit-scrollbar { display: none; }");

	rpcController.init(win);
} 

app.whenReady().then(() => {
	createWindow();
})