import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const responsibilities = [
  {
    title: "Tenant Resolution",
    body:
      "Every protected request must be associated with a tenant before accessing business data.",
  },
  {
    title: "Authentication",
    body:
      "Firebase Authentication will verify user identity before requests reach protected handlers.",
  },
  {
    title: "Authorisation",
    body:
      "Role-based access control will determine what each authenticated user can do inside a tenant.",
  },
  {
    title: "Data Isolation",
    body:
      "MongoDB queries must stay scoped by tenantId so businesses cannot access each other’s data.",
  },
  {
    title: "Payment Workflow",
    body:
      "Stripe payment links will be generated for order workflows once the order state is valid.",
  },
  {
    title: "API Documentation",
    body:
      "The project will include endpoint examples, request bodies, response shapes, and error cases.",
  },
];

const roadmap = [
  {
    phase: "01",
    title: "Foundation",
    status: "In progress",
    items: ["Go API structure", "MongoDB connection", "Configuration loading"],
  },
  {
    phase: "02",
    title: "Identity",
    status: "Planned",
    items: ["Firebase token verification", "User model", "Protected routes"],
  },
  {
    phase: "03",
    title: "Tenant System",
    status: "Planned",
    items: ["Tenant model", "Tenant middleware", "Tenant-scoped queries"],
  },
  {
    phase: "04",
    title: "Business Logic",
    status: "Planned",
    items: ["Products", "Orders", "Role-based permissions"],
  },
  {
    phase: "05",
    title: "Payments",
    status: "Planned",
    items: ["Stripe integration", "Payment links", "Order payment status"],
  },
  {
    phase: "06",
    title: "Documentation",
    status: "Planned",
    items: ["README", "API examples", "Architecture diagrams", "Testing sandbox"],
  },
];

const apiExamples = [
  "GET /health",
  "POST /api/tenants",
  "GET /api/products",
  "POST /api/orders",
  "POST /api/orders/:id/payment-link",
];

export default function OrderFlowPage() {
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

          <section className="mt-10 rounded-[2rem] bg-[#0d0c0a] text-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 md:p-12">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70">
                  <span className="h-2 w-2 rounded-full bg-[#e05252]" />
                  In active development
                </div>

                <p className="mt-10 text-xs uppercase tracking-[0.2em] text-white/40">
                  Backend Systems Project
                </p>

                <h1 className="mt-4 text-5xl md:text-7xl font-black tracking-[-0.06em] leading-[0.9]">
                  OrderFlow
                </h1>

                <p className="mt-6 text-lg md:text-xl text-white/70 leading-8 max-w-2xl">
                  A multi-tenant backend API for managing users, products,
                  orders, and payment workflows with tenant-scoped data,
                  Firebase authentication, RBAC, MongoDB, and Stripe.
                </p>

                <div className="flex flex-wrap gap-2 mt-7">
                  {["Go", "MongoDB", "Firebase", "Stripe", "RBAC", "REST API"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#0d0c0a]"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="border-t lg:border-t-0 lg:border-l border-white/10 p-8 md:p-12 bg-white/[0.03]">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Design Challenge
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em]">
                  The hard part is not CRUD. The hard part is trust boundaries.
                </h2>

                <p className="mt-5 text-white/65 leading-8">
                  Each request needs to prove who the user is, which tenant they
                  belong to, what role they have, and whether the data operation
                  is allowed. That is the core engineering problem this project
                  is being built around.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                System Intent
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                What OrderFlow is designed to prove
              </h2>
            </div>

            <div className="text-[#555] leading-8 space-y-5">
              <p>
                OrderFlow is being built to demonstrate backend architecture,
                not just endpoint creation. The system is designed around
                multi-tenancy, authentication, permissions, payment workflow
                integration, and clear API documentation.
              </p>

              <p>
                The final version should make it easy to understand how a
                business signs up, how users belong to a tenant, how products
                and orders are scoped, and how Stripe payment links are created
                safely.
              </p>
            </div>
          </section>

          <section className="mt-16">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Request Flow
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                Planned backend pipeline
              </h2>
            </div>

            <div className="bg-white border border-[#e8e3dc] rounded-3xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
                {[
                  "Client",
                  "Firebase Auth",
                  "Go API",
                  "Tenant Middleware",
                  "RBAC",
                  "MongoDB / Stripe",
                ].map((step, index, arr) => (
                  <div
                    key={step}
                    className="relative rounded-2xl bg-[#f5f3ef] border border-[#e8e3dc] p-4 text-center text-sm font-semibold"
                  >
                    {step}

                    {index < arr.length - 1 && (
                      <span className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-[#aaa]">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-6 max-w-3xl text-[#666] leading-7">
                The planned request lifecycle is deliberately middleware-heavy:
                verify identity, resolve the tenant, check permissions, validate
                the request, then perform tenant-scoped business logic.
              </p>
            </div>
          </section>

          <section className="mt-16">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Backend Responsibilities
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                What the API will handle
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {responsibilities.map((item) => (
                <article
                  key={item.title}
                  className="bg-white border border-[#e8e3dc] rounded-3xl p-6"
                >
                  <h3 className="text-xl font-bold tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="text-[#555] leading-7 mt-4">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8">
            <article className="bg-white border border-[#e8e3dc] rounded-3xl p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Security Model
              </p>

              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                Every data operation must be tenant-aware.
              </h2>

              <p className="text-[#555] leading-8 mt-5">
                The API should avoid trusting tenant identifiers blindly from
                the client. Tenant context should be resolved through verified
                identity and server-side checks, then applied consistently to
                database queries.
              </p>
            </article>

            <article className="bg-white border border-[#e8e3dc] rounded-3xl p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Documentation Goal
              </p>

              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                Backend projects need visible proof.
              </h2>

              <p className="text-[#555] leading-8 mt-5">
                The final write-up will include architecture diagrams, endpoint
                examples, request and response bodies, role behaviour, error
                cases, and a sandbox-style area for testing selected API flows.
              </p>
            </article>
          </section>

          <section className="mt-16">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Build Roadmap
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                Development plan
              </h2>
            </div>

            <div className="space-y-4">
              {roadmap.map((phase) => (
                <article
                  key={phase.phase}
                  className="bg-white border border-[#e8e3dc] rounded-3xl p-6 md:p-7 grid grid-cols-1 md:grid-cols-[0.25fr_0.5fr_1.25fr] gap-5 items-start"
                >
                  <div>
                    <p className="text-4xl font-black tracking-[-0.06em] text-[#e05252]">
                      {phase.phase}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold tracking-[-0.03em]">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-[#888] mt-1">{phase.status}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {phase.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#e8e3dc] bg-[#f5f3ef] px-3 py-1 text-sm text-[#555]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 bg-[#0d0c0a] text-white rounded-3xl p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
              Future API Sandbox
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-[-0.03em]">
                  Planned interactive endpoint area
                </h2>

                <p className="text-white/70 leading-8 mt-5">
                  Once the API is stable, this page can include a small sandbox
                  for selected routes. The aim is to show how authentication,
                  tenant scoping, roles, and payment flows behave in practice.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 font-mono text-sm text-white/65 space-y-3 overflow-x-auto">
                {apiExamples.map((endpoint) => (
                  <p key={endpoint}>{endpoint}</p>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16 border-t border-[#e1ddd5] pt-8 pb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-4">
              Resources
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/abdul-burale/orderflow"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#151513] px-4 py-2 text-sm font-medium text-white hover:bg-[#333] transition-colors"
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

            <p className="text-sm text-[#777] leading-7 mt-6 max-w-3xl">
              OrderFlow is currently in active development. The backend,
              documentation, architecture diagrams, and endpoint examples will
              continue to evolve as the project is implemented.
            </p>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}