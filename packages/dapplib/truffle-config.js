require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remain smile grid clog obscure giggle'; 
let testAccounts = [
"0x397698bb55b380dc8c60c3a90a449120a5b589236af9a748752f400a7e05c895",
"0x53e0ffabf9c5a20b02b596a9c041fddbe5b3a999e8c9f62eaf5a371495bb3283",
"0xc1eb11700f07349021883b3881ceae0a68b828c85a55ee774a73cb1285cd8dcd",
"0x04145e39137ab926a6f37d99c5bd3534967cc8a1021a31d3cee46f79b23a09d5",
"0x845e4b9dfeae17edc9abd8e46413e0a2ef60d597400e3aa3bb02bed1253346db",
"0x640b6c25622c93200e570f9a4d0f619d1bd958eac7a1b00d7c55eefa34b7d8a8",
"0xd2c39f318f09061dede88bd3051739d2714ea420cb8a79d88f9d3bb89366d38f",
"0xc3743bd7258942e638a0cf36376e159b04f4a6081feddc34874cd3f2bab561d1",
"0x022e3eb911819134cae7846b852e5309b8ee819bc340f516f08c719a353aa738",
"0x1f99902a4a757b1d0d582a3921ab1c520a8dcc72606b324c9791d0d97de2342f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

