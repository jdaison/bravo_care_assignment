const request = require('supertest');
const app = require('../../src/app');

describe('Nurses API', () => {
  it('should show all Nurses', async () => {
    const res = await request(app).get('/nurses');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('nurses');
    expect(res.body.nurses.length).toEqual(3);
  });

  it('should show get a nurse', async () => {
    const res = await request(app).get('/nurses/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('nurse');
    expect(res.body.nurse.id).toEqual(1);
  });

  it('should return an error to update a nurse with invalid data', async () => {
    const res = await request(app).put('/nurses/1')
      .send({
        test: 'Nurse one',
      });
    expect(res.statusCode).toEqual(500);
    expect(res.error.text).toEqual('ValidationError: "test" is not allowed');
  });

  it('should update a nurse', async () => {
    const res = await request(app).put('/nurses/1')
      .send({
        name: 'Hospital one',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('nurse');
    expect(res.body.nurse.name).toEqual('Hospital one');
  });

  it('should return an error to creating a nurse with invalid data', async () => {
    const res = await request(app).post('/nurses')
      .send({
        name: 'Hospital 4',
      });
    expect(res.statusCode).toEqual(500);
    // eslint-disable-next-line no-useless-escape
    expect(res.error.text).toEqual('{\"error\":\"ValidationError: \\\"hourly_rate\\\" is required\"}');
  });

  it('should create a nurse', async () => {
    const res = await request(app).post('/nurses')
      .send({
        name: 'Nurse 4',
        hourly_rate: 50,
        start_date: '2012-01-01',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('nurse');
    expect(res.body.nurse.name).toEqual('Nurse 4');
  });

  it('should delete a nurse', async () => {
    const res = await request(app).delete('/nurses/4');
    expect(res.statusCode).toEqual(204);
  });
});
