const request = require('supertest');
const app = require('../../src/app');

describe('Reports API', () => {
  it('should get all ShiftAssignments', async () => {
    const res = await request(app).get('/report/hospital/2?start_date=2020-01-01&end_date=2020-12-31');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('report');
    expect(res.body.report.length).toEqual(1);
  });

  it('should return an error with invalid parameters', async () => {
    const res = await request(app).get('/report/hospital/2?test=2020-01-01&end_date=2020-12-31');
    expect(res.statusCode).toEqual(500);
    // eslint-disable-next-line no-useless-escape
    expect(res.error.text).toEqual('ValidationError: \"start_date\" is required');
  });
});
