import { describe, expect, it } from 'vitest';
import {
  found,
  movedPermanently,
  permanentRedirect,
  temporaryRedirect,
} from '../../src';

describe('Moved Permanently status', () => {
  it('should have status 301 and statusText "Moved Permanently"', () => {
    const response = movedPermanently();

    expect(response.status).toStrictEqual(301);
    expect(response.statusText).toStrictEqual('Moved Permanently');
  });
});

describe('Found status', () => {
  it('should have status code 302 and statusText "Found"', () => {
    const response = found();

    expect(response.status).toStrictEqual(302);
    expect(response.statusText).toStrictEqual('Found');
  });
});

describe('Temporary Redirect status', () => {
  it('should have status code 307 and statusText "Temporary Redirect"', () => {
    const response = temporaryRedirect();

    expect(response.status).toStrictEqual(307);
    expect(response.statusText).toStrictEqual('Temporary Redirect');
  });
});

describe('Permanent Redirect status', () => {
  it('should have status code 308 and statusText "Permanent Redirect"', () => {
    const response = permanentRedirect();

    expect(response.status).toStrictEqual(308);
    expect(response.statusText).toStrictEqual('Permanent Redirect');
  });
});
