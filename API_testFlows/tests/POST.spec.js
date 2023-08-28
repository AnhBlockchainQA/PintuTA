import { test, expect } from '@playwright/test';

test('POST response has the correct response compared to the inputted', async ({ request }) => {
  const response = await request.post('/posts', {
    data:{
      title: "recommendation",
      body: "Mtorcycle",
      userId: 13
    }
  });
  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toEqual(expect.objectContaining({
    title: "recommendation",body: "Mtorcycle",userId: 13
  }));
})