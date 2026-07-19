const { createResponse, handler } = require('../index');

describe('Lambda response tests', () => {

  test('createResponse が正しいレスポンスを返す', () => {
    const result = createResponse();

    expect(result.statusCode).toBe(200);

    const body = JSON.parse(result.body);
    expect(body.message).toBe("Hello from GitHub_CICD");
  });

  test('handler が createResponse を返す', async () => {
    const result = await handler({});

    expect(result.statusCode).toBe(200);

    const body = JSON.parse(result.body);
    expect(body.message).toBe("Hello from GitHub_CICD");
  });

});
