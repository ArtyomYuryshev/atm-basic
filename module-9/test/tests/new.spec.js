const { expect } = require('chai');
const { sendRequest } = require('../helpers/api.helper');
const newData = require('../config/newData.json');
const ferstElem = require('../config/firstElementData.json');
const filter = require('../config/filteredData.json');
const allData = require('../config/allData.json');

describe('API Test Suite', () => {
  let userId;
  let title;
  let body;

  it('get() all posts', async () => {
    const response = await sendRequest('posts');

    expect(response.status).to.equal(200);
    expect(response.data).to.eql(allData);
  });

  it('get() first post', async () => {
    const response = await sendRequest('posts/1');

    const firstUserId = response.data.userId;
    const firstTitle = response.data.title;
    const FirstBody = response.data.body;

    expect(response.status).to.equal(200);
    expect(firstUserId).to.equal(ferstElem.userId);
    expect(firstTitle).to.equal(ferstElem.title);
    expect(FirstBody).to.equal(ferstElem.body);
  });

  it('get() non-existent post', async () => {
    const response = await sendRequest('posts/777');
    expect(response.status).to.equal(404);
    expect(response.statusText).to.equal('Not Found');
  });

  it('get() (filter) 1st post', async () => {
    const response = await sendRequest('posts?id=1');

    expect(response.status).to.equal(200);
    expect(response.data).to.eql(filter);
  });

  it('post() new entity', async () => {
    const response = await sendRequest('posts', newData, 'post');

    expect(response.status).to.equal(201);
    expect(response.data).to.eql(newData);
  });

  it('put() (update) first entity', async () => {
    const response = await sendRequest('posts/1', newData, 'put');

    userId = response.data.userId;
    title = response.data.title;
    body = response.data.body;

    expect(response.status).to.equal(200);
    expect(userId).to.equal(newData.userId);
    expect(title).to.equal(newData.title);
    expect(body).to.equal(newData.body);
    // expect(response.data).to.eql(newData);
  });

  it('put() (update) non-existent entity', async () => {
    const response = await sendRequest('posts/404', newData, 'put');
    // I think there is should be 404 instead of 500 but as is
    expect(response.status).to.equal(500);
    expect(response.statusText).to.equal('Internal Server Error');
  });

  it('delete() first entity', async () => {
    const response = await sendRequest('posts/1', '', 'delete');
    // looks strange but server return 200 instead of 204 (checked in Postman)
    expect(response.status).to.equal(200);
  });
});
