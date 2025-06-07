const request = require('supertest');
const app = require('../../app');

describe('Country API Integration Tests', () => {
  test('GET /countries returns list of countries', async () => {
    const res = await request(app).get('/countries');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('name');
    expect(res.body[0]).toHaveProperty('flag');
  });

  test('GET /countries/Germany returns Germany details', async () => {
    const res = await request(app).get('/countries/Germany');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name', 'Germany');
    expect(res.body).toHaveProperty('capital', 'Berlin');
    expect(res.body).toHaveProperty('population');
  });

  test('GET /countries/UnknownCountry returns 404', async () => {
    const res = await request(app).get('/countries/UnknownCountry');
    expect(res.statusCode).toBe(404);
    // Match your actual error response key — change to 'message' if your API uses that
    expect(res.body).toHaveProperty('message', 'Country not found');
  });
});