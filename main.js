const { app, BrowserWindow, ipcMain } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("pages/index.html");
};

ipcMain.handle("salvar-livro", async function(){

  var conexao = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "livros_db",
  });

conexao.execute("insert into feedbacks (nome, mensagem) values (?, ?)",)
});


app.whenReady().then(() => {
  createWindow();
});
