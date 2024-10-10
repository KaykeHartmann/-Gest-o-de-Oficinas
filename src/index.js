import e from "express";
import "dotenv/config";
import "./db.js";
import maintenance_router from "./routes/cliente_route.js";
import veiculo_router from "./routes/veiculo_route.js";
import workshop_router from "./routes/workshop_route.js";

const app = e();

app.use(e.json());

app.use("/maintenance", maintenance_router);
app.use("/veiculo", veiculo_router);
app.use("/workshop", workshop_router);

app.listen(process.env.API_PORT, () => console.log("Servidor rodando"));
