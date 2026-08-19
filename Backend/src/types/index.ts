/**
 * Somasphere Learning Field Notes — shared backend vocabulary.
 * Keep transport-level types small and move domain types into feature modules as they grow.
 */
export interface AuthenticatedRequestUser {
  id: string;
  email?: string;
}

export interface ApiErrorResponse {
  error: string;
  message: string;
  requestId?: string;
}
