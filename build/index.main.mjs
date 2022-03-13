// Automatically generated with Reach 0.1.8 (9e3e58f4)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (9e3e58f4)';
export const _backendVersion = 10;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  
  
  const v60 = stdlib.protect(ctc0, interact.info, 'for Alice\'s interact field info');
  const v61 = stdlib.protect(ctc1, interact.request, 'for Alice\'s interact field request');
  
  const v64 = stdlib.lt(v61, stdlib.checkedBigNumberify('./index.rsh:13:27:decimal', stdlib.UInt_max, 100));
  stdlib.assert(v64, {
    at: './index.rsh:13:19:application',
    fs: ['at ./index.rsh:11:19:application call to [unknown function] (defined at: ./index.rsh:11:22:function exp)'],
    msg: null,
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v61],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:15:15:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:15:15:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v66], secs: v68, time: v67, didSend: v29, from: v65 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:15:15:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v69 = stdlib.lt(v66, stdlib.checkedBigNumberify('./index.rsh:17:23:decimal', stdlib.UInt_max, 100));
      stdlib.assert(v69, {
        at: './index.rsh:17:15:application',
        fs: [],
        msg: null,
        who: 'Alice'
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v66], secs: v68, time: v67, didSend: v29, from: v65 } = txn1;
  ;
  const v69 = stdlib.lt(v66, stdlib.checkedBigNumberify('./index.rsh:17:23:decimal', stdlib.UInt_max, 100));
  stdlib.assert(v69, {
    at: './index.rsh:17:15:application',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v74, time: v73, didSend: v39, from: v72 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v65, v66, v60],
    evt_cnt: 1,
    funcNum: 2,
    lct: v73,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:29:15:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v80], secs: v82, time: v81, didSend: v48, from: v79 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:29:15:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v83 = stdlib.addressEq(v65, v79);
      stdlib.assert(v83, {
        at: './index.rsh:29:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      sim_r.txns.push({
        amt: v66,
        kind: 'from',
        to: v65,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v80], secs: v82, time: v81, didSend: v48, from: v79 } = txn3;
  ;
  const v83 = stdlib.addressEq(v65, v79);
  stdlib.assert(v83, {
    at: './index.rsh:29:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  ;
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8));
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v66], secs: v68, time: v67, didSend: v29, from: v65 } = txn1;
  ;
  const v69 = stdlib.lt(v66, stdlib.checkedBigNumberify('./index.rsh:17:23:decimal', stdlib.UInt_max, 100));
  stdlib.assert(v69, {
    at: './index.rsh:17:15:application',
    fs: [],
    msg: null,
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.want(v66), {
    at: './index.rsh:21:26:application',
    fs: ['at ./index.rsh:20:17:application call to [unknown function] (defined at: ./index.rsh:20:21:function exp)'],
    msg: 'want',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v65, v66],
    evt_cnt: 0,
    funcNum: 1,
    lct: v67,
    onlyIf: true,
    out_tys: [],
    pay: [v66, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v74, time: v73, didSend: v39, from: v72 } = txn2;
      
      sim_r.txns.push({
        amt: v66,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v74, time: v73, didSend: v39, from: v72 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v80], secs: v82, time: v81, didSend: v48, from: v79 } = txn3;
  ;
  const v83 = stdlib.addressEq(v65, v79);
  stdlib.assert(v83, {
    at: './index.rsh:29:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  ;
  stdlib.protect(ctc1, await interact.got(v80), {
    at: './index.rsh:34:25:application',
    fs: ['at ./index.rsh:33:17:application call to [unknown function] (defined at: ./index.rsh:33:21:function exp)'],
    msg: 'got',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BSAEAAECICYCAQAAIjUAMRhBAZEpZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgEXNhoCFzUENhoDNQVJIwxAANBJJAxAAGEkEkQkNAESRDQESSISTDQCEhFEKGRJNQNXACA1/zQFNf6ABFKx60k0/lCwNP8xABJENAMlW0lBAAyxsggjshA0/7IHsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRmBBRJEQgDTSCM0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/NAMlWzX+gASai5F0sDT+SUEAHTQASSMINQBMSwE4CBJEI0sBOBASRDIKSwE4BxJESDT/NP4WUChLAVcAKGdIJDUBMgY1AjEZIhJEQgBqSCI0ARJENARJIhJMNAISEUQ0BRc1/4AEgsRh/jT/FlCwgaCNBklBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREg0/4FkDEQxADT/FlAoSwFXAChnSCM1ATIGNQIxGSISREIAACk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/L`,
  appClear: `BQ==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 9,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T5",
                "name": "v80",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T5",
                "name": "v80",
                "type": "tuple"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516109c93803806109c9833981016040819052610022916101ad565b6000805543600355604080518251815260208084015151908201527fd2fa1fac07e66d08cb46271d2f3a2585d9761d2d591a51cc30a2056942bc38db910160405180910390a1610074341560076100eb565b6020810151516100889060641160086100eb565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100e39260029290910190610114565b505050610286565b816101105760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546101209061024b565b90600052602060002090601f0160209004810192826101425760008555610188565b82601f1061015b57805160ff1916838001178555610188565b82800160010185558215610188579182015b8281111561018857825182559160200191906001019061016d565b50610194929150610198565b5090565b5b808211156101945760008155600101610199565b60008183036040808212156101c157600080fd5b80518082016001600160401b0380821183831017156101f057634e487b7160e01b600052604160045260246000fd5b818452865183526020601f198601121561020957600080fd5b83519450602085019150848210818311171561023557634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061025f57607f821691505b6020821081141561028057634e487b7160e01b600052602260045260246000fd5b50919050565b610734806102956000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780632c10a15914610078578063647588f51461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b610052610086366004610589565b6100d6565b610052610099366004610589565b610257565b3480156100aa57600080fd5b50600154610065565b3480156100bf57600080fd5b506100c86103d9565b60405161006f9291906105ac565b6100e6600160005414600a610476565b610100813515806100f957506001548235145b600b610476565b60008080556002805461011290610609565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610609565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a3919061063e565b90507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516101d491906106b0565b60405180910390a16101ed816020015134146009610476565b6040805180820182526000808252602080830182815285516001600160a01b0316808552868301518252600293849055436001558551808401919091529051818601528451808203860181526060909101909452835192936102519391019061049b565b50505050565b610267600260005414600e610476565b6102818135158061027a57506001548235145b600f610476565b60008080556002805461029390610609565b80601f01602080910402602001604051908101604052809291908181526020018280546102bf90610609565b801561030c5780601f106102e15761010080835404028352916020019161030c565b820191906000526020600020905b8154815290600101906020018083116102ef57829003601f168201915b5050505050806020019051810190610324919061063e565b90507f9b3784429e22aba4c4982327221a1eda10915293dc1d3b879ac4b9f49e957abb8260405161035591906106da565b60405180910390a16103693415600c610476565b8051610381906001600160a01b03163314600d610476565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156103be573d6000803e3d6000fd5b50600080805560018190556103d59060029061051f565b5050565b6000606060005460028080546103ee90610609565b80601f016020809104026020016040519081016040528092919081815260200182805461041a90610609565b80156104675780601f1061043c57610100808354040283529160200191610467565b820191906000526020600020905b81548152906001019060200180831161044a57829003601f168201915b50505050509050915091509091565b816103d55760405163100960cb60e01b81526004810182905260240160405180910390fd5b8280546104a790610609565b90600052602060002090601f0160209004810192826104c9576000855561050f565b82601f106104e257805160ff191683800117855561050f565b8280016001018555821561050f579182015b8281111561050f5782518255916020019190600101906104f4565b5061051b92915061055c565b5090565b50805461052b90610609565b6000825580601f1061053b575050565b601f016020900490600052602060002090810190610559919061055c565b50565b5b8082111561051b576000815560010161055d565b60006040828403121561058357600080fd5b50919050565b60006040828403121561059b57600080fd5b6105a58383610571565b9392505050565b82815260006020604081840152835180604085015260005b818110156105e0578581018301518582016060015282016105c4565b818111156105f2576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061061d57607f821691505b6020821081141561058357634e487b7160e01b600052602260045260246000fd5b60006040828403121561065057600080fd5b6040516040810181811067ffffffffffffffff8211171561068157634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461069b57600080fd5b81526020928301519281019290925250919050565b813581526040810160208301358015158082146106cc57600080fd5b806020850152505092915050565b813581526040810160208301356001600160c01b031981168082146106cc57600080fdfea26469706673582212202ddf3d6028e5e3a974255da5ae24d624741d018b9452846dfed9401e14b0f00964736f6c63430008090033`,
  BytecodeLen: 2505,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:18:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:24:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:31:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
