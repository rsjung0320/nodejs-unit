// import _ from 'lodash';
import _ from 'lodash';

// let _ = require('lodash');

let obj = {
    a: 10,
    b: {
        aa: 'abc'
    }
};

// 참조 값이 복사되는 것이 아니라 newObj 값이 새로 생성되고 값이 복사됨
let newObj = _.cloneDeep(obj);

console.log(obj === newObj) // false
console.log(obj.a === newObj.a) // true
console.log(obj.b === newObj.b) // false

let newObj1 = _.clone(obj);

console.log(obj === newObj1) // false
console.log(obj.a === newObj1.a) // true
console.log(obj.b === newObj1.b) // false