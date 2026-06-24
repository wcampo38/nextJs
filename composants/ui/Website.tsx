"use client";

import { WebsiteDocument } from "@/prismicio-types";
import { usePinsStore } from "@/store/usePinsStore";
import Image from "next/image";
import Link from "next/link";

export default function Website({
  website: {
    uid,
    data: { title, img },
  },
}: {
  website: WebsiteDocument;
}) {
  const { addPin, removePin, isPinned } = usePinsStore();
  const pinned = isPinned(uid);

  return (
    <div className="relative">
      <Link href={`websites/${uid}`}>
        {img.url && (
          <Image
            src={img.url}
            alt={img.alt || `Image ${title}`}
            width={img.dimensions?.width || 900}
            height={img.dimensions?.height || 600}
            className="rounded-lg"
          />
        )}
        <h3 className="mt-4">{title}</h3>
      </Link>
      <button
        onClick={() => (pinned ? removePin(uid) : addPin(uid))}
        aria-label={pinned ? "Retirer des pins" : "Ajouter aux pins"}
        className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-full bg-white/80 hover:bg-white transition"
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: pinned ? "'FILL' 1" : "'FILL' 0" }}
        >
          keep
        </span>
      </button>
    </div>
  );
}
