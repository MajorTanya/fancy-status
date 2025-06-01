import { describe, expect, it } from 'vitest';
import {
  badRequest,
  forbidden,
  gone,
  imATeapot,
  notFound,
  unauthorized,
} from '../../src';

describe('Bad Request status', () => {
  it('should have status code 400 and statusText "Bad Request"', () => {
    const response = badRequest();

    expect(response.status).toStrictEqual(400);
    expect(response.statusText).toStrictEqual('Bad Request');
  });
});

describe('Unauthorized status', () => {
  it('should have status code 401 and statusText "Unauthorized"', () => {
    const response = unauthorized();

    expect(response.status).toStrictEqual(401);
    expect(response.statusText).toStrictEqual('Unauthorized');
  });
});

describe('Forbidden status', () => {
  it('should have status code 403 and statusText "Forbidden"', () => {
    const response = forbidden();

    expect(response.status).toStrictEqual(403);
    expect(response.statusText).toStrictEqual('Forbidden');
  });
});

describe('Not Found status', () => {
  it('should have status code 404 and statusText "Not Found"', () => {
    const response = notFound();

    expect(response.status).toStrictEqual(404);
    expect(response.statusText).toStrictEqual('Not Found');
  });
});

describe('Gone status', () => {
  it('should have status code 410 and statusText "Gone"', () => {
    const response = gone();

    expect(response.status).toStrictEqual(410);
    expect(response.statusText).toStrictEqual('Gone');
  });
});

describe("I'm a teapot status", () => {
  it('should have status code 418 and statusText "I\'m a teapot"', () => {
    const response = imATeapot();

    expect(response.status).toStrictEqual(418);
    expect(response.statusText).toStrictEqual("I'm a teapot");
  });
});
