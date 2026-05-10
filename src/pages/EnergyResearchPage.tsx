import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const stats = [
  {
    label: "Average Energy Reduction",
    value: "54.8%",
    detail: "Relative to O0 baseline",
  },
  {
    label: "Best Result",
    value: "GEMM -82.8%",
    detail: "O3 estimated energy reduction",
  },
  {
    label: "Benchmarks",
    value: "4 Kernels",
    detail: "2mm, 3mm, gemm, corr",
  },
  {
    label: "Platform",
    value: "Raspberry Pi 5",
    detail: "PMIC-based power readings",
  },
];

const frameworkSteps = [
  {
    title: "Compile",
    body:
      "PolyBench/C kernels were compiled with LLVM/Clang using O0, O2, O3, and O3_no_vec optimisation variants.",
  },
  {
    title: "Execute",
    body:
      "A Python controller ran each benchmark configuration under controlled conditions with repeated measurements.",
  },
  {
    title: "Log Power",
    body:
      "A logging script collected Raspberry Pi 5 PMIC voltage, current, and power readings during execution.",
  },
  {
    title: "Analyse",
    body:
      "CSV logs were processed to calculate mean runtime, average power, and estimated energy consumption.",
  },
];

const findings = [
  "Optimised binaries generally reduced runtime significantly.",
  "Average power draw often increased during optimised execution.",
  "Total estimated energy still decreased because runtime reduction outweighed the higher power draw.",
  "The O3 and O3_no_vec comparison showed that optimisation effects were workload-dependent.",
];

const tradeOffCharts = [
  {
    title: "Mean Runtime",
    image: "/mean_runtime.png",
    alt: "Bar chart showing mean runtime across benchmark kernels and LLVM optimisation variants",
    body:
      "The O0 baseline is consistently slower, while optimised variants reduce execution time significantly across the benchmark kernels.",
  },
  {
    title: "Mean Power",
    image: "/mean_power.png",
    alt: "Bar chart showing mean power draw across benchmark kernels and LLVM optimisation variants",
    body:
      "Optimised binaries often drew more average power during execution, showing why power must be interpreted alongside runtime.",
  },
];

const learningPoints = [
  "Designed a repeatable experimental framework for measuring compiler optimisation effects.",
  "Worked with LLVM/Clang, PolyBench/C, Raspberry Pi 5 hardware, Python automation, and CSV-based analysis.",
  "Learned how runtime, average power, and estimated energy can move in different directions.",
  "Improved my ability to evaluate technical results without overclaiming causality.",
];

export default function EnergyResearchPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#f5f3ef] text-[#0d0c0a]">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <Link
            to="/"
            className="inline-flex text-sm text-[#777] hover:text-[#0d0c0a] transition-colors"
          >
            ← Back to portfolio
          </Link>

          <section className="mt-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-4">
                Research Project
              </p>

              <h1 className="text-4xl md:text-6xl font-black tracking-[-0.05em] leading-[0.95]">
                LLVM Optimisations for Energy-Efficient Code
              </h1>

              <p className="mt-6 text-lg md:text-xl text-[#555] leading-8 max-w-2xl">
                A compiler optimisation research project investigating how LLVM
                optimisation settings affect runtime, average power draw, and
                estimated energy consumption on real low-power hardware.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  "LLVM",
                  "Clang",
                  "Raspberry Pi 5",
                  "Python",
                  "PolyBench/C",
                  "Energy Efficiency",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#151513] text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#e8e3dc] rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/Energy_Efficency_Research.png"
                alt="LLVM optimisation pipeline for energy-efficient code on Raspberry Pi 5"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="bg-white border border-[#e8e3dc] rounded-2xl p-5"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-[#aaa]">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold tracking-tight mt-3">
                  {stat.value}
                </p>
                <p className="text-sm text-[#777] mt-2">{stat.detail}</p>
              </article>
            ))}
          </section>

          <section className="mt-16 bg-white border border-[#e8e3dc] rounded-3xl p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
              Research Question
            </p>

            <h2 className="text-3xl font-bold tracking-[-0.03em] max-w-4xl">
              Can LLVM optimisations reduce estimated energy consumption on a
              Raspberry Pi 5, even when optimised binaries draw more average
              power during execution?
            </h2>

            <p className="text-[#555] leading-8 mt-5 max-w-3xl">
              The project tested this by comparing runtime, average power, and
              estimated energy across multiple PolyBench/C kernels and LLVM
              optimisation variants.
            </p>
          </section>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Overview
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                Why this project matters
              </h2>
            </div>

            <div className="space-y-5 text-[#555] leading-8">
              <p>
                Compiler optimisations are usually judged by performance, but
                faster code does not always mean lower energy use. This project
                tested that relationship directly by measuring LLVM-generated
                binaries on a Raspberry Pi 5 instead of relying only on
                simulation-based evaluation.
              </p>

              <p>
                The work focused on loop-intensive programs and optimisation
                behaviour related to software pipelining, vectorisation,
                scheduling, register allocation, and loop restructuring.
              </p>
            </div>
          </section>

          <section className="mt-16">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Experimental Framework
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                From compilation to energy analysis
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {frameworkSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="bg-white border border-[#e8e3dc] rounded-2xl p-5"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e05252] text-white text-sm font-bold">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-lg mt-4">{step.title}</h3>
                  <p className="text-sm text-[#666] leading-6 mt-2">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 bg-white border border-[#e8e3dc] rounded-3xl p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
              System Flow
            </p>

            <h2 className="text-3xl font-bold tracking-[-0.03em]">
              Framework architecture
            </h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-3 text-sm">
              {[
                "PolyBench/C Kernels",
                "LLVM/Clang Build",
                "Raspberry Pi 5 Execution",
                "PMIC Power Logger",
                "CSV Analysis",
              ].map((item, index) => (
                <div
                  key={item}
                  className="relative bg-[#f5f3ef] border border-[#e8e3dc] rounded-2xl p-4 text-center font-medium"
                >
                  <span>{item}</span>
                  {index < 4 && (
                    <span className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-[#aaa]">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <article className="bg-white border border-[#e8e3dc] rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Methodology
              </p>
              <h2 className="text-2xl font-bold tracking-[-0.03em]">
                Controlled benchmark comparison
              </h2>
              <p className="text-[#555] leading-8 mt-4">
                The experiment used four PolyBench/C kernels: 2mm, 3mm, gemm,
                and corr. Each benchmark was compiled using O0, O2, O3, and
                O3_no_vec. O0 acted as the unoptimised baseline, while O3_no_vec
                disabled loop and SLP vectorisation while keeping aggressive
                optimisation enabled.
              </p>
            </article>

            <article className="bg-white border border-[#e8e3dc] rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Measurement
              </p>
              <h2 className="text-2xl font-bold tracking-[-0.03em]">
                Runtime, power, and estimated energy
              </h2>
              <p className="text-[#555] leading-8 mt-4">
                The framework collected runtime and PMIC power readings, then
                processed CSV logs to calculate average power and estimated
                energy. Energy was estimated as average total power multiplied by
                runtime.
              </p>
            </article>
          </section>

          <section className="mt-16">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Findings
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                Main results
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {findings.map((finding) => (
                <div
                  key={finding}
                  className="bg-white border border-[#e8e3dc] rounded-2xl p-5 text-[#555] leading-7"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-[#e05252] mr-2" />
                  {finding}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Results Visualisation
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                Runtime, power, and energy trade-offs
              </h2>
              <p className="text-[#555] leading-8 mt-4 max-w-3xl">
                These graphs show why energy efficiency needs to be analysed
                through both runtime and power. The optimised binaries often
                increased average power, but the runtime reduction was large
                enough to reduce total estimated energy.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {tradeOffCharts.map((chart) => (
                <article
                  key={chart.title}
                  className="bg-white border border-[#e8e3dc] rounded-3xl overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-bold tracking-[-0.03em]">
                      {chart.title}
                    </h3>
                    <p className="text-[#555] leading-7 mt-3">{chart.body}</p>
                  </div>

                  <div className="bg-[#fafaf9] border-t border-[#e8e3dc] p-4">
                    <img
                      src={chart.image}
                      alt={chart.alt}
                      className="w-full rounded-xl border border-[#e8e3dc] bg-white"
                    />
                  </div>
                </article>
              ))}
            </div>

            <article className="bg-white border border-[#e8e3dc] rounded-3xl overflow-hidden mt-8">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold tracking-[-0.03em]">
                  Estimated Energy Heatmap
                </h3>
                <p className="text-[#555] leading-8 mt-3 max-w-3xl">
                  The heatmap combines runtime and power into estimated energy
                  consumption. It shows that the optimised variants reduced
                  estimated energy compared with O0 across the measured kernels.
                </p>
              </div>

              <div className="bg-[#fafaf9] border-y border-[#e8e3dc] px-4 py-6 md:px-8">
                <img
                  src="/heatmap.png"
                  alt="Heatmap showing estimated energy consumption by benchmark kernel and optimisation variant"
                  className="w-full rounded-xl border border-[#e8e3dc] bg-white"
                />
              </div>

              <div className="p-6 md:p-8">
                <p className="text-sm font-medium text-[#0d0c0a]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#e05252] mr-2" />
                  Key takeaway: GEMM under O3 produced the strongest estimated
                  energy reduction.
                </p>
              </div>
            </article>
          </section>

          <section className="mt-16 bg-[#0d0c0a] text-white rounded-3xl p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3">
              Critical Evaluation
            </p>

            <h2 className="text-3xl font-bold tracking-[-0.03em]">
              What the results do and do not prove
            </h2>

            <p className="text-white/70 leading-8 mt-5 max-w-3xl">
              The results show that LLVM optimisation can reduce estimated
              energy consumption on real low-power hardware. However, they do
              not prove that software pipelining alone caused the reduction,
              because O2 and O3 apply multiple compiler transformations at the
              same time, including vectorisation, scheduling, register
              allocation, and loop restructuring.
            </p>
          </section>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Reflection
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                What I learned
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {learningPoints.map((point) => (
                <div
                  key={point}
                  className="bg-white border border-[#e8e3dc] rounded-2xl p-5 text-[#555] leading-7"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-[#e05252] mr-2" />
                  {point}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 border-t border-[#e1ddd5] pt-8 pb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-4">
              Resources
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/LLVM_Energy_Research_Dissertation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#151513] px-4 py-2 text-sm font-medium text-white hover:bg-[#333] transition-colors"
              >
                Read Dissertation
              </a>

              <a
                href="https://github.com/abdul-burale"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[#d8d2c8] px-4 py-2 text-sm font-medium text-[#0d0c0a] hover:bg-white transition-colors"
              >
                GitHub
              </a>

              <Link
                to="/"
                className="rounded-lg border border-[#d8d2c8] px-4 py-2 text-sm font-medium text-[#0d0c0a] hover:bg-white transition-colors"
              >
                Back to Projects
              </Link>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}