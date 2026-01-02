 function sair() {
        event.preventDefault();
        window.location.href = '../../paginas/index.html'
        localStorage.removeItem('usuarioLogado');


    }