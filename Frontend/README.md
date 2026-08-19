# Frontend workspace note

The deployable Somasphere browser application is currently maintained in the managed `client/` directory because the hosting scaffold expects that path. It contains the React/Vite/Tailwind implementation, page routes, shared components, hooks, and Supabase browser client.

This directory is reserved for future workspace-level frontend packages if the project later moves to a full pnpm workspace. Keeping the deployable application in `client/` avoids breaking the managed preview and hosting pipeline.
