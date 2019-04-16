# Project #3 Connect Private Blockchain to Front-End Client via APIs

This is Project 3, Connect Private Blockchain to Front-End Client via APIs, in this project I created a web API using a Node.js framework that will interact with a private blockchain to submit and retrieve blockchain data.

## Setup project for Review.

To setup the project for review do the following:
1. Download the project.
2. Run command __npm install__ to install the project dependencies.
3. Run command __node app.js__ in the root directory.

## Endpoints

### GET Block Endpoint

	* URL  
		* `http://localhost:8000/block/[blockheight]`
		* Example: http://localhost:8000/block/0

	* Method
		* ```GET```
	
	* Response
		* Status Code
			```200```

		* json

		```
		{ 
			hash:'6b26aa321b48e1cfaa14ce11865d678faf6aaecb0117ed1e20b3217eadbfbf49',
  		height: 1,
  		body: 'Test Block - 1',
  		time: '1555441829',
  		previousBlockHash': 'd8173439446650d7898a48fec50348ca7887f1cc512715fbcd8d4d462a8a78e2' }
		```

### POST Block Endpoint
	* URL
		* `http://localhost:8000/block`


