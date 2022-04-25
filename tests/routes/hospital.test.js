const request = require('supertest');
const app = require('../../src/app');

describe('Hospitals API', () => {
  it('should show all hospitals', async () => {
    const res = await request(app).get('/hospitals');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('hospitals');
    expect(res.body.hospitals.length).toEqual(3);
  });

  it('should show get a hospital', async () => {
    const res = await request(app).get('/hospitals/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('hospital');
    expect(res.body.hospital.id).toEqual(1);
  });

  it('should return an error to update a hospital with invalid data', async () => {
    const res = await request(app).put('/hospitals/1')
      .send({
        test: 'Hospital one',
      });
    expect(res.statusCode).toEqual(500);
    expect(res.error.text).toEqual('ValidationError: "test" is not allowed');
  });

  it('should update a hospital', async () => {
    const res = await request(app).put('/hospitals/1')
      .send({
        name: 'Hospital one',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('hospital');
    expect(res.body.hospital.name).toEqual('Hospital one');
  });

  it('should return an error to creating a hospital with invalid data', async () => {
    const res = await request(app).post('/hospitals')
      .send({
        name: 'Hospital 4',
      });
    expect(res.statusCode).toEqual(500);
    // eslint-disable-next-line no-useless-escape
    expect(res.error.text).toEqual('{\"error\":\"ValidationError: \\\"billing_code\\\" is required\"}');
  });

  it('should create a hospital', async () => {
    const res = await request(app).post('/hospitals')
      .send({
        name: 'Hospital 4',
        billing_code: 'H4',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('hospital');
    expect(res.body.hospital.name).toEqual('Hospital 4');
  });

  it('should delete a hospital', async () => {
    const res = await request(app).delete('/hospitals/4');
    expect(res.statusCode).toEqual(204);
  });
});
