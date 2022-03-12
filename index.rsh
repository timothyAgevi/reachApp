'reach 0.1';
export const main =
  Reach.App(
      {},
      [//the participants
      [ 'Alice',{ request:Uint256} ],//2nd param is participant interface(interface btn frontend and reach)
      [ 'Bob',{}]
    ],
    (Alice,Bob)=> { 
        //Alice will ask Bob for some funds
        Alice.only(()=>{// Alice tkes action on her own(only)
           const amount = interact.request;
        });
        Alice.publish(amount);//publish sending info out
        //Bob will send the funds
        //Alice willtake them
        exit()
    }
  );