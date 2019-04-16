// const SHA256 = require('crypto-js/sha256');
const Blockchain = require('./BlockChain.js');
const Block = require('./Block.js');
// const chain = new BlockChain();
const blockchain = new Blockchain()

// let myBlockChain = new BlockChain.Blockchain();

class BlockController {

  constructor(app) {
    this.app = app;
    // this.blocks = [];
    // this.myBlockChain = new myBlockChin.BlockChain;
    this.notFound();
    this.initializeMockData();
    this.getBlockByIndex();
    this.postNewBlock();
  }

  // setTimeout = (() => {
  //   console.log("Waiting...")
  // }, 10000);

  notFound() {
    this.app.get('/', (req, res) => {
      res.status(404).json({
        "status": 404,
        "message": "Page not found. GET: http://localhost:8000/block/{BLOCK_HEIGHT}, POST: http://localhost:8000/block"
      });
    });
  }
  
  /*
  ** GET Block Endpoint
  ** Configure a GET request using URL path with a block height parameter. 
  ** The response for the endpoint should provide block object is JSON format.
  ** URL: http://localhost:8000/block/[blockheight] 
  */
  getBlockByIndex() {
    this.app.get("/block/:blockheight", async (req, res) => {
      try {
        const block = await blockchain.getBlock(req.params.blockheight);
        console.log('block', block);
        // res.sendStatus(200)
        // res.send(block)
        if(block === undefined) {
          res.status(500).json({
            "status": 500,
            "message": "Block does not exist!"
          });
        } else {
          res.status(200).json(block);
        }
      } catch(err) {
        console.log(err);
      }
    });
  }

    /**
    ** POST Block Endpoint
    ** Post a new block with data payload option to add data to the block body. 
    ** The block body should support a string of text. 
    ** The response for the endpoint should provide block object in JSON format.
    ** URL: http://localhost:8000/block
    */
    postNewBlock() {
        this.app.post("/block", async (req, res) => {
          try {
            if(req.body.body === '' || req.body.body === undefined) {
              res.status(500).json({
                "status": 500,
                "message": "Please fill the body parameter!!"
              })
            } else {
              await blockchain.addBlock(new Block.Block(req.body.body));
              let height = await blockchain.getBlockHeight();
              height = height + 1;
              let newBlock = await blockchain.getBlock(height);
              // res.sendStatus(200, newBlock);
              res.json(newBlock);
            }

            // await blockchain.addBlock(new Block(req.body.body));

            // const data = new Block.Block(req.body.body);
            // // console.log(this.blocks.length);
            // data.height = this.blocks.length;
            // data.hash = SHA256(JSON.stringify(data)).toString();
            // // console.log(data, data.height, data.hash);
            // const block = this.blocks.push(data);
            // res.sendStatus(200, block)
            // res.json()
        } catch(err) {
          console.log(err);
        }
        });
    }

    /**
     * Help method to inizialized Mock dataset, adds 10 test blocks to the blocks array
     */
    // initializeMockData() {
    //     if(this.blocks.length === 0){
    //         for (let index = 0; index < 10; index++) {
    //             let blockAux = new BlockClass.Block(`Test Data #${index}`);
    //             blockAux.height = index;
    //             blockAux.hash = SHA256(JSON.stringify(blockAux)).toString();
    //             this.blocks.push(blockAux);
    //         }
    //     }
    // }
    initializeMockData() {
     
      setTimeout(async () => {
        console.log(await blockchain.getBlockHeight());
        if(await blockchain.getBlockHeight() === 0) {
          for (let i = 0; i < 10; i++) {
            let blockTest = new Block.Block("Test Block - " + (i + 1));
            await blockchain.addBlock(blockTest).then((result) => {
              console.log(result);
            })
          }
        }
      }, 10000);
    }

}

/**
 * Exporting the BlockController class
 * @param {*} app 
 */
module.exports = (app) => { return new BlockController(app);}