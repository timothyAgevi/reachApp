'reach 0.1';
export const main =
  Reach.App(
      {},
      [//the participants
      [ 'Alice',{} ],
      [ 'Bob',{}]
    ],
    ()=> { 
        //Alice will ask Bob for some funds
        //Bob will send the funds
        //Alice willtake them
        exit()
    }
  );