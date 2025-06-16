import { create } from 'zustand';

export type State = {
  partyCode: string | undefined,
  setPartyCode: (partyCode: string | undefined) => void,
}
const useBearStore = create<State>((set) => ({
  partyCode: undefined,
  setPartyCode: (partyCode: string | undefined) => set({ partyCode })
}));

export default useBearStore;