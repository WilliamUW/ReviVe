import type { Token } from "./types";

type Props = {
  onChange: (token: Token | undefined) => void;
};
export const tokens = [
  {
    name: "VeThor",
    symbol: "VTHO",
    price: 0.002338,
    decimals: 18,
    address: "0x0000000000000000000000000000456e65726779",
    desc: "Represents the underlying cost of using VeChainThor",
    icon: "3ac553ea77911248ab4519bca020e0aa2891a6c6.png",
    totalSupply: "Infinite",
    website: "https://www.vechain.org/",
    whitePaper: "https://www.vechain.org/whitepaper/",
    links: [
      {
        twitter: "https://twitter.com/vechaindev",
      },
      {
        medium: "https://medium.com/@vechainofficial",
      },
      {
        github: "https://github.com/vechain",
      },
    ],
  },
  {
    name: "B3TR",
    symbol: "B3TR",
    price: 0.16630,
    decimals: 18,
    address: "0xac0ca2a5148e15ef913f9f5cf8eb3cf763f5a43f",
    desc: "The official utility token in the VeBetterDAO",
    icon: "3d55edb42b09a634f7f2f26756a02571de901a5b.png",
    totalSupply: "3749999999999999999999955",
  },
  {
    name: "Plair",
    symbol: "PLA",
    price: 0.00000565,
    decimals: 18,
    address: "0x645d2019ed39e58db76af602317d177b53ba8b9d",
    desc: "Plair is a decentralized gaming ecosystem disrupting the amateur gaming market",
    icon: "dfe7a792d85cfd1483b03228fd1d51a383a3c7b5.png",
    totalSupply: "100000000000000000000000000000",
  },
  {
    name: "Eight Hours Token",
    symbol: "EHrT",
    price: 0.0000027265,
    decimals: 18,
    address: "0xdeff1d52f3fbf551b3337b9a02f719cd21da956b",
    desc: "Utility token for the 8Hours Platform",
    icon: "aa05eb7852852116d54f3ad32d856353584710e2.png",
    totalSupply: "9952334875149999999985315810",
  },
  {
    name: "Decent.bet Token",
    symbol: "DBET",
    price: 0.000336,
    decimals: 18,
    address: "0x510fcddc9424b1bbb328a574f45bfddb130e1f03",
    desc: "DECENT.bet is an open-source p2p gaming platform built on the VeChain blockchain",
    icon: "39cb9bcb279706b3ae09a8cc633bfca500cef5a3.png",
    totalSupply: "205903294831970956466297922",
  },
  {
    name: "OceanEx Token",
    symbol: "OCE",
    price: 0.000199,
    decimals: 18,
    address: "0x9652aead889e8df7b5717ed984f147c132f85a69",
    desc: "OceanEx Token (OCE) is OceanEx's platform token",
    icon: "6fcdaf9e2663a21aecc7518f78ec6d1b2ebfd1ed.png",
    totalSupply: "10000000000000000000000000000",
  },
  {
    name: "Jur",
    symbol: "JUR",
    price: 0.006347,
    decimals: 18,
    address: "0x602b7a4309b3412d269c6cdddad962c0b94494d8",
    desc: "JUR Token is the token of justice. Access a decentralized legal ecosystem for professionals and enterprises.",
    icon: "56e4bd509c299b4724f6dfc58237bd57ad7e1b58.png",
    totalSupply: "1000000000000000001000000000",
  },
  {
    name: "Yeet Coin",
    symbol: "YEET",
    price: 0.00047,
    decimals: 18,
    address: "0x32456c328f647f5b35757d38fe634868d9fe3808",
    desc: "Alpaca memes",
    icon: "2e434b45fdbf3ea1d2676d3270ad8877221aefd1.png",
    totalSupply: "69000000000000000000000000",
  },
  {
    name: "SneakerCoin",
    symbol: "SNK",
    price: 0.01,
    decimals: 18,
    address: "0xe0d0402a948ab02af08938dad2a79669bdbe1c31",
    desc: "A crypto asset that belongs to all young people around the world.",
    icon: "e352c4d1e1343614b49d7f711075c7c8aec53b08.png",
    totalSupply: "2000000000000000000000000000",
  },
  {
    name: "SHAToken",
    symbol: "SHA",
    price: 0.00023543,
    decimals: 18,
    address: "0xa1bcfa20a82eca70a5af5420b11bc53a279024ec",
    desc: "Asset Management & Inheritance Solutions",
    icon: "735a5e4a70116463649aa9c508b5d18361f10ab7.png",
    totalSupply: "8500000000000000000000000000",
  },
  {
    name: "Madini",
    symbol: "MDN",
    price: 0.01,
    decimals: 18,
    address: "0x4c76f2c483e0ec292c06d0a0d1440717ed0787c0",
    desc: "MDN is the Madini VeChain Vip180 token that is used to carry value or 'smart money' from Madini smart contracts. In other words, transactions on decentralized applications occurring on Madini VeChain's blockchain will use MDN. It is available for investing by the general public. MDN token is the Madini utility token in our Ecosystem since it is linked to the Madini Minerals Marketplace, to the Madini VeChain Wallet - Android APP - and other Madini VeChain dApps.",
    icon: "4bad919e2ba460940b3ac5f5a94394964303bb86.png",
    totalSupply: "100000000000000000000000000",
    website: "https://www.madiniafricainvest.com/",
    whitePaper:
      "https://www.madiniafricainvest.com/whitepaper/MadiniWhitepaper112020.pdf",
    links: [
      {
        github: "https://github.com/Bluegate-BS",
      },
    ],
  },
  {
    name: "VEED",
    symbol: "VEED",
    price: 0.0001227,
    decimals: 18,
    address: "0xa39a4b2e23220305083e2e7c94c8950ef1e641c6",
    desc: "VEED is the ecosystem utility and governance token of VIMworld, a Smart NFT project built on VeChainThor focused on VIM collectibles. The VEED token is used for a variety of utilities within the VIMworld Ecosystem, including VIM feeding, trading, adoption, farming, rewards, governance, and more.",
    icon: "1d9b0e0c19a85eb860fd2f1d244026f2e2c8f799.png",
    totalSupply: "99999989918000000000000000000",
    website: "https://www.vimworld.com/",
    whitePaper: "https://www.vimworld.com/ppp/english.pdf",
    links: [
      {
        twitter: "https://twitter.com/VIMworldGlobal",
      },
      {
        telegram: "https://t.me/VIMworld",
      },
      {
        facebook: "https://www.facebook.com/VIMworldOfficial/",
      },
      {
        medium: "https://vimworld.medium.com/",
      },
    ],
  },
  {
    name: "Mad Viking Games",
    symbol: "MVG",
    price: 0.0005639,
    decimals: 18,
    address: "0x6e32a40481dc95c7495b48ee81e3d388a0f0eb77",
    desc: "MVG is the ecosystem utility token of the MVG platform, games and marketplace",
    icon: "aa1a4cae47690ccd8a848e2bed5560606d90dd98.png",
    totalSupply: "100000000000000000000000000000",
    website: "https://madvikinggames.com/",
    whitePaper: "https://www.madvikinggames.com/Litepaper/",
    links: [
      {
        twitter: "https://twitter.com/MadVikingGames",
      },
      {
        telegram: "https://t.me/MadVikingGames",
      },
      {
        medium: "https://medium.com/@MadVikingGames",
      },
    ],
  },
  {
    name: "GEMS",
    symbol: "GEMS",
    price: 0.04954,
    decimals: 18,
    address: "0x7b12cdd6dc20bac5a7c85924e4d29f84a3bc376f",
    desc: "The governance token of the Mad Viking Games platform and marketplace",
    icon: "a4c5cf35736eb5a6e8cd974b9a9a72d65355451c.png",
    totalSupply: "100000000000000000000000000000",
    website: "https://www.madvikinggames.com/",
    whitePaper: "https://www.madvikinggames.com/Litepaper",
    links: [
      {
        twitter: "https://twitter.com/MadVikingGames",
      },
      {
        telegram: "https://t.me/MadVikingGames",
      },
      {
        medium: "https://medium.com/@MadVikingGames",
      },
    ],
  },
  {
    name: "VeUSD",
    symbol: "VEUSD",
    price: 1.01,
    decimals: 6,
    address: "0x033bbc923a9378600c6b52fa9aada608c4cc7ece",
    desc: "US Dollar-pegged stablecoin fully backed 1-to-1 and redeemable for USD held in a trust account managed by Prime Trust and powered by Stably",
    icon: "6264aec1716bb13dc8f0d4044d3e986678c553f0.png",
    totalSupply: "1131324900291",
  },
  {
    name: "TestViracoins",
    symbol: "TVIRC",
    price: 0.000003,
    decimals: 18,
    address: "0xf276fbde42c9eb4f9c4e1828cb7cd2383fd7ba27",
    desc: "TestViracoins will be the test currency in Viracles city.",
    icon: "3d42c34be7c835dce643f80109b1371454b84a54.png",
    totalSupply: "40",
    website: "https://infinityviracles.com/",
    links: [
      {
        twitter: "https://twitter.com/ViraclesNFT",
      },
    ],
  },
  {
    name: "Veiled VET",
    symbol: "VVET",
    price: 0.02611,
    decimals: 18,
    address: "0x86fb5343bbecffc86185c023a2a6ccc76fc0afd8",
    desc: "Wrapper VET VIP-180 token (VIP-180) that 1:1 pegs VET. Audit report provided by PeckShield.",
    icon: "b58186aeabfc3dabd3938f2b3a795623c8520d46.png",
    totalSupply: "85890457369441330722979",
    links: [
      {
        github: "https://github.com/VeChainDEXCode/vvet",
      },
    ],
  },
  {
    name: "UNION",
    symbol: "UNION",
    price: 0.01,
    decimals: 18,
    address: "0xea283edcfdb17a8a7537f8a6a84c4bd1c21d608d",
    desc: "Utility token for NoNerdsInc",
    icon: "df3b96461583b07ec89df7f3cfdec0ecfe45af8d.png",
    totalSupply: "7500000000000000000000000",
    website: "https://www.nonerdsinc.com/",
    whitePaper: "https://nonerdsinc.com/roadmap",
    links: [
      {
        twitter: "https://twitter.com/NoNerdsInc",
      },
    ],
  },
  {
    name: "VeStacks",
    symbol: "VST",
    price: 0.01,
    decimals: 18,
    address: "0x737a9a0022f515983b0a6415b9525c3e5a443e2f",
    desc: "The main currency used in Thugs Paradise. VeThugs P2E Game. Will later be integrated in BlackVMarket & Used for Future related BlackVeMarket Mints",
    icon: "2f5919e522157770ab6432962d998e9fbe47e9a6.png",
    totalSupply: "1500000000000000000000000000",
    website: "https://www.VeThugs.com/",
    links: [
      {
        twitter: "https://twitter.com/VeThugs",
      },
      {
        github: "https://github.com/Murtagh300",
      },
    ],
  },
  {
    name: "Paper Token",
    symbol: "PPR",
    price: 0.01,
    decimals: 18,
    address: "0x947112fe4e2a71a3e37cdf41733d5a570df3ddaa",
    desc: "Utility token for the NFT Paper Project to interact with burning smart contracts",
    icon: "68bbb7c1b2aa8f1a0a4b0b017686e2fd454cc13e.png",
    totalSupply: "420000000000000000000000",
  },
  {
    name: "Dragon Coin",
    symbol: "DRAGON",
    price: 0.000000000001583,
    decimals: 18,
    address: "0x98ceed8ee645c2d964cc0dd4342c832d52aeeb13",
    desc: "The main currency used For Staking and evolving your Dragon egg. Dragons of Singapura. Will also be used for future nft drops within Singapura",
    icon: "ad59df7e6b8b7148db2e40e0c22cc530cd9dfefa.png",
    totalSupply: "25000000000000000000000000",
    website: "https://www.DragonsofSingapura.com/",
    links: [
      {
        twitter: "https://twitter.com/Dragonsingapura",
      },
      {
        github: "https://github.com/Murtagh300",
      },
    ],
  },
  {
    name: "VPunks Token",
    symbol: "VPU",
    price: 0.00773,
    decimals: 18,
    address: "0x8c1d95e96b69941b1b81145d2f2a100e7d259880",
    desc: "VPU is the ecosystem utility and governance token of VPunks NFT & VPunks marketplace",
    icon: "333ad4a9c829a98ec78e4e687bb48a665be314eb.png",
    totalSupply: "121000000000000000000005000",
    website: "https://vpunks.com/",
    links: [
      {
        twitter: "https://twitter.com/vpunksofficial",
      },
      {
        telegram: "https://t.me/vpunks",
      },
      {
        github: "https://github.com/vefam-labs/vpunks",
      },
    ],
  },
  {
    name: "VeSea",
    symbol: "VSEA",
    price: 0.00655,
    decimals: 18,
    address: "0x776b68c9f217385b0a4657296f6bf6c4b2600557",
    desc: "The fuel powering VeSea's NFT Utility Ecosystem, designed to be destroyed by VeSea-deployed smartcontracts providing usage to various VIP-181 tokens",
    icon: "47eed6b5ea59d255140603b2ddb41ff2fc64d214.png",
    totalSupply: "70894966575229982327635",
  },
  {
    name: "BananaCoin",
    symbol: "BANANA",
    price: 0.00000000000009112,
    decimals: 18,
    address: "0xca92f3d24c3f04c3ab7711f5a8981b48900d1baf",
    desc: "MemeCoin, GG Gangster Gorillas no roadmap, no utility Lots of potential.",
    icon: "b74678c3e1d0cbdd76c81579f6d2b551c4704811.png",
    totalSupply: "5000000000000000000000000",
    links: [
      {
        twitter: "https://twitter.com/GangGorillaz/",
      },
    ],
  },
  {
    name: "LEGACY TOKEN",
    symbol: "LGCT",
    price: 0.01,
    decimals: 18,
    address: "0xcd06d669e2ee5d2da9906f121818a7331e23fba2",
    desc: "The Legacy Network token (LGCT) is a multichain utility and payment token which allows its holders to get the best out of the Legacy Network ecosystem. LGCT is available on VeChain, Ethereum, Binance smart chain and Polygon.",
    icon: "5aa5de380d05183de6fc11fa3cdde8f46fbe5b09.png",
    totalSupply: "720000000000000000000000000",
    website: "https://www.legacynetwork.io",
    whitePaper: "https://www.legacynetwork.io/pdf/WP-Eng.pdf",
    links: [
      {
        twitter: "https://twitter.com/LegacyNetworkio",
      },
      {
        telegram: "https://t.me/LegacyNetworkAnnouncements",
      },
      {
        github: "https://github.com/LegacyNetworkAG",
      },
    ],
  },
  {
    name: "VFoxToken",
    symbol: "VFA",
    price: 0.01,
    decimals: 18,
    address: "0xd625f35dfcb0ecdb83dc6d71e33c8d53b825fc48",
    desc: "Utility token of the VFox Alliance ecosystem",
    icon: "3265906190851c0d19bf6057325902adafecd076.png",
    totalSupply: "218460798899000000479488",
    website: "https://vfox-alliance.com/",
    whitePaper: "https://medium.com/@vfox.alphice/tokenomics-vfa-f3ab4c4f0cf7",
    links: [
      {
        twitter: "https://twitter.com/VFoxAllianceNFT",
      },
    ],
  },
  {
    name: "MVA Token",
    symbol: "MVA",
    price: 0.00699,
    decimals: 18,
    address: "0x307bd9ebe9b8f1baa59731f18aecc999e8b33dea",
    desc: "MVA is a utility and governance token for the MadⓥApes Ecosystem",
    icon: "97d999107b6e9f5dcb1422bf5118758dbc9e354f.png",
    totalSupply: "0",
    website: "https://mvanft.io/",
    links: [
      {
        twitter: "https://twitter.com/madvapesnft",
      },
    ],
  },
  {
    name: "Squirtle Squad",
    symbol: "SQUAD",
    price: 0.002850,
    decimals: 18,
    address: "0xcb384a3a82bfe0619963d65a05f3801ddc23f3cc",
    desc: "VeChains finest Meme Coin, Powering Turtle Labs a DeFi Platform.",
    icon: "100525d2a1fccf66732e0b518d10be34ffd20364.png",
    totalSupply: "0",
    links: [
      {
        twitter: "https://twitter.com/SquadVeChain",
      },
    ],
  },
  {
    name: "ThreeDAbleToken",
    symbol: "3DT",
    price: 0.000000000777,
    decimals: 18,
    address: "0xa258e1a871f10cccf6330bfa06366d929ea26b46",
    desc: "Utility token for 3DAbles platform",
    icon: "07f26d41581c62729b26ac2cb0a679a18b08f43e.png",
    totalSupply: "276000000000000000000",
    website: "https://3dables.smuzzies.com/",
    links: [
      {
        twitter: "https://twitter.com/Smuzzies_NFT",
      },
    ],
  },
  {
    name: "Black Ve Coin",
    symbol: "BVC",
    price: 0.00000311,
    decimals: 18,
    address: "0x441ce74a5d456e3b262fc3d9f3b2c359f7d77016",
    desc: "The fuel powering BlackVeMarket NFT Utility Ecosystem",
    icon: "da05a81e4da6c2613cf7e19a1b14fd2c8f780ebe.png",
    totalSupply: "100000000000000000000000000",
    website: "https://www.blackvemarket.com/",
    links: [
      {
        twitter: "https://twitter.com/BlackVeMarket",
      },
      {
        github: "https://github.com/Murtagh300",
      },
    ],
  },
  {
    name: "MILK",
    symbol: "MILK",
    price: 0.0000158,
    decimals: 18,
    address: "0xbfbb567e5d734cffe510ab23d08f6c46f990c909",
    desc: "Utility token of the GOATZ NFT project",
    icon: "af9add60ca7b837aa5eac05377a3c9076cbad86a.png",
    totalSupply: "0",
  },
  {
    name: "GCRED Token",
    symbol: "GCRED",
    price: 0.01,
    decimals: 18,
    address: "0x810def6605aef9436059a60eda1382367966e9de",
    desc: "The Galactic Credit is the main currency of the ExoWorlds metaverse. Whether buying, upgrading, forging or enchanting, users will need GCRED if they want to unlock the full potential of ExoWorlds.",
    icon: "98186349ee2d2850786c305f64b1053aa849ca1d.png",
    totalSupply: "15080560200000000100000",
    website: "https://www.exoworlds.io",
    whitePaper: "https://exoworlds.gitbook.io/exoworlds-whitepaper/",
    links: [
      {
        twitter: "https://twitter.com/ExoWorldsNFT",
      },
      {
        medium: "https://medium.com/@ExoWorlds",
      },
    ],
  },
  {
    name: "BANGZ",
    symbol: "BANGZ",
    price: 0.01,
    decimals: 18,
    address: "0xd105d3d218d36490590b474689b95dbe3bded6b7",
    desc: "Bangz token for Bangzboard stacking, rewards and BangzMarket",
    icon: "2b2ce9d01f9819500698e25d438db7ff691b95a1.png",
    totalSupply: "0",
    links: [
      {
        twitter: "https://twitter.com/BangzBoard",
      },
      {
        github: "https://github.com/JohanT-BadsM",
      },
    ],
  },
  {
    name: "VOT3",
    symbol: "VOT3",
    price: 0.01,
    decimals: 18,
    address: "0x9df69ad8ff89063869e04164a11579c0a8532e84",
    desc: "Tokens representing voting power in the VeBetterDAO",
    icon: "17ff70aa1d898bc97ad690dbfad1a3b5643f7e0b.png",
    totalSupply: "1263427679490943321921573",
  },
  {
    name: "Cup of Joe",
    symbol: "COJ",
    price: 0.000007804,
    decimals: 18,
    address: "0x922a46bb49fe98ff73482a3ea8a6dd0a2c7c443a",
    desc: "AI Generated Memecoin | Coffee Connoisseur Contributing to an Eco-Friendly Coffee ☕️Environment Worldwide 🌎 +Send / Receive a Cup of Joe ☕️ Worldwide 🌎",
    icon: "16a45897fd449a8a8e401809ac85ad4d0953a0cf.png",
    totalSupply: "0",
    links: [
      {
        twitter: "https://twitter.com/cojcoin",
      },
    ],
  },
];
export default function SelectToken({ onChange }: Props) {
  // fetch the token registry, to display a list of tokens
  const tokenRegistry = { data: tokens };

  // when a token is selected, call the onChange function with the selected token
  const handleSelectToken = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!tokenRegistry.data || !event.target.value) {
      return onChange(undefined);
    }
    onChange(
      tokenRegistry.data.find((token) => token.address === event.target.value)
    );
  };


  return (
    <>
      <select
        name="token"
        id="token"
        onChange={handleSelectToken}
        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 mr-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
      >
        <option value="">VET</option>
        {tokenRegistry.data?.map((token) => (
          <option key={token.address} value={token.address}>
            {token.symbol}
          </option>
        ))}
      </select>
    </>
  );
}
