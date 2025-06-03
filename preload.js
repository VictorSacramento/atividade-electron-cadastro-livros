const { contextBridge, ipcRenderer } = require('electron');

function salvarLivro(titulo, autor) {
    return ipcRenderer.invoke('salvar-livro', titulo, autor);
}

function listarLivros() {
    return ipcRenderer.invoke('listar-livros');
}

contextBridge.exposeInMainWorld('api', {
    salvarFeedback
});
