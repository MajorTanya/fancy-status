export const status = (status: number, statusText: string, body?: BodyInit, options?: ResponseInit) =>
  new Response(body ?? null, { ...options, status, statusText })
