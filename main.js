const { app, BrowserWindow, ipcMain } = require("electron");
const mysql = require("mysql2/promise");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: __dirname + "/preload.js",
    },
  });

  win.loadFile("pages/index.html");
};

ipcMain.handle("listar-livros", async function () {
  const conexao = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "livros_db",
  });
  const query = await conexao.execute("select * from livros");
  await conexao.end();

  return query[0];
});

ipcMain.handle("salvar-livro", async (event, titulo, autor) => {
  const conexao = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "livros_db",
  });

  await conexao.execute("INSERT INTO livros (titulo, autor) VALUES (?, ?)", [titulo, autor]);
  await conexao.end();
});

app.whenReady().then(() => {
  createWindow();
});
