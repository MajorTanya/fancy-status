import { status } from '../util/util.js';

/**
 * Standard response code for successful HTTP requests.
 *
 * Code: 200
 * Status text: OK
 */
export const ok = (body?: BodyInit, options?: ResponseInit) =>
  status(200, 'OK', body, options);

/**
 * Response code for successful resource creation
 *
 * Code: 201
 * Status text: Created
 */
export const created = (body?: BodyInit, options?: ResponseInit) =>
  status(201, 'Created', body, options);

/**
 * Response code for successful responses with no content to return
 *
 * Code: 204
 * Status text: No Content
 */
export const noContent = (options?: ResponseInit) =>
  status(204, 'No Content', undefined, options);
