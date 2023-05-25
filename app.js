const express = require("express");
const { param } = require("express/lib/application");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();

app.use(express.json());

const lista = ["eduuu", "tereza", "julião", "alessandro", "olegas"];


app.get("/", (req, res) => {
  console.log("acessou a rota listar");
  res.send("hello world!");

});

app.get("/contato/:id", (req, res) => {
  const { id } = req.params;
 
  return res.json(lista[id]);
});

app.post("/contato",(req, res) => {
  console.log("acessou a rota cadastrar")
  var {nome} = req.body;
  
lista.push(nome);

  return res.json(
    lista
  );
});

app.get("/contato",(req, res) => {

  return res.json(lista);

});

app.put("/contato/:id", (req, res) => {
  const { id } = req.params;
  const { nome} = req.body;

lista[id] = nome;

  return res.json(lista);

});

app.delete("/contato/:id", (req,res)=>{

const {id} = req.params;

lista.splice(id, 1);

return res.json({
message: "item excluído"
});

})
app.listen(8080, () => {
  console.log("servidor iniciado na porta 8080");
});

//tha's it