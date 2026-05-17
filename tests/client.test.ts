/**
 * Basic unit tests for the FetchHive client.
 * Tests stub global `fetch` — no real network calls are made.
 */
import { FetchHive } from '../src/client.js';

function makeMockFetch(body: unknown, status = 200) {
  return jest.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    json: () => Promise.resolve(body),
    text: () => Promise.resolve(JSON.stringify(body)),
    body: null,
  });
}

describe('FetchHive constructor', () => {
  test('throws when apiKey is empty', () => {
    expect(() => new FetchHive({ apiKey: '' })).toThrow('apiKey is required');
  });

  test('creates successfully with a valid apiKey', () => {
    const client = new FetchHive({ apiKey: 'test-key' });
    expect(client).toBeDefined();
  });
});

describe('invokePrompt', () => {
  test('sends the correct request and returns the response', async () => {
    const mockBody = { request_id: 'req_1', response: 'Hello', model: 'gpt-4o' };
    const mockFetch = makeMockFetch(mockBody);
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'test-key' });
    const result = await client.invokePrompt({ deployment: 'my-prompt', inputs: { name: 'Alice' } });

    expect(mockFetch).toHaveBeenCalledTimes(1);
    const [url, opts] = mockFetch.mock.calls[0] as [string, RequestInit];
    expect(url).toContain('/invoke');
    expect(opts.method).toBe('POST');
    const sentBody = JSON.parse(opts.body as string);
    expect(sentBody.deployment).toBe('my-prompt');
    expect(sentBody.streaming).toBe(false);
    expect(result.response).toBe('Hello');
  });
});

describe('invokeAgent', () => {
  test('sends the correct request and returns the response', async () => {
    const mockBody = { request_id: 'req_2', response: 'Hi there' };
    const mockFetch = makeMockFetch(mockBody);
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'test-key' });
    const result = await client.invokeAgent({ agent: 'my-agent', message: 'Hi' });

    const [url, opts] = mockFetch.mock.calls[0] as [string, RequestInit];
    expect(url).toContain('/agent/invoke');
    const sentBody = JSON.parse(opts.body as string);
    expect(sentBody.streaming).toBe(false);
    expect(result.response).toBe('Hi there');
  });
});
