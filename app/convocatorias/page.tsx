import { ModuleHero } from "@/components/ModuleHero";
import { PageShell } from "@/components/PageShell";

const openings = [
  {
    title: "Practicante de desarrollo web",
    area: "Software",
    status: "Convocatoria base",
    description: "Apoyo en interfaces, formularios, documentacion y mantenimiento de proyectos internos."
  },
  {
    title: "Apoyo en automatizacion",
    area: "Ingenieria",
    status: "Por definir",
    description: "Participacion en levantamiento de procesos, pruebas y documentacion tecnica."
  },
  {
    title: "Disenador grafico colaborador",
    area: "Marca",
    status: "Por definir",
    description: "Soporte visual para identidad, piezas digitales, iconografia y presentacion comercial."
  }
];

export default function ConvocatoriasPage() {
  return (
    <PageShell>
      <main>
        <ModuleHero
          eyebrow="Sistema de convocatoria"
          title="Vacantes y oportunidades de colaboracion"
          description="Primera version para mostrar oportunidades disponibles mientras se definen formularios, filtros y flujo administrativo."
        />

        <section className="py-16">
          <div className="section-shell">
            <div className="mb-8 max-w-3xl">
              <span className="eyebrow">Publicaciones</span>
              <h2 className="mt-3 text-3xl font-bold text-brandDark">Convocatorias iniciales</h2>
              <p className="mt-4 text-slate-600">
                Estas tarjetas funcionan como estructura visible. Despues pueden conectarse a una base de datos
                y a un panel administrativo.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {openings.map((opening) => (
                <article key={opening.title} className="card p-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-brandAccentSoft px-3 py-1 text-xs font-bold text-brandDark">
                      {opening.area}
                    </span>
                    <span className="text-xs font-medium text-slate-400">{opening.status}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brandDark">{opening.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{opening.description}</p>
                  <button className="mt-6 w-full rounded-xl border border-brandDark px-4 py-3 text-sm font-bold text-brandDark">
                    Solicitar informacion
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
