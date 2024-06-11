import { kusama, polkadot, westend } from "@polkadot-api/descriptors";
import { InjectedConnector } from "@reactive-dot/core/wallets.js";
import type { Config } from "@reactive-dot/types";
import { getSmProvider } from "polkadot-api/sm-provider";
import { startFromWorker } from "polkadot-api/smoldot/from-worker";

const createSmoldotWorker = () =>
  new Worker(new URL("polkadot-api/smoldot/worker", import.meta.url), {
    type: "module",
  });

const config: Config = {
  chains: {
    polkadot: {
      descriptor: polkadot,
      provider: getSmProvider(
        import("polkadot-api/chains/polkadot").then(({ chainSpec }) =>
          startFromWorker(createSmoldotWorker()).addChain({ chainSpec }),
        ),
      ),
    },
    kusama: {
      descriptor: kusama,
      provider: getSmProvider(
        import("polkadot-api/chains/ksmcc3").then(({ chainSpec }) =>
          startFromWorker(createSmoldotWorker()).addChain({ chainSpec }),
        ),
      ),
    },
    westend: {
      descriptor: westend,
      provider: getSmProvider(
        import("polkadot-api/chains/westend2").then(({ chainSpec }) =>
          startFromWorker(createSmoldotWorker()).addChain({ chainSpec }),
        ),
      ),
    },
  },
  wallets: [new InjectedConnector()],
};

export default config;
