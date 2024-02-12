import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("LISTING"),
    items: [
      {
        label: t("BscScan"),
        href: "https://bscscan.com/token/0xD23811058Eb6e7967D9a00dc3886E75610c4AbBa",
      },
      {
        label: t("DappRadar"),
        href: "https://dappradar.com/binance-smart-chain/exchanges/knightswap",
      },
      {
        label: t("CoinGecko"),
        href: "https://www.coingecko.com/en/coins/knightswap",
      },
      {
        label: t("coinmarketcap"),
        href: "https://coinmarketcap.com/currencies/knightswap/",
      },
      {
        label: t("Gecko Terminal"),
        href: "https://www.geckoterminal.com/bsc/knightswap/pools",
      },
    ],
  },
  {
    label: "MORE",
    items: [
      {
        label: t("Github"),
        href: "https://github.com/Knightswap",
      },
      // {
      //   label: t("IWO"),
      //   href: "https://knight-swap-farms-build.pages.dev/iwo",
      // },
      {
        label: t("Lending"),
        href: "https://lending.knightswap.financial/",
      },
      {
        label: t("Castle"),
        href: "https://www.knightcompounder.com/#/bsc",
      },
      {
        label: t("Audit"),
        href: "https://github.com/TechRate/Smart-Contract-Audits/blob/main/November/KnightSwap.pdf",
      },
      {
        label: t("Docs"),
        href: "https://knights.gitbook.io/knightswap/",
      },
      {
        label: t("NFT marketplace"),
        href: "https://www.wizard.financial/marketplace",
      },
      {
        label: t("blog"),
        href: "https://medium.com/knight-bsc-dark-knight-ftm",
      },
      {
        label: t("Partnership"),
        href: "https://docs.google.com/forms/d/e/1FAIpQLSd_8rGEuUBDqtQwNSS7Z1z9k_qtLFLecmHIIkqTZxWoli3jBg/viewform?pli=1",
      },
    ],
  },
  {
    label: t("ANALYTICS"),
    items: [
      {
        label: t("overview"),
        href: "/info",
      },
    ],
  },
  // {
  //   label: t("Support"),
  //   items: [
  //     {
  //       label: t("Contact"),
  //       href: "https://docs.pancakeswap.finance/contact-us/customer-support",
  //     },
  //     {
  //       label: t("Troubleshooting"),
  //       href: "https://docs.pancakeswap.finance/readme/help/troubleshooting",
  //     },
  //     {
  //       label: t("Documentation"),
  //       href: "https://docs.pancakeswap.finance/",
  //     },
  //   ],
  // },
  // {
  //   label: t("About"),
  //   items: [
  //     {
  //       label: t("Terms Of Service"),
  //       href: "https://pancakeswap.finance/terms-of-service",
  //     },
  //     {
  //       label: t("Blog"),
  //       href: "https://blog.pancakeswap.finance/",
  //     },
  //     {
  //       label: t("Brand Assets"),
  //       href: "https://docs.pancakeswap.finance/ecosystem-and-partnerships/brand",
  //     },
  //     {
  //       label: t("Careers"),
  //       href: "https://docs.pancakeswap.finance/team/become-a-chef",
  //     },
  //   ],
  // },
];
