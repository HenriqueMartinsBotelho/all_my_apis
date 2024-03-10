import express, { Request, Response } from "express";
import { Pool } from "pg";
import { parse } from "pg-connection-string";
import dotenv from "dotenv";
import { solve } from "salesman.js";
import cors from "cors";
dotenv.config();

interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  coordenada_x: bigint;
  coordenada_y: bigint;
}

const connectionString = process.env.DB_CONNECTION_STRING;
const config = parse(connectionString);

const pool = new Pool({
  ...config,
  port: parseInt(config.port as string),
  ssl: typeof config.ssl === "string" ? true : config.ssl,
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/clientes", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM clientes;");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar clientes: ", error);
    res
      .status(500)
      .json({ message: "Erro interno do servidor ao buscar clientes" });
  }
});

app.post("/clientes", async (req: Request, res: Response) => {
  const { nome, email, telefone, coordenada_x, coordenada_y } = req.body;

  if (
    !nome ||
    !email ||
    !telefone ||
    coordenada_x === undefined ||
    coordenada_y === undefined
  ) {
    return res
      .status(400)
      .json({ message: "Por favor, forneça todos os campos necessários." });
  }

  try {
    const result = await pool.query(
      "INSERT INTO clientes (nome, email, telefone, coordenada_x, coordenada_y) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
      [nome, email, telefone, coordenada_x, coordenada_y]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao cadastrar cliente: ", error);
    res
      .status(500)
      .json({ message: "Erro interno do servidor ao cadastrar cliente" });
  }
});

app.get("/clientes/rota", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      "SELECT id, nome, coordenada_x, coordenada_y FROM clientes;"
    );
    const clientes = result.rows;

    const pontos = [
      { x: 0, y: 0 },
      ...clientes.map((cliente: Cliente) => ({
        x: parseInt(cliente.coordenada_x.toString()),
        y: parseInt(cliente.coordenada_y.toString()),
      })),
      { x: 0, y: 0 },
    ];

    const ordem = solve(pontos);

    const rota = ordem.map((index: number) =>
      clientes[index - 1] ? clientes[index - 1].nome : "Empresa"
    );

    res.status(200).json(rota);
  } catch (error) {
    console.error("Erro ao calcular a rota: ", error);
    res
      .status(500)
      .json({ message: "Erro interno do servidor ao calcular a rota" });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome!!!");
});

export default app;
