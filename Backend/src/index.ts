/**
 * Somasphere Learning Field Notes — server entry point.
 * Keep process startup separate from Express app construction for testability.
 */
import "dotenv/config";
import app from "./app.js";

const port = Number(process.env.PORT ?? 4000);

app.listen(port, () => {
  console.log(`Somasphere backend listening on http://localhost:${port}`);
});
