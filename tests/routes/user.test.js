const request = require('supertest');
const app = require('../../src/app');

describe('Users API', () => {
  it('should show all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('users');
    expect(res.body.users.length).toEqual(1);
  });

  it('should return an error to creating an user with invalid data', async () => {
    const res = await request(app).post('/users')
      .send({
        name: 'User 1',
      });
    expect(res.statusCode).toEqual(500);
    // eslint-disable-next-line no-useless-escape
    expect(res.error.text).toEqual('{\"error\":\"ValidationError: \\\"user\\\" is required\"}');
  });

  it('should create an user', async () => {
    const res = await request(app).post('/users')
      .send({
        user: 'user12345',
        password: 'pass12345',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('user');
    expect(res.body.user.user).toEqual('user12345');
    expect(res.body.user.password).toEqual('');
  });
});
