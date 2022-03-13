import {loadStdlib}from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

(async   ()=>{
    const stdlib=await loadStdlib();
    
    const accAlice=await stdlib.newTestAccount(stdlib.parseCurrency(5));
    const accBob=await stdlib.newTestAccount(stdlib.parseCurrency(10));

    const ctcAlice =await accAlice.deploy(backend);
    const ctcBob =await accBob.attach(backend,ctcAlice);
    
})