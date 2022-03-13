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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  
  
  const v59 = stdlib.protect(ctc0, interact.info, 'for Alice\'s interact field info');
  const v60 = stdlib.protect(ctc1, interact.request, 'for Alice\'s interact field request');
  
  const v63 = stdlib.lt(v60, stdlib.checkedBigNumberify('./index.rsh:13:27:decimal', stdlib.UInt_max, 100));
  stdlib.assert(v63, {
    at: './index.rsh:13:19:application',
    fs: ['at ./index.rsh:11:19:application call to [unknown function] (defined at: ./index.rsh:11:22:function exp)'],
    msg: null,
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v60],
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
      
      
      const {data: [v65], secs: v67, time: v66, didSend: v29, from: v64 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:15:15:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v65], secs: v67, time: v66, didSend: v29, from: v64 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v72, time: v71, didSend: v38, from: v70 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v64, v65, v59],
    evt_cnt: 1,
    funcNum: 2,
    lct: v71,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:29:15:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v78], secs: v80, time: v79, didSend: v47, from: v77 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:29:15:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v81 = stdlib.addressEq(v64, v77);
      stdlib.assert(v81, {
        at: './index.rsh:29:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      sim_r.txns.push({
        amt: v65,
        kind: 'from',
        to: v64,
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
  const {data: [v78], secs: v80, time: v79, didSend: v47, from: v77 } = txn3;
  ;
  const v81 = stdlib.addressEq(v64, v77);
  stdlib.assert(v81, {
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
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v65], secs: v67, time: v66, didSend: v29, from: v64 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.want(v65), {
    at: './index.rsh:21:26:application',
    fs: ['at ./index.rsh:20:17:application call to [unknown function] (defined at: ./index.rsh:20:21:function exp)'],
    msg: 'want',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v64, v65],
    evt_cnt: 0,
    funcNum: 1,
    lct: v66,
    onlyIf: true,
    out_tys: [],
    pay: [v65, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v72, time: v71, didSend: v38, from: v70 } = txn2;
      
      sim_r.txns.push({
        amt: v65,
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
  const {data: [], secs: v72, time: v71, didSend: v38, from: v70 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc2],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v78], secs: v80, time: v79, didSend: v47, from: v77 } = txn3;
  ;
  const v81 = stdlib.addressEq(v64, v77);
  stdlib.assert(v81, {
    at: './index.rsh:29:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  ;
  stdlib.protect(ctc1, await interact.got(v78), {
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
  appApproval: `BSAEAAECICYCAQAAIjUAMRhBAYspZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgEXNhoCFzUENhoDNQVJIwxAANBJJAxAAGEkEkQkNAESRDQESSISTDQCEhFEKGRJNQNXACA1/zQFNf6ABJrQfs00/lCwNP8xABJENAMlW0lBAAyxsggjshA0/7IHsyJIIrGyCCOyEDIJsgkyCrIHsyJIMRmBBRJEQgDNSCM0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/NAMlWzX+gASai5F0sDT+SUEAHTQASSMINQBMSwE4CBJEI0sBOBASRDIKSwE4BxJESDT/NP4WUChLAVcAKGdIJDUBMgY1AjEZIhJEQgBkSCI0ARJENARJIhJMNAISEUQ0BRc1/4AEgsRh/jT/FlCwgaCNBklBAB00AEkjCDUATEsBOAgSRCNLATgQEkQyCksBOAcSREgxADT/FlAoSwFXAChnSCM1ATIGNQIxGSISREIAACk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEIjUBIjUCQv/L`,
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
                "name": "v65",
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
                "name": "v65",
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
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T5",
                "name": "v78",
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
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T5",
                "name": "v78",
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
  Bytecode: `0x608060405260405161099838038061099883398101604081905261002291610199565b6000805543600355604080518251815260208084015151908201527fd2fa1fac07e66d08cb46271d2f3a2585d9761d2d591a51cc30a2056942bc38db910160405180910390a1610074341560076100d7565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100cf9260029290910190610100565b505050610272565b816100fc5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461010c90610237565b90600052602060002090601f01602090048101928261012e5760008555610174565b82601f1061014757805160ff1916838001178555610174565b82800160010185558215610174579182015b82811115610174578251825591602001919060010190610159565b50610180929150610184565b5090565b5b808211156101805760008155600101610185565b60008183036040808212156101ad57600080fd5b80518082016001600160401b0380821183831017156101dc57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101f557600080fd5b83519450602085019150848210818311171561022157634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061024b57607f821691505b6020821081141561026c57634e487b7160e01b600052602260045260246000fd5b50919050565b610717806102816000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780632c10a15914610078578063832307571461008b578063ab53f2c6146100a0578063e82cd9a4146100c357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b610052610086366004610590565b6100d6565b34801561009757600080fd5b50600154610065565b3480156100ac57600080fd5b506100b5610257565b60405161006f9291906105b3565b6100526100d1366004610590565b6102f4565b6100e6600160005414600961047d565b610100813515806100f957506001548235145b600a61047d565b60008080556002805461011290610610565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610610565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610645565b90507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516101d491906106b7565b60405180910390a16101ed81602001513414600861047d565b6040805180820182526000808252602080830182815285516001600160a01b031680855286830151825260029384905543600155855180840191909152905181860152845180820386018152606090910190945283519293610251939101906104a2565b50505050565b60006060600054600280805461026c90610610565b80601f016020809104026020016040519081016040528092919081815260200182805461029890610610565b80156102e55780601f106102ba576101008083540402835291602001916102e5565b820191906000526020600020905b8154815290600101906020018083116102c857829003601f168201915b50505050509050915091509091565b610304600260005414600d61047d565b61031e8135158061031757506001548235145b600e61047d565b60008080556002805461033090610610565b80601f016020809104026020016040519081016040528092919081815260200182805461035c90610610565b80156103a95780601f1061037e576101008083540402835291602001916103a9565b820191906000526020600020905b81548152906001019060200180831161038c57829003601f168201915b50505050508060200190518101906103c19190610645565b6040805184358152602080860135908201529192507fee2f502a284c91caf73aff2ba96d98574d8a5c5c748e7f86fd4853b9a4b19531910160405180910390a161040d3415600b61047d565b8051610425906001600160a01b03163314600c61047d565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610462573d6000803e3d6000fd5b506000808055600181905561047990600290610526565b5050565b816104795760405163100960cb60e01b81526004810182905260240160405180910390fd5b8280546104ae90610610565b90600052602060002090601f0160209004810192826104d05760008555610516565b82601f106104e957805160ff1916838001178555610516565b82800160010185558215610516579182015b828111156105165782518255916020019190600101906104fb565b50610522929150610563565b5090565b50805461053290610610565b6000825580601f10610542575050565b601f0160209004906000526020600020908101906105609190610563565b50565b5b808211156105225760008155600101610564565b60006040828403121561058a57600080fd5b50919050565b6000604082840312156105a257600080fd5b6105ac8383610578565b9392505050565b82815260006020604081840152835180604085015260005b818110156105e7578581018301518582016060015282016105cb565b818111156105f9576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061062457607f821691505b6020821081141561058a57634e487b7160e01b600052602260045260246000fd5b60006040828403121561065757600080fd5b6040516040810181811067ffffffffffffffff8211171561068857634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146106a257600080fd5b81526020928301519281019290925250919050565b813581526040810160208301358015158082146106d357600080fd5b80602085015250509291505056fea26469706673582212203dbde0f2c28bf9b92bd20886da1a408b6da414b3a9bba5c62619fbbf14f7a10064736f6c63430008090033`,
  BytecodeLen: 2456,
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
