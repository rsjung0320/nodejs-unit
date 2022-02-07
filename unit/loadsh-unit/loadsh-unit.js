// import _ from 'lodash';
import _ from 'lodash';

// let _ = require('lodash');

let obj = {
    a: 10,
    b: {
        aa: 'abc'
    }
};

let obj2 = _.cloneDeep(obj);

console.log(`obj : ${obj.a}`);
