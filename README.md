# [`fancy-status`](https://www.npmjs.com/package/@major-tanya/fancy-status)

[![Coverage Status](https://coveralls.io/repos/github/MajorTanya/fancy-status/badge.svg?branch=main)](https://coveralls.io/github/MajorTanya/fancy-status?branch=main)
![Lint Status](https://img.shields.io/github/actions/workflow/status/MajorTanya/fancy-status/lint.yml?label=lint)
![Test Status](https://img.shields.io/github/actions/workflow/status/MajorTanya/fancy-status/testing.yml?label=tests)
![GitHub issues](https://img.shields.io/github/issues/MajorTanya/fancy-status)
![Package version](https://img.shields.io/github/package-json/version/MajorTanya/fancy-status)

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

All methods support adding a body (`BodyInit` type) and options (`ResponseInit` type) (see [Notes](#notes)).

```typescript
import { ok } from '@major-tanya/fancy-status'

function myHandler(request: Request): Response {
  /* business logic */
  const options: ResponseInit = { headers: { 'X-Some-Header': 'some value' } }
  return ok('Some response body text', options)
}
```

It's also compatible with libraries that use pure `Response`, like
[`itty-router`](https://github.com/kwhitley/itty-router).

## Notes

- The functions do not perform any sort of formatting or parsing on the passed content - they only set the status code
  and status text.
- The functions will override any provided `status` and `statusText` values with the method's corresponding values. If
  this is undesired, you can always just return normal `Response`s with your `status` and `statusText` overrides.
- [RFC 9110](https://datatracker.ietf.org/doc/html/rfc9110) defines some status codes like 204 as not allowing a body,
  so the `noContent` function does not accept a body parameter.

# TODO

- [ ] more ergonomic handling of things like JSON body content (right now requires manual correct setting of
  `Content-Type` header)
