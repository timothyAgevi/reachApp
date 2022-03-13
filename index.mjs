import {loadstdlib}from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

(async ()=>{
    const stdlib =await loadstdlib();//env variables,local nodes
})();