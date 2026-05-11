import { useState } from "react";
import type { ExperienceType } from "../types/experience";

export default function ExperienceCard({
  company,
  role,
  date,
  location,
  link,
  image,
  front,
  back,
}: ExperienceType) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((current) => !current)}
      className="group relative h-[260px] w-full max-w-[430px] text-left [perspective:1000px]"
      aria-label={`Flip card for ${company}`}
    >
      <div
        className={`relative h-full w-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0 rounded-2xl border border-[#e2ddd4] bg-white p-6 shadow-md [backface-visibility:hidden] transition group-hover:-translate-y-1 group-hover:shadow-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#999]">
                {date}
              </p>

              <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-[#0d0c0a]">
                {company}
              </h3>

              <p className="mt-2 text-sm font-semibold text-[#666]">{role}</p>

              <p className="mt-1 text-xs text-[#999]">{location}</p>
            </div>

            <img
              src={image}
              alt={`${company} logo`}
              className="h-14 w-14 rounded-xl border border-[#e8e3dc] object-contain bg-white p-2"
            />
          </div>

          <ul className="mt-5 space-y-2 text-[13px] leading-5 text-[#555]">
            {front.map((point) => (
              <li key={point} className="font-semibold">
                • {point}
              </li>
            ))}
          </ul>

          <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="text-xs font-semibold text-[#777] hover:text-[#0d0c0a] transition"
            >
              Visit company ↗
            </a>

            <span className="text-xs font-semibold text-[#e05252]">
              Click to flip
            </span>
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl border border-[#e2ddd4] bg-white p-6 shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-xs uppercase tracking-[0.18em] text-[#999]">
            Details
          </p>

          <p className="mt-6 text-sm leading-7 text-[#555]">{back}</p>
        </div>
      </div>
    </button>
  );
}