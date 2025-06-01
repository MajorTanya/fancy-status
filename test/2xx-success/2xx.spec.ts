import { describe, expect, it } from 'vitest';
import { created, noContent, ok } from '../../src';

describe('OK status', () => {
  it('should have status code 200 and statusText "OK"', () => {
    const response = ok();

    expect(response.status).toStrictEqual(200);
    expect(response.statusText).toStrictEqual('OK');
  });
});

describe('Created status', () => {
  it('should have status code 201 and statusText "Created"', () => {
    const response = created();

    expect(response.status).toStrictEqual(201);
    expect(response.statusText).toStrictEqual('Created');
  });
});

describe('No Content status', () => {
  it('should have status code 204 and statusText "No Content"', () => {
    const response = noContent();

    expect(response.status).toStrictEqual(204);
    expect(response.statusText).toStrictEqual('No Content');
  });
});
