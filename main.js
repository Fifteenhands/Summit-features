const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    // 创建主窗口
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // 加载主页面
    mainWindow.loadFile(path.join(__dirname, 'index.html'));


    // 在主窗口关闭时关闭应用程序
    mainWindow.on('closed', () => {
        app.quit();
    });
}

// Electron 应用程序准备就绪后创建窗口
app.whenReady().then(createWindow);

// 在 macOS 上，关闭所有窗口时退出应用程序
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// 在应用程序激活时重新创建窗口（macOS）
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
