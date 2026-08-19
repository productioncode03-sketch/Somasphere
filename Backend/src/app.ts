/**
 * Somasphere Learning Field Notes — backend application shell.
 * Keep middleware order explicit: security, parsing, routes, then error handling.
 */
import cors from "cors";
import express, { type ErrorRequestHandler } from "express";
import helmet from "helmet";
import { requireAuth } from "./middleware/auth.middleware.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_request, response) => {
  response.json({ status: "ok", service: "somasphere-backend" });
});

app.get("/api/me", requireAuth, (request, response) => {
  response.json({ user: request.user });
});

const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({ error: "INTERNAL_SERVER_ERROR", message: "Something went wrong." });
};

app.use(errorHandler);

export default app;
