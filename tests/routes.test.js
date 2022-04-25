const request = require('supertest');
const app = require('../src/app.js');

describe('Bravocare API', () => {
  it('should show all hospitals', async () => {
    const res = await request(app).get('/hospitals');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('hospitals');
    expect(res.body.hospitals.length).toEqual(3);
  });
});
