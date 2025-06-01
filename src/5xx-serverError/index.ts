import { status } from '../util/util.js';

/**
 * Response for generic internal server errors
 *
 * Code: 500
 * Status text: Internal Server Error
 */
export const internalServerError = (body?: BodyInit, options?: ResponseInit) =>
  status(500, 'Internal Server Error', body, options);
