const { expect } = require('chai');
const { sendRequest } = require('../helpers/api.helper');
const newData = require('../config/testData/newData.json');
const ferstElem = require('../config/testData/firstElementData.json');
const filter = require('../config/testData/filteredData.json');
const allData = require('../config/testData/allData.json');

describe('API Test Suite', () => {
  it('get() all posts', async () => {
    const response = await sendRequest('posts');

    expect(response.status).to.equal(200);
    expect(response.data).to.eql(allData);
  });

  it('get() first post', async () => {
    const response = await sendRequest('posts/1');

    expect(response.status).to.equal(200);
    expect(response.data).to.eql(ferstElem);
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

    delete response.data.id;
    // console.log(response.data)
    delete newData.id;
    // console.log(newData)

    expect(response.status).to.equal(200);
    expect(response.data).to.eql(newData);
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
