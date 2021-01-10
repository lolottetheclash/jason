const app = require('./server');
const supertest = require('supertest');
const request = supertest(app);

describe('Server testing', () => {
  it('Gets the /api/users endpoint 200 response with supertest', async done => {
    const response = await request.get('/api/users');
    expect(response.status).toBe(200);
    done();
  });
  it('Gets the /api/users endpoint 200 response with simulated app', async done => {
    app.get('/api/users', async (req, res) => {
      expect(response.status).toBe(200);
    });
    done();
  });
});
