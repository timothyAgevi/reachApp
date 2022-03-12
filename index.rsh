'reach 0.1';
export const main =
  Reach.App(
      {},
      [//the participants
      [ 'Alice',{} ],
      [ 'Bob',{}]
    ],
    (Alice,Bob)=> { 
        //Alice will ask Bob for some funds
        Alice.only(()=>{// Alice tkes action on her own(only)
           
        });
        Alice.publish(amount);//publish sending info out
        //Bob will send the funds
        //Alice willtake them
        exit()
    }
  );