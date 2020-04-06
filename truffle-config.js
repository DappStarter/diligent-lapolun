require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember method idea kiwi bubble switch'; 
let testAccounts = [
"0xd5ed1aed37c8df8b1bfb88329c5d081d2f81e513d96b4b1841debfa857498638",
"0xe88d5f0a1a6eca2b4ae9a03479f9df0dc7f9a410958fe80bec1d059628ebcf0f",
"0x490a868cd241e42711d9740a7dbbf2fd1598fae61b2788971757e03d6ba60675",
"0x8f3e6233f4d51b61d8480815b77b3d40e2edbf5769f92d22b09358e9306c0660",
"0xccc633e5b64b56b0c0b6560c01fbd3c3ad5f4eae4c7c28b01878ba295102e4b2",
"0xf941201710ee0c849d676bb7a4969e633f4b2ef21ef688218cc53bd58aac2988",
"0x65916595de2f36047cfad7ca7ed7ac9147bbe0e00e004f92d7d564437960d797",
"0x1199bd0da5d3062b50ffd80b3513b943f8637164e002f64b213b90c2c9ea2f66",
"0x75e21330f60064c7334322bb4f6c839f37c92a744683ae59ab39b3eadcccdeaf",
"0xee62369c5395f184d791c3bcfe8a4d3fcfe221bd64db7d4b0857a24c3fffb8d1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
