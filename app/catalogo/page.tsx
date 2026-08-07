import Link from "next/link";
import { ModuleHero } from "@/components/ModuleHero";
import { PageShell } from "@/components/PageShell";

const catalog = [
  {
    name: "Sitio web informativo",
    price: "Desde $4,500 MXN",
    description: "Landing o sitio basico para presentar servicios, contacto y casos de trabajo."
  },
  {
    name: "Sistema de inventario",
    price: "Desde $12,000 MXN",
    description: "Control inicial de productos, existencias, entradas, salidas y reportes basicos."
  },
  {
    name: "Punto de venta",
    price: "Desde $15,000 MXN",
    description: "Registro de ventas, productos, cortes y control operativo para negocios locales."
  },
  {
    name: "Automatizacion de procesos",
    price: "Cotizacion por alcance",
    description: "Diagnostico, propuesta tecnica y desarrollo segun equipo, proceso y objetivos."
  }
];

export default function CatalogoPage() {
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
                <article key={item.name} className="card p-6">
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
