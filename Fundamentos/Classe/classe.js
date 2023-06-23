//Na versão anerior do JavaScript, não tinha classe, era tudo realizado com função conforme abaixo

//  const Livro = function(nome, editora, paginas){
//     gNome = nome;
//     gEditora = editora;
//     gPaginas = paginas;

//     this.getNome = function(){
//         return gNome;
//     }
//     this.getEditora = function(){
//         return gEditora;
//     }
//     this.getPaginas = function(){
//         return gPaginas;
//     }
//  }

// const GraphQL = new Livro("GraphQL", "Casa do Código", 143);

// console.log(GraphQL.getNome());
// console.log(GraphQL.getEditora());
// console.log(GraphQL.getPaginas());

// const nome = "Alura"

//============================================================

//Já nas JavaScript 6, você pode criar classes conforme abaixo.
class LivroClasse {
    constructor(nome, editora, paginas){
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas;
    }
    anunciarLivro(){
        console.log(`Título: ${this.nome}`)
    }
    descreverTítulos(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas}`)
    }

};

const nodeJs = new LivroClasse("Primeiro passos com NodeJS",
"Casa do código", 195);

nodeJs.anunciarLivro()
nodeJs.descreverTítulos()
console.log(typeof LivroClasse)
