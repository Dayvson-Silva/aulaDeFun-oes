const produtos = [
  {
    ID: 1,
    produto: "Notebook",
    preco: 3500.0,
    quantidade: 5,
    categorias: "Eletrônicos",
    data: "2025-05-30",
  },
  {
    ID: 2,
    produto: "Mouse",
    preco: 89.9,
    quantidade: 15,
    categorias: "Periféricos",
    data: "2025-05-30",
  },
  {
    ID: 3,
    produto: "Teclado Mecânico",
    preco: 299.99,
    quantidade: 10,
    categorias: "Periféricos",
    data: "2025-05-30",
  },
  {
    ID: 4,
    produto: 'Monitor 24"',
    preco: 999.9,
    quantidade: 7,
    categorias: "Eletrônicos",
    data: "2025-05-30",
  },
  {
    ID: 5,
    produto: "Cadeira Gamer",
    preco: 1199.0,
    quantidade: 3,
    categorias: "Móveis",
    data: "2025-05-30",
  },
  {
    ID: 6,
    produto: "HD Externo 1TB",
    preco: 349.5,
    quantidade: 12,
    categorias: "Armazenamento",
    data: "2025-05-30",
  },
  {
    ID: 7,
    produto: "Pen Drive 64GB",
    preco: 59.9,
    quantidade: 25,
    categorias: "Armazenamento",
    data: "2025-05-30",
  },
  {
    ID: 8,
    produto: "Impressora",
    preco: 799.0,
    quantidade: 4,
    categorias: "Escritório",
    data: "2025-05-30",
  },
  {
    ID: 9,
    produto: "Scanner",
    preco: 499.9,
    quantidade: 6,
    categorias: "Escritório",
    data: "2025-05-30",
  },
  {
    ID: 10,
    produto: "Câmera Web HD",
    preco: 189.99,
    quantidade: 8,
    categorias: "Acessórios",
    data: "2025-05-30",
  },
  {
    ID: 11,
    produto: "Fonte 600W",
    preco: 250.0,
    quantidade: 9,
    categorias: "Componentes",
    data: "2025-05-30",
  },
  {
    ID: 12,
    produto: "Placa de Vídeo RTX 3060",
    preco: 2499.0,
    quantidade: 2,
    categorias: "Componentes",
    data: "2025-05-30",
  },
  {
    ID: 13,
    produto: "Processador Ryzen 5",
    preco: 1150.0,
    quantidade: 5,
    categorias: "Componentes",
    data: "2025-05-30",
  },
  {
    ID: 14,
    produto: "Memória RAM 16GB",
    preco: 399.9,
    quantidade: 10,
    categorias: "Componentes",
    data: "2025-05-30",
  },
  {
    ID: 15,
    produto: "SSD 1TB",
    preco: 599.99,
    quantidade: 7,
    categorias: "Armazenamento",
    data: "2025-05-30",
  },
  {
    ID: 16,
    produto: "Cooler CPU",
    preco: 139.9,
    quantidade: 6,
    categorias: "Componentes",
    data: "2025-05-30",
  },
  {
    ID: 17,
    produto: "Smartphone",
    preco: 2899.0,
    quantidade: 10,
    categorias: "Eletrônicos",
    data: "2025-05-30",
  },
  {
    ID: 18,
    produto: "Tablet",
    preco: 1899.0,
    quantidade: 4,
    categorias: "Eletrônicos",
    data: "2025-05-30",
  },
  {
    ID: 19,
    produto: "Switch de Rede",
    preco: 299.9,
    quantidade: 8,
    categorias: "Redes",
    data: "2025-05-30",
  },
  {
    ID: 20,
    produto: "Roteador Wi-Fi 6",
    preco: 399.99,
    quantidade: 6,
    categorias: "Redes",
    data: "2025-05-30",
  },
];

const cardSelecao = document.querySelector(".cardSelecao");
const form = document.querySelector("form");
const cardShow = document.getElementById("cardShow");
const selecao = document.getElementById("selecao");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = parseInt(document.getElementById("number").value);
  const escolha = produtos[input - 1];

  cardShow.innerHTML = `
    <div class="card">
        <p>ID:${escolha.ID}</p>
        <p>produto:${escolha.produto}</p>
        <p>preco:${escolha.preco} </p>
        <p>quantidade:${escolha.quantidade} </p>
        <p>categorias:${escolha.categorias} </p>
        <p>data:${escolha.data} </p>
        <hr>
        <p>Total de Vendas : ${somarTotal(escolha)}</p>
    </div>
        
    `;
  cardShow.style.display = "flex";

  somarTotal(escolha);
});

selecao.addEventListener("input", () => {
  const opt = selecao.value;
  const produtosFiltrados = produtos.filter(
    // pra cada produto ele vai verificar se a categoria do produto atual é igual a opt
    (produto) => produto.categorias === opt
  );


  //usado para quando adcionar outro produto ele  apague o antigo
  cardSelecao.innerHTML = "";
  
  for (const produto of produtosFiltrados) {
      cardSelecao.innerHTML  +=  `
      <div class="card">
      <p>ID:${produto.ID}</p>
      <p>produto:${produto.produto}</p>
      <p>preco:${produto.preco} </p>
      <p>quantidade:${produto.quantidade} </p>
      <p>categorias:${produto.categorias} </p>
      <p>data:${produto.data} </p>
      <hr>
      <p>Total de Vendas : ${somarTotal(produto)}</p>
      </div>
      `;
    }
    


});

function formatarValor(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}
function somarTotal(escolha) {
  const Total = escolha.preco * escolha.quantidade;
  return formatarValor(Total);
}

function filtraVendas(categoria) {
  const filtro = produtos.filter((produto) => produto.categorias === categoria);
  return filtro;
}
