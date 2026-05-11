import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const designAreas = [
  {
    title: "Tenant Isolation",
    body:
      "Products, orders, members, and payment workflows are scoped to a tenant so one business cannot access another business’s data.",
  },
  {
    title: "Identity and Membership",
    body:
      "Firebase Authentication verifies the user, while the API resolves which tenant memberships and roles that user has inside the system.",
  },
  {
    title: "Role-Aware Operations",
    body:
      "Roles such as owner, admin, and staff will control who can manage products, view orders, invite members, or generate payment links.",
  },
  {
    title: "PostgreSQL Data Model",
    body:
      "The database is designed around tenants, users, memberships, products, orders, order items, and payment records.",
  },
  {
    title: "Stripe Payment Links",
    body:
      "Valid orders can generate Stripe payment links, allowing a business to send customers a hosted checkout link without building a full checkout UI.",
  },
  {
    title: "Docker Development Setup",
    body:
      "Docker is used to run the local PostgreSQL environment consistently across development and testing.",
  },
];

const pipeline = [
  "Client Request",
  "Firebase Auth",
  "Go API",
  "Tenant Context",
  "Role Check",
  "PostgreSQL / Stripe",
];

const apiGroups = [
  {
    label: "Tenants",
    endpoints: ["POST /api/tenants", "GET /api/tenants/:id"],
  },
  {
    label: "Members",
    endpoints: [
      "POST /api/tenants/:id/members",
      "PATCH /api/tenants/:id/members/:userId/role",
    ],
  },
  {
    label: "Products",
    endpoints: ["POST /api/products", "GET /api/products"],
  },
  {
    label: "Orders",
    endpoints: ["POST /api/orders", "GET /api/orders/:id"],
  },
  {
    label: "Payments",
    endpoints: ["POST /api/orders/:id/payment-link"],
  },
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

          <section className="mt-12 rounded-[2rem] border border-[#e8e3dc] bg-white p-8 md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e8e3dc] bg-[#f5f3ef] px-4 py-2 text-xs font-semibold text-[#666]">
              <span className="h-2 w-2 rounded-full bg-[#e05252]" />
              In active development
            </div>

            <p className="mt-10 text-xs uppercase tracking-[0.2em] text-[#999]">
              Backend Systems Project
            </p>

            <h1 className="mt-4 text-5xl md:text-7xl font-black tracking-[-0.06em] leading-[0.9]">
              OrderFlow
            </h1>

            <p className="mt-6 max-w-3xl text-lg md:text-xl text-[#555] leading-8">
              A multi-tenant backend API for managing business users, products,
              orders, and Stripe payment links with tenant-aware access control.
            </p>

            <div className="flex flex-wrap gap-2 mt-7">
              {[
                "Go",
                "PostgreSQL",
                "Docker",
                "Firebase Auth",
                "Stripe",
                "REST API",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#151513] px-3 py-1 text-xs font-medium text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Design Challenge
              </p>

              <h2 className="text-3xl md:text-4xl font-black tracking-[-0.05em] leading-tight">
                The hard part is not creating endpoints.
              </h2>
            </div>

            <div className="rounded-3xl border border-[#e8e3dc] bg-white p-8">
              <p className="text-[#555] leading-8">
                The main engineering challenge is making every operation
                tenant-aware. Before the API touches business data, each request
                needs to resolve who the user is, which tenant they belong to,
                what role they have, and whether the operation is allowed.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "User identity",
                  "Tenant membership",
                  "User role",
                  "Allowed operation",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#e8e3dc] bg-[#f5f3ef] px-4 py-3 text-sm font-semibold text-[#444]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Project Purpose
              </p>

              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                What OrderFlow is designed to show
              </h2>
            </div>

            <div className="text-[#555] leading-8 space-y-5">
              <p>
                OrderFlow is designed to show backend architecture beyond basic
                CRUD. The project focuses on tenant isolation, authenticated
                access, role-aware operations, relational data modelling, and
                payment link workflows.
              </p>

              <p>
                The final version should make it clear how a business is
                created, how users become members of that business, how products
                and orders stay tenant-scoped, and how payment links are
                generated safely for valid orders.
              </p>
            </div>
          </section>

          <section className="mt-16">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Request Pipeline
              </p>

              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                Planned backend flow
              </h2>
            </div>

            <div className="bg-white border border-[#e8e3dc] rounded-3xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
                {pipeline.map((step, index) => (
                  <div
                    key={step}
                    className="relative rounded-2xl border border-[#e3d4c3] bg-[#fff7ed] p-4 text-center text-sm font-bold text-[#3a2a1a]"
                  >
                    <div className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#e05252] text-xs font-black text-white">
                      {index + 1}
                    </div>

                    {step}

                    {index < pipeline.length - 1 && (
                      <span className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-[#b8885c]">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-6 max-w-3xl text-[#666] leading-7">
                The planned lifecycle is middleware-driven: authenticate the
                user, resolve tenant context, check permissions, validate the
                request, then run tenant-scoped business logic against
                PostgreSQL or generate a Stripe payment link.
              </p>
            </div>
          </section>

          <section className="mt-16">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Core Design Areas
              </p>

              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                The backend decisions behind the project
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {designAreas.map((item) => (
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

          <section className="mt-16">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                API Surface
              </p>

              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                Planned endpoint groups
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {apiGroups.map((group, index) => (
                <article
                  key={group.label}
                  className="rounded-3xl border border-[#e3d4c3] bg-[#fffaf3] p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#151513] text-xs font-black text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-xl font-bold tracking-[-0.03em]">
                      {group.label}
                    </h3>
                  </div>

                  <div className="mt-5 space-y-3 font-mono text-sm">
                    {group.endpoints.map((endpoint) => (
                      <p
                        key={endpoint}
                        className="rounded-xl border border-[#ead8c4] bg-white px-3 py-2 text-[#5a4632]"
                      >
                        {endpoint}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
            <article className="bg-white border border-[#e8e3dc] rounded-3xl p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                PostgreSQL Data Model
              </p>

              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                ERD placeholder
              </h2>

              <p className="text-[#555] leading-8 mt-5">
                The planned ERD will show how tenants, users, memberships,
                products, orders, order items, and payment records relate to one
                another. This section will be updated with a diagram once the
                schema stabilises.
              </p>
            </article>

            <article className="bg-white border border-[#e8e3dc] rounded-3xl p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Local Development
              </p>

              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                Docker-backed PostgreSQL setup
              </h2>

              <p className="text-[#555] leading-8 mt-5">
                Docker is used to provide a consistent local PostgreSQL
                environment, making the API easier to run, reset, test, and
                document without depending on a manually configured database.
              </p>
            </article>
          </section>

          <section className="mt-16 rounded-3xl border border-[#e8e3dc] bg-white p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
              Future API Sandbox
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-[-0.03em]">
                  Planned interactive endpoint area
                </h2>

                <p className="text-[#555] leading-8 mt-5">
                  Once the API is stable, this page can include a small sandbox
                  for selected routes. The aim is to show how authentication,
                  tenant context, roles, and payment link generation behave in
                  practice.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8e3dc] bg-[#f5f3ef] p-5 font-mono text-sm text-[#666] space-y-3 overflow-x-auto">
                <p>POST /api/tenants</p>
                <p>POST /api/products</p>
                <p>POST /api/orders</p>
                <p>POST /api/orders/:id/payment-link</p>
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
              documentation, ERD, endpoint examples, and future sandbox will
              continue to evolve as the project is implemented.
            </p>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}