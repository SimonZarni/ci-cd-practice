const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return Hello message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Hello from CI/CD-expanded project!');
  });
});

describe('GET /about', () => {
  it('should return About message', async () => {
    const response = await request(app).get('/about');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'This is the About page', version: '1.0.0' });
  });
});