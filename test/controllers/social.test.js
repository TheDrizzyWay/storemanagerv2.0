import chai from 'chai';
import nock from 'nock';
import socialCallback from '../../api/v1/services/socialCallback';
import app from '../../api/app';

const { expect } = chai;

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

nock('https://www.twitter.com/')
  .filteringPath(() => '/api/v1/auth/twitter')
  .get('/api/v1/auth/twitter')
  .reply(200, 'twitter callback route called', {
    Location: '/',
  });


describe('facebook strategy', () => {
  it('should be a function', (done) => {
    socialCallback(accessToken, refreshToken, profile, done);
    expect(socialCallback).to.be.a('function');
  });

  it('should call the facebook route', async () => {
    const response = await chai.request(app).get('/api/v1/auth/facebook');
    expect(response).to.have.status(200);
    expect(response.text).to.be.deep.equal('facebook route called');
  });
});
