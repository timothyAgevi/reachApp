import {loadstdlib}from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

(async ()=>{
    const stdlib =await loadstdlib();//env variables,local nodes
    //accounts
    const accAlice= await stdlib.newTestAccount(stdlib.parseCurrency(5));
    const accBob= await stdlib.newTestAccount(stdlib.parseCurrency(10));
    //contracts
    const ctcAlice=await accAlice.deploy(backend);
    const ctcBob=await accBob.attach(backend,ctcAlice);

    await Promise.all([
        backend.Alice(stdlib,ctcAlice, {
            //alice interection object
        }),
        backend.Bob(stdlib,ctcBob,{
        //Bob's interaction object
        
        }),
          
    ]);

})();