# Somasphere

Somasphere is an educational web app for Kenyan CBE learners. Its first starter experience pairs a calm, editorial React interface with an Express API foundation and Supabase authentication/database/storage integration points.

## Repository layout

The repository keeps the requested `Backend/` and `Frontend/` concepts while preserving the managed frontend scaffold's `client/` path for local preview and hosting compatibility. The browser application currently lives in `client/`; `Frontend/` is reserved for future workspace-level frontend tooling and documentation. The API foundation lives in `Backend/`.

| Area | Purpose |
| --- | --- |
| `client/` | React 19, TypeScript, Vite, Tailwind 4, Wouter routes, and the starter pages. |
| `Backend/` | Express, TypeScript, Supabase admin client, bearer-token middleware, and `/health` plus `/api/me` endpoints. |
| `ideas.md` | The selected Learning Field Notes design direction and brand rules. |
| `todo.md` | Current implementation checklist. |

## Frontend pages

The starter frontend includes a branded landing page at `/`, authentication forms at `/login` and `/signup`, and a dashboard at `/dashboard`. Authentication calls use the Supabase browser client and are safe to configure with the public anon key.

## Backend setup

From `Backend/`, install dependencies and create local environment variables based on `env.template`. The server expects `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `PORT`, and `FRONTEND_URL`. The service-role key must remain server-only and must never be copied into frontend variables.

```bash
cd Backend
pnpm install
cp env.template .env
pnpm dev
```

The API starts on port `4000` by default. `GET /health` is public. `GET /api/me` requires a Supabase access token in the `Authorization: Bearer <token>` header.

## Frontend setup

From the repository root, install dependencies and start the managed preview:

```bash
pnpm install
pnpm dev
```

The browser client recognizes `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. Until those values are supplied through project secrets or a local environment file, auth actions will return the expected Supabase configuration error rather than exposing a secret.

## Next implementation slice

The next recommended step is to create the Supabase schema for profiles, subjects, quizzes, flashcards, and library resources, then replace the dashboard's starter cards with authenticated data. Keep row-level security enabled and use the backend service role only for trusted server-side operations.
