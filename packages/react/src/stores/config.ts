import type { ChainConfig, ChainId } from "@reactive-dot/types";
import { atom } from "jotai";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const chainConfigsAtom = atom<Record<ChainId, ChainConfig>>({} as any);
