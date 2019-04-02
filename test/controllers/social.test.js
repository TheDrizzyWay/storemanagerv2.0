import chai from 'chai';
import nock from 'nock';
import UserController from '../../api/v1/controllers/usercontroller';
import app from '../../api/app';

const { expect } = chai;
const { strategyCallback } = UserController;
const accessToken = 'sometoken';
const refreshToken = 'sometoken';
const profile = {
  id: '123456789',
  emails: [{ value: 'random@email.com' }],
  displayName: 'random name',
  name: {
    familyName: 'randomname',
    givenName: 'randomname',
  },
  photos: [{ value: 'url' }],
};


nock('https://www.facebook.com/')
  .filteringPath(() => '/api/v1/auth/facebook')
  .get('/api/v1/auth/facebook')
  .reply(200, 'facebook route called');

describe('facebook strategy', () => {
  it('should be a function', (done) => {
    strategyCallback(accessToken, refreshToken, profile, done);
    expect(strategyCallback).to.be.a('function');
  });

  it('should call the facebook route', async () => {
    const response = await chai.request(app).get('/api/v1/auth/facebook');
    expect(response).to.have.status(200);
    expect(response.text).to.be.deep.equal('facebook route called');
  });
});
