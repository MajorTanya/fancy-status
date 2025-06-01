import { status } from '../util/util.js';

/**
 * Response for permanent redirects. Clients MAY change method from POST to GET.
 *
 * Code: 301
 * Status text: Moved Permanently
 */
export const movedPermanently = (body?: BodyInit, options?: ResponseInit) =>
  status(301, 'Moved Permanently', body, options);

/**
 * Response for temporary redirects. Clients MAY change method from POST to GET.
 *
 * Code: 302
 * Status text: Found
 */
export const found = (body?: BodyInit, options?: ResponseInit) =>
  status(302, 'Found', body, options);

/**
 * Response for temporary redirects. Clients MUST NOT change methods.
 *
 * Code: 307
 * Status text: Temporary Redirect
 */
export const temporaryRedirect = (body?: BodyInit, options?: ResponseInit) =>
  status(307, 'Temporary Redirect', body, options);

/**
 * Response for permanent redirects. Clients MUST NOT change methods.
 *
 * Code: 308
 * Status text: Permanent Redirect
 */
export const permanentRedirect = (body?: BodyInit, options?: ResponseInit) =>
  status(308, 'Permanent Redirect', body, options);
