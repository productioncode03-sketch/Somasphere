/**
 * Somasphere Learning Field Notes — auth middleware reminder.
 * Authentication errors should be concise, actionable, and never reveal token details.
 */
import type { NextFunction, Request, Response } from "express";
import { supabaseAdmin } from "../config/supabase.js";
import type { AuthenticatedRequestUser } from "../types/index.js";

declare global {
  namespace Express {
    interface Request {
      user?: AuthenticatedRequestUser;
    }
  }
}

export async function requireAuth(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const authorization = request.header("authorization");
  const token = authorization?.startsWith("Bearer ")
    ? authorization.slice("Bearer ".length)
    : undefined;

  if (!token) {
    response.status(401).json({ error: "UNAUTHORIZED", message: "A bearer token is required." });
    return;
  }

  const { data, error } = await supabaseAdmin.auth.getUser(token);

  if (error || !data.user) {
    response.status(401).json({ error: "UNAUTHORIZED", message: "The session is invalid or expired." });
    return;
  }

  request.user = { id: data.user.id, email: data.user.email };
  next();
}
