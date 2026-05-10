import { useState } from "react";
import type { ExperienceType } from "../types/experience";

export default function ExperienceCard({
  company,
  role,
  date,
  location,
  companyUrl,
  logo,
  points,
  back,
}: ExperienceType) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((current) => !current)}
      className="group relative h-[270px] w-[430px] md:w-[470px] text-left [perspective:1000px]"
      aria-label={`Flip card for ${company}`}
    >
      <div
        className={`relative h-full w-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0 rounded-2xl border border-[#e2ddd4] bg-white p-6 shadow-md [backface-visibility:hidden] transition group-hover:-translate-y-1 group-hover:shadow-xl">
          <div className="flex items-start justify-between gap-5">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.18em] text-[#999]">
                {date}
              </p>

              <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-[#0d0c0a]">
                {company}
              </h3>

              <p className="mt-2 text-sm font-semibold text-[#666]">{role}</p>

              <p className="mt-2 text-xs font-medium text-[#999]">
                📍 {location}
              </p>
            </div>

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-[#e8e3dc] bg-[#f5f3ef] p-2">
              <img
                src={logo}
                alt={`${company} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          <ul className="mt-5 space-y-2">
            {points.map((point) => (
              <li
                key={point}
                className="flex gap-2 text-sm font-semibold leading-6 text-[#444]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e05252]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between gap-3">
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="rounded-full border border-[#e2ddd4] bg-[#f5f3ef] px-3 py-1 text-[11px] font-semibold text-[#555] transition hover:bg-white hover:text-[#0d0c0a]"
            >
              🔗 Company
            </a>

            <span className="rounded-full bg-[#151513] px-3 py-1 text-[11px] font-medium text-white shadow-sm transition group-hover:bg-[#333]">
              Click to flip
            </span>
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl border border-[#e2ddd4] bg-white p-6 text-[#0d0c0a] shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[#999]">
              Details
            </p>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#e8e3dc] bg-[#f5f3ef] p-2">
              <img
                src={logo}
                alt={`${company} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          <p className="mt-7 text-sm font-medium leading-7 text-[#444]">
            {back}
          </p>
        </div>
      </div>
    </button>
  );
}