'reach 0.1';
export const main =
  Reach.App(
      {},
      [//the participants
      [ 'Alice',{ request:UInt} ],//2nd param is participant interface(interface btn frontend and reach)
      [ 'Bob',{}]
    ],
    (Alice,Bob)=> { 
        //Alice will ask Bob for some funds
        Alice.only(()=>{// Alice tkes action on her own(only)
           const amount = declassify(interact.request);//interact acess interface,declassify make info public for publish(shared)
           assume(amount<100);//turned to runtime check on frontend
        });
        Alice.publish(amount);//publish sending info out
        //context/constraints/rules of publication,since its consensus network
        require(amount<100);//turned to runtime check inside consensus network
        commit();
        //Bob will send the funds
        //Alice willtake them
        exit();
    }
  );