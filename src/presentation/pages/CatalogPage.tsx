import Link from "next/link";
import type { ServiceOffering } from "@/src/domain/catalog/service-offering.entity";
import { ModuleHero } from "../components/ModuleHero";
import { PageShell } from "../components/layout/PageShell";

type CatalogPageProps = {
  catalog: ServiceOffering[];
};

export function CatalogPage({ catalog }: CatalogPageProps) {
  return (
    <PageShell>
      <main>
        <ModuleHero
          eyebrow="Catalogo y costos"
          title="Servicios con costos base para iniciar conversaciones"
          description="Version estatica para mostrar rangos y ordenar expectativas mientras administracion define reglas de actualizacion."
        />

        <section className="py-16">
          <div className="section-shell">
            <div className="grid gap-6 md:grid-cols-2">
              {catalog.map((item) => (
                <article key={item.id} className="card p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-brandAccent">Servicio</p>
                  <h2 className="mt-2 text-2xl font-bold text-brandDark">{item.name}</h2>
                  <p className="mt-4 text-3xl font-bold text-slate-900">{item.price}</p>
                  <p className="mt-4 leading-relaxed text-slate-600">{item.description}</p>
                  <Link
                    href="/cotizacion"
                    className="mt-6 inline-flex rounded-xl bg-brandAccent px-5 py-3 font-bold text-brandDark"
                  >
                    Solicitar cotizacion
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
