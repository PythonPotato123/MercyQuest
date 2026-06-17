const { app, BrowserWindow } = require("electron");
const path = require("path");

// auto updater
const { autoUpdater } = require("electron-updater");
const log = require("electron-log");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
    },
  });

  // YOUR BASE44 LINK (change here if needed)
  mainWindow.loadURL("https://reds-mercy-mission-copy-90f52fbb.base44.app");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// logging (helps debugging updates)
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = "info";

app.whenReady().then(() => {
  createWindow();

  // check for updates when app starts
  autoUpdater.checkForUpdatesAndNotify();
});

// auto update events
autoUpdater.on("update-available", () => {
  log.info("Update available");
});

autoUpdater.on("update-downloaded", () => {
  log.info("Update downloaded, quitting to install...");
  autoUpdater.quitAndInstall();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});