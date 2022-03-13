import {loadStdlib}from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

(async ()=>{
    const stdlib =await loadStdlib();//env variables,local nodes
    //accounts
    const accAlice= await stdlib.newTestAccount(stdlib.parseCurrency(5));
    const accBob= await stdlib.newTestAccount(stdlib.parseCurrency(10));
    //contracts
    const ctcAlice=await accAlice.deploy(backend);
    const ctcBob=await accBob.attach(backend,ctcAlice);

    await Promise.all([
        backend.Alice(stdlib,ctcAlice, {
            //Alice interection object
            request:stdlib.parseCurrency(5),//convert to tokenvalue e.g wei
            info :" this is the forbidden fruit"


        }),
        backend.Bob(stdlib,ctcBob,{
        //Bob's interact object
         want:(amt)=>console.log(`Alice asks me,Bob,for ${stdlib.formatcurrency(amt)}`),
         got:(secret)=>console.log(`Alice secret is ${stdlib.hexToString(secret)}`)
        }),
          
    ]);

})();