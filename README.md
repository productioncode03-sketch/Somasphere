# Somasphere

Somasphere is a free, calm study platform for Kenyan CBE learners. The MVP helps students practise with quizzes, strengthen recall with flashcards, and find past papers and learning materials in one focused space.

## MVP scope

The current experience includes a public landing page, Manus OAuth sign-in entry points, protected dashboard routes, progress summaries, interactive multiple-choice quizzes with instant feedback and results, flip-style flashcards with progress tracking, and a filtered library with view and download links. Leaderboards, portfolios, advanced gamification, dark mode, and AI features are intentionally outside the MVP.

## Technology

The managed web project uses React, TypeScript, Vite, Tailwind CSS, Express, tRPC, Drizzle, and the project database layer. Authentication is intentionally handled by **Manus OAuth**, as required for this project. The database schema includes quizzes, questions, answer options, flashcard decks, flashcards, and library materials. Static resource records keep a `fileUrl`; file bytes should be stored through the project's storage layer rather than committed to the repository.

## Repository layout

| Path | Purpose |
| --- | --- |
| `client/` | React pages, routes, layouts, UI components, and styles. |
| `server/` | Express/tRPC server, authentication context, database helpers, and procedures. |
| `drizzle/` | Database schema, migrations, and generated metadata. |
| `shared/` | Shared types and constants. |
| `Backend/` | Reserved workspace for the separately documented backend foundation. |
| `Frontend/` | Reserved workspace documentation for the requested frontend/backend separation. |
| `todo.md` | Implementation checklist and project history. |

## Local development

From the repository root, install dependencies and start the managed development server:

```bash
pnpm install
pnpm dev
```

The development server uses the managed project environment and should not require manually hardcoding a port. The frontend is served through the Express/Vite bridge. Manus OAuth configuration and built-in project environment variables are injected by the managed project; do not commit `.env` files or copy server-only secrets into frontend code.

## Quality checks

Run the following before handing over changes:

```bash
pnpm check
pnpm test
pnpm build
```

The test suite covers the OAuth logout cookie behavior and the MVP learning behavior, including quiz scoring, flashcard progress, library filtering, and the required schema tables.

## Database workflow

Update `drizzle/schema.ts` first, generate a migration with the project's Drizzle command, review the generated SQL, and apply schema changes through the managed database workflow. Do not insert demonstration customer reviews or testimonials. Library resources should reference real `fileUrl` values when content is added.

## GitHub

The public repository is available at [productioncode03-sketch/Somasphere](https://github.com/productioncode03-sketch/Somasphere). The completed MVP was committed and pushed to the `main` branch.

## Design direction

Somasphere uses a warm paper background, deep evergreen foundation, soft coral encouragement, rounded but disciplined surfaces, and calm study-coach language. The layout is mobile-first: public pages use a top navigation bar, while dashboard pages use a desktop sidebar and a mobile navigation treatment.
