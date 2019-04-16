const express = require("express");
const bodyParser = require("body-parser");

class BlockAPI {
    constructor() {
		this.app = express();	
		this.initExpress();	// set the port where the server will response to requests.
		this.initExpressMiddleWare();	// initialize all the middlewares for the framework.
		this.initControllers();	// initialize all of the controllers classes.
		this.start();
	}

	initExpress() {
		this.app.set("port", 8000);
	}

	initExpressMiddleWare() {
		this.app.use(bodyParser.urlencoded({extended:true}));
		this.app.use(bodyParser.json());
	}

	initControllers() {
		require("./BlockController.js")(this.app);
	}

	start() {
		let self = this;
		this.app.listen(this.app.get("port"), () => {
			console.log(`Server Listening for port: ${self.app.get("port")}`);
		});
	}

}

new BlockAPI();