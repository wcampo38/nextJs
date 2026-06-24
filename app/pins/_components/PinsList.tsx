"use client";

import Website from "@/composants/ui/Website";
import { usePinsStore } from "@/store/usePinsStore";
import { WebsiteDocument } from "@/prismicio-types";

type PinsListProps = {
  websites: WebsiteDocument[];
};

export default function PinsList({ websites }: PinsListProps) {
  const pinnedUids = usePinsStore((state) => state.pinnedUids);
  const pinnedWebsites = websites.filter((w) => pinnedUids.includes(w.uid));

  if (pinnedWebsites.length === 0) {
    return (
      <p className="pt-12 text-center text-gray-500">
        Aucun site épinglé pour le moment.
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 pt-12">
      {pinnedWebsites.map((w, i) => (
        <Website key={`pin-${i}`} website={w} />
      ))}
    </div>
  );
}
