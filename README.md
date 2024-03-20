# [`fancy-status`](https://www.npmjs.com/package/@major-tanya/fancy-status)

A convenient wrapper library to return certain status code responses. Zero dependencies, zero complexity.

If you ever wanted to just type `noContent` or `internalServerError` instead of looking up the status codes for them,
then figuring out what your framework uses for replies, this is the library for you.

## Available codes

- 2xx status codes
    - 200 OK (`ok`)
    - 201 Created (`created`)
    - 204 No Content (`noContent`)
- 3xx status codes
    - 301 Moved Permanently (`movedPermanently`)
    - 302 Found (`found`)
    - 307 Temporary Redirect (`temporaryRedirect`)
    - 308 Permanent Redirect (`permanentRedirect`)
- 4xx status codes
    - 400 Bad Request (`badRequest`)
    - 401 Unauthorized (`unauthorized`)
    - 403 Forbidden (`forbidden`)
    - 404 Not Found (`notFound`)
    - 410 Gone (`gone`)
    - 418 I'm a teapot (`imATeapot`)
- 5xx status codes
    - 500 Internal Server Error (`internalServerError`)

## Usage

Install with `npm install @major-tanya/fancy-status`.

```typescript
import { ok } from '@major-tanya/fancy-status'

function myFunc(request: Request): Response {
  /* business logic */
  const options: ResponseInit = { headers: { 'X-Some-Header': 'some value' } }
  return ok('Some response body text', options)
}
```

It's also compatible with libraries like [`itty-router`](https://github.com/kwhitley/itty-router) that use pure
`Response`.

## Notes

The functions will override any provided `status` and `statusText` values with the method's corresponding values. If
this is undesired, you can always just return normal `Response`s with your `status` and `statusText` overrides.
