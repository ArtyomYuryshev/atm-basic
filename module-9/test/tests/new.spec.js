const { expect } = require('chai');
const { sendRequest } = require('../helpers/api.helper');
const testData = require('../config/newData.json');
const ferstElem = require('../config/firstElementData.json');
const filter = require('../config/filteredData.json');

describe('API Test Suite', () => {
  let userId;
  let title;
  let body;

  it('get() all posts', async () => {
    const response = await sendRequest('posts');

    expect(response.status).to.equal(200);
    expect(response.data[0].id).to.equal(1);
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

  it('get() (filter) 1st post', async () => {
    const response = await sendRequest('posts?id=1');

    const filterUserId = response.data.userId;
    const filterTitle = response.data.title;
    const filterBody = response.data.body;

    expect(response.status).to.equal(200);
    expect(filterUserId).to.equal(filter.data.userId);
    expect(filterTitle).to.equal(filter.data.title);
    expect(filterBody).to.equal(filter.data.body);
  });

  it('post() new entity', async () => {
    const response = await sendRequest('posts', testData, 'post');

    userId = response.data.userId;
    title = response.data.title;
    body = response.data.body;

    expect(response.status).to.equal(201);
    expect(userId).to.equal(testData.userId);
    expect(title).to.equal(testData.title);
    expect(body).to.equal(testData.body);
  });

  it('put() (update) first entity', async () => {
    const response = await sendRequest('posts/1', testData, 'put');

    userId = response.data.userId;
    title = response.data.title;
    body = response.data.body;

    expect(response.status).to.equal(200);
    expect(userId).to.equal(testData.userId);
    expect(title).to.equal(testData.title);
    expect(body).to.equal(testData.body);
  });

  it('delete() first entity', async () => {
    const response = await sendRequest('posts/1', testData, 'delete');

    // looks strange but server return 200 instead of 204 (checked in Postman)
    expect(response.status).to.equal(200);
    expect(response.userId).to.equal(undefined);
    expect(response.title).to.equal(undefined);
    expect(response.body).to.equal(undefined);
  });
});
