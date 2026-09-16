"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cursos = [
    { id: 1, titulo: "TypeScript", preco: 100 },
    { id: 2, titulo: "JavaScript", preco: 50 },
    { id: 3, titulo: "Node.js", preco: 200 },
    { id: 4, titulo: "HTML 5 & CSS", preco: 40,
        descricao: "Curso de HTML 5 e CSS", sigla: "HTML5CSS" },
    { id: 5, titulo: "Java", preco: 180 },
];
// console.log(cursos[1]);
// console.log(cursos[1]?.titulo);
// console.log(cursos[1]?.preco);
// console.log(cursos[5]?.titulo);
for (const item of cursos) {
    console.log("ID: ", item.id, "Titulo: ", item.titulo, "Preço: ", item.preco);
    console.log('ID: ${item.id}, Titulo: ${item.titulo}, Preço: ${item.preco}');
}
cursos.forEach(item, i);
console.log(i, item.titulo);
//# sourceMappingURL=listaCursos.js.map