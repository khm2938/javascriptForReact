// require => 자바의 import와 같은 기능
import {sub, div} from './math.js'; 
import add from './math.js';
import randomcolor from 'randomcolor';

let color = randomcolor();
console.log(`color = ${color}`);
console.log(add(10,20));
console.log(sub(10,20));
console.log(div(10,20));

console.log('안녕 node.js');