import { create } from "zustand";
import { persist } from "zustand/middleware";

type PinsStore = {
  pinnedUids: string[];
  addPin: (uid: string) => void;
  removePin: (uid: string) => void;
  isPinned: (uid: string) => boolean;
};

export const usePinsStore = create<PinsStore>()(
  persist(
    (set, get) => ({
      pinnedUids: [],
      addPin: (uid) =>
        set((state) => ({ pinnedUids: [...state.pinnedUids, uid] })),
      removePin: (uid) =>
        set((state) => ({
          pinnedUids: state.pinnedUids.filter((id) => id !== uid),
        })),
      isPinned: (uid) => get().pinnedUids.includes(uid),
    }),
    { name: "pins-storage" }
  )
);
