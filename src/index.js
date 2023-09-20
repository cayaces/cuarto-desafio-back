import express from "express";
import { engine } from "express-handlebars";

const app = express();
const PORT = 8080;


app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set()

app.get("/", (res, req) => {
    res.send("hola");
})






app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);

});