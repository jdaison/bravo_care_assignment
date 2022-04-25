const request = require('supertest');
const app = require('../src/app');

describe('Bravocare API', () => {
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

  it('should update a hospital', async () => {
    const res = await request(app).put('/hospitals/1')
      .send({
        name: 'Hospital one',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('hospital');
    expect(res.body.hospital.name).toEqual('Hospital one');
  });
});
