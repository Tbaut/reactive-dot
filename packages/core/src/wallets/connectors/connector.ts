import type Wallet from "../wallet.js";
import type { Connector as IConnector } from "@reactive-dot/types";
import type { Observable } from "rxjs";

export default abstract class Connector implements IConnector {
  abstract readonly scan: () => Wallet[] | Promise<Wallet[]>;
  abstract readonly wallets$: Observable<Wallet[]>;
  abstract readonly getWallets: () => Wallet[] | Promise<Wallet[]>;
}
