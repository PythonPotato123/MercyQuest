const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    autoHideMenuBar: true,
    show: true
  });

  win.loadURL("https://reds-mercy-mission-copy-90f52fbb.base44.app");

  win.webContents.on("did-fail-load", () => {
    console.log("FAILED TO LOAD PAGE");
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});