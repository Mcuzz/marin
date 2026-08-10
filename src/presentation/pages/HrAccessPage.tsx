import type { HrFeature } from "@/src/domain/hr/hr-feature.entity";
import { ModuleHero } from "../components/ModuleHero";
import { PageShell } from "../components/layout/PageShell";

type HrAccessPageProps = {
  features: HrFeature[];
};

export function HrAccessPage({ features }: HrAccessPageProps) {
  return (
    <PageShell>
      <main>
        <ModuleHero
          eyebrow="Recursos humanos"
          title="Area interna para control de expedientes y aptitudes"
          description="Entrada separada del sitio publico. La logica real debera conectarse a autenticacion y permisos."
        />

        <section className="py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1fr]">
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-brandDark">Acceso autorizado</h2>
              <p className="mt-3 text-slate-600">
                Esta pantalla marca el modulo como privado sin exponer informacion sensible en la landing.
              </p>
              <form className="mt-6 space-y-4">
                <input
                  type="email"
                  placeholder="Correo institucional"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />
                <input
                  type="password"
                  placeholder="Contrasena"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />
                <button type="button" className="w-full rounded-xl bg-brandAccent px-6 py-3 font-bold text-brandDark">
                  Entrar
                </button>
              </form>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.id} className="card p-5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brandAccent font-bold text-brandDark">
                    OK
                  </span>
                  <p className="mt-4 font-semibold text-brandDark">{feature.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
