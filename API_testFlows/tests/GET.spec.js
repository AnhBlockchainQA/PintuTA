import { test, expect } from '@playwright/test';

test('GET response validation', async ({ request }) => {
  const response = await request.get('/posts', {});

  expect(response.status()).toBe(200);

  const responseBody = await response.text();

  try {
    const responseData = JSON.parse(responseBody);

    expect(Array.isArray(responseData)).toBeTruthy();

    for (const post of responseData) {
      const { userId, id, title, body } = post;

      expect(typeof userId).toBe('number');
      expect(Number.isInteger(userId)).toBeTruthy();
      expect(typeof id).toBe('number');
      expect(Number.isInteger(id)).toBeTruthy();
      expect(typeof title).toBe('string');
      expect(typeof body).toBe('string');

      console.log(`Data Type at Id: ${id} are correct.`);
    }
  } catch (parseError) {
    console.log('Failed to parse response:', parseError.message);
  }
});
