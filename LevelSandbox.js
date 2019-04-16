/* ===== Persist data with LevelDB ==================
|  Learn more: level: https://github.com/Level/level |
/===================================================*/

const level = require('level');
const chainDB = './chaindata';

class LevelSandbox {

    constructor() {
        this.db = level(chainDB);
    }

    // Get data from levelDB with key (Promise)
    getLevelDBData(key){
        let self = this;
        return new Promise((resolve, reject) => {
            // Add your code here, remember in Promises you need to resolve() or reject()
            self.db.get(key, (err, value) => {
                if (err) {
                  reject(err);
                } 
                resolve(value);
              });
        });
    }

    // Add data to levelDB with key and value (Promise)
    addLevelDBData(key, value) {
        let self = this;
        return new Promise((resolve, reject) => {
            // Add your code here, remember in Promises you need to resolve() or reject() 
            self.db.put(key, value, (err) => {
                if (err) {
                  console.log('Block ' + key + ' submission failed', err);
                  reject(err);
                }
                console.log("Added Block # ", key);
                resolve(value);
              });
        });
    }


    // Method that return the height
    getBlocksCount() {
        let self = this;
        return new Promise((resolve, reject) => {
            // Add your code here, remember in Promises you need to resolve() or reject()
            let count = -1;
            self.db.createReadStream()
            .on('data', (data) => {
                count++;
            })
            .on('error', (err) => {
                reject(err);
            })
            .on('close', () => {
                resolve(count);
            });
        });
    }
    
}

module.exports.LevelSandbox = LevelSandbox;
