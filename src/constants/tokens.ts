import { type Chain } from 'viem';

export const TIPSCHAIN: Chain = {
  id: 19251925,
  name: 'Tipschain',
  nativeCurrency: {
    name: 'Tipschain',
    symbol: 'TPC',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://rpc.tipschain.online'] }, // Assuming this RPC
    public: { http: ['https://rpc.tipschain.online'] },
  },
  blockExplorers: {
    default: { name: 'Tipschain Explorer', url: 'https://scan.tipschain.online' },
  },
};

export const TOKENS = [
  {
    symbol: 'TPC',
    name: 'Tipschain',
    decimals: 18,
    address: '0x0000000000000000000000000000000000000000', // Native
    logo: 'https://picsum.photos/seed/tpc-gold/200/200',
  },
  {
    symbol: 'wTPC',
    name: 'Wrapped Tipschain',
    decimals: 18,
    address: '0x1234...wTPC', // Placeholder
    logo: 'https://picsum.photos/seed/wtpc-purple/200/200',
  },
  {
    symbol: 'USDTC',
    name: 'USDTips',
    decimals: 18,
    address: '0x1234...USDTC', // Placeholder
    logo: 'https://picsum.photos/seed/usdtc-blue/200/200',
  },
  {
    symbol: 'USDT',
    name: 'Tether',
    decimals: 6,
    address: '0x1234...USDT', // Placeholder
    logo: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530a35180634666687063435472855f4c51e/128/color/usdt.png',
  },
];

export const LINKS = {
  explorer: 'https://scan.tipschain.online',
  wallet: 'https://wallet.tipspay.org',
  dex: 'https://dex.tipspay.org',
};
