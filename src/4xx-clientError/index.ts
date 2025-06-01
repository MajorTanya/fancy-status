import { status } from '../util/util.js';

/**
 * Response for generic client errors
 *
 * Code: 400
 * Status text: Bad Request
 */
export const badRequest = (body?: BodyInit, options?: ResponseInit) =>
  status(400, 'Bad Request', body, options);

/**
 * Response for missing or insufficient authorization
 *
 * Code: 401
 * Status text: Unauthorized
 */
export const unauthorized = (body?: BodyInit, options?: ResponseInit) =>
  status(401, 'Unauthorized', body, options);

/**
 * Response for insufficient authorization or for refusing a client request
 *
 * Code: 403
 * Status text: Forbidden
 */
export const forbidden = (body?: BodyInit, options?: ResponseInit) =>
  status(403, 'Forbidden', body, options);

/**
 * Response for missing/not found resources
 *
 * Code: 404
 * Status text: Not Found
 */
export const notFound = (body?: BodyInit, options?: ResponseInit) =>
  status(404, 'Not Found', body, options);

/**
 * Response for permanently removed resources
 *
 * Code: 410
 * Status text: Gone
 */
export const gone = (body?: BodyInit, options?: ResponseInit) =>
  status(410, 'Gone', body, options);

/**
 * I'm a teapot
 *
 * Code: 418
 * Status text: I'm a teapot
 */
export const imATeapot = (body?: BodyInit, options?: ResponseInit) =>
  status(418, "I'm a teapot", body, options);
