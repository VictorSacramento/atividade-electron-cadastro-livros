const { contextBridge, ipcRenderer } = require('electron');

function salvarLivro( titulo, autor ) {
    console.log('Salvando livro:', titulo, autor);
    return ipcRenderer.invoke('salvar-livro', titulo, autor);
}

function listarLivros() {
    console.log('Listando livros');
    
    return ipcRenderer.invoke('listar-livros');
}

contextBridge.exposeInMainWorld('api', {
    salvarLivro,
    listarLivros,
});
