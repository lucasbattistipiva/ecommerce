document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.produtos button');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const nome = e.target.getAttribute('data-nome');
            const preco = parseFloat(e.target.getAttribute('data-preco'));
            const codProduto = e.target.getAttribute('data-codProduto');

            const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

            const itemIndex = carrinho.findIndex(item => item.codProduto === codProduto);

            if (itemIndex >= 0) {
                carrinho[itemIndex].quantidade += 1;
            } else {
                carrinho.push({ codProduto, nome, preco, quantidade: 1 });
            }

            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            alert(`${nome} adicionado ao carrinho!`);
        });
    });
});

// caso o usuário clique no botao de menu ativa, se clicar novamente desativara
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("header nav");

    navToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});

