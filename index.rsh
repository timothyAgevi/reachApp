'reach 0.1';
export const main =
  Reach.App(
      {},
      [//the participants
      [ 'Alice',{ request:UInt,info:Bytes} ],//2nd param is participant interface(interface btn frontend and reach)
      [ 'Bob',{want:Fun([UInt],Null)}]
    ],
    (Alice,Bob)=> { 
        //Alice will ask Bob for some funds
        Alice.only(()=>{// Alice tkes action on her own(only)
           const amount = declassify(interact.request);//interact acess interface,declassify make info public for publish(shared)
           assume(amount<100);//turned to runtime check on frontend
        });
        Alice.publish(amount);//publish sending info out,ester ac neva ends with funds inside it
        //context/constraints/rules of publication,since its consensus network
        require(amount<100);//turned to runtime check inside consensus network
        commit();
        //Bob will send the funds
        Bob.only( ()=>{
            interact.want(amount);
        })
        Bob.pay(amount);// to contract
        commit();
        //Alice will take them,shell share some info
        Alice.only( ()=>{
            const info=declassify(interact.info);
        })
        exit();
    }
  );