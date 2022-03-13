import {loadStdlib}from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

(async ()=>{
    const stdlib =await loadStdlib();//env variables,local nodes


//showBalance function
const showBalance=async (who ,acc)=>{ 
    console.log(`${who}'s balance  is ${stdlib.formatCurrency(await stdlib.balanceOf(acc)) }`) 
}

    //accounts
    const accAlice= await stdlib.newTestAccount(stdlib.parseCurrency(5));
    const accBob= await stdlib.newTestAccount(stdlib.parseCurrency(10));
    //contracts
    const ctcAlice=await  accAlice.contract(backend);//accAlice.deploy(backend) is depreciated
    const ctcBob=await accBob.contract(backend,ctcAlice);// acc.attach(bin, info) is deprecated


    await showBalance('Alice',accAlice);
    await showBalance('Bob',accBob);

    await Promise.all([
        backend.Alice(ctcAlice,stdlib, {
            //Alice interection object
            request:stdlib.parseCurrency(5),//convert to tokenvalue e.g wei
            info :'If you wera these,you can see through evil illusions.'


        }),
        backend.Bob(stdlib,ctcBob,{
        //Bob's interact object
         want:(amt)=>console.log(`Alice asks me,Bob,for ${stdlib.formatCurrency(amt)}`),
         got:(secret)=>console.log(`Alice secret is ${stdlib.hexToString(secret)}`)
        })
          
    ]);
     await showBalance('Alice',accAlice);
     await showBalance('Bob',accBob);
})();