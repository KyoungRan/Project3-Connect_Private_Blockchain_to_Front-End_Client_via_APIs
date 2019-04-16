# Project #3 Connect Private Blockchain to Front-End Client via APIs

This is Project 3, Connect Private Blockchain to Front-End Client via APIs, in this project I created a RESTful web API for my private blockchain. The API project will require two endpoints:

* GET block
* POST block

## Setup project for Review.

To setup the project for review do the following:

1. Download the project.
2. Run command __npm install__ to install the project dependencies.
3. Run command __node app.js__ in the root directory.

## Endpoints

### GET Block Endpoint

* URL

`http://localhost:8000/block/[blockheight]`

Example: http://localhost:8000/block/0
  
* Method
  `GET`

* Success Response
  * Status Code
    `200`

  * Example GET Response  
    For URL, http://localhost:8000/block/1

  ```
  {
    "status":200,
    "message":"Success Response",
    "json":{
      "hash":"9ef23f38b65d44613b0fbdca7656d09cd33a84f6116a0982c6b73a7c28e7c4a0","height":1,
      "body":"Test Block - 1",
      "time":"1555441819","previousBlockHash":"f8cf7b5a3ebe755d84ff57784a3eaca41b702fde108f62513373a190c73a5464"}}
  ```

* Error
  * Status Code
    `500`
  * Error Response

  ```
  {
    "status":500,
    "message":"Block does not exist!"
  }
  ```

### POST Block Endpoint

* URL
  `http://localhost:8000/block`

* Method
  `POST`

* Required Params
  `body` parameter

* Success Response
  * Status Code
    `200`

  * Example POST Response  
    For URL, http://localhost:8000/block

  ```
  {
    "status":200,
    "message":"Success Response",
    "json": {
      hash: '9ef23f38b65d44613b0fbdca7656d09cd33a84f6116a0982c6b73a7c28e7c4a0',
      height: 23,
      body: 'aaaaaaaaaabbbbbbbbbcccccc',
      time: '1555445810',
      previousBlockHash: 'f8cf7b5a3ebe755d84ff57784a3eaca41b702fde108f62513373a190c73a5464' 
    }
  }
  ```

* Error
  * Status Code
    `500`
  * Error Response

  ```
  {
    "status": 500,
    "message": "Please fill the body parameter!!"
  }
  ```

## Testing Endpoints Tools

When we are developing a RESTful API, we need to test our endpoints. To do that, we are going to introduce 2 powerful tools - Postman and Curl.

* [Postman](https://www.getpostman.com) is a powerful tool used to test web services. It was developed for sending HTTP requests in a simple and quick way.
* [CURL](https://curl.haxx.se/) is a command-line tool used to deliver requests supporting a variety of protocols like HTTP, HTTPS, FTP, FTPS, SFTP, and many more.