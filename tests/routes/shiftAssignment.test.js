const request = require('supertest');
const app = require('../../src/app');

describe('ShiftAssignments API', () => {
  it('should show all ShiftAssignments', async () => {
    const res = await request(app).get('/shift-assignments');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('shiftAssignments');
    expect(res.body.shiftAssignments.length).toEqual(4);
  });

  it('should return an error to creating a ShiftAssignments with invalid data', async () => {
    const res = await request(app).post('/shift-assignments')
      .send({
        HospitalId: 1,
        NurseId: 1,
      });
    expect(res.statusCode).toEqual(500);
    // eslint-disable-next-line no-useless-escape
    expect(res.error.text).toEqual('{\"error\":\"ValidationError: \\\"start_date\\\" is required\"}');
  });

  it('should create a ShiftAssignments', async () => {
    const res = await request(app).post('/shift-assignments')
      .send({
        start_date: '2020-05-01T13:00:00.000Z',
        end_date: '2011-05-01T17:00:00.000Z',
        HospitalId: 1,
        NurseId: 1,
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('shiftAssignment');
    expect(res.body.shiftAssignment.start_date).toEqual('2020-05-01T13:00:00.000Z');
  });
});
