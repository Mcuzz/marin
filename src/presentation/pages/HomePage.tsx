import Link from "next/link";
import type {
  LandingContent,
  CaseStudy,
} from "@/src/domain/marketing/landing-content.entity";
import { ContactForm } from "../components/forms/ContactForm";
import { PageShell } from "../components/layout/PageShell";

type HomePageProps = {
  content: LandingContent;
};

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CaseVisual({ study }: { study: CaseStudy }) {
  if (study.visual === "pos") {
    return (
      <div className="case-visual">
        <div className="mock-window">
          <MockDots />

          {[
            ["Orden #041", "3 items", "$420"],
            ["Orden #042", "2 items", "$260"],
            ["Orden #044", "1 item", "$95"],
          ].map(([order, items, total]) => (
            <div key={order} className="mock-row">
              <div className="mock-icon-box flex items-center justify-center bg-brandAccentSoft text-xs font-bold text-brandDark">
                POS
              </div>

              <div className="flex-1">
                <p className="text-[11px] font-bold text-brandDark">{order}</p>
                <p className="text-[9px] text-brandText/60">{items}</p>
              </div>

              <span className="text-[11px] font-bold text-brandDark">
                {total}
              </span>
            </div>
          ))}

          <div className="mock-pos-total">
            <span>Total del turno</span>
            <span>$3,870</span>
          </div>
        </div>
      </div>
    );
  }

  if (study.visual === "washing") {
    return (
      <div className="case-visual">
        <div className="mock-window !bottom-[-0.5rem] pb-5">
          <MockDots />

          <p className="mb-1 text-center text-[10px] font-bold text-brandDark">
            Proceso de lavado - Limon-Son
          </p>

          <div className="mock-process">
            <div className="mock-step text-brandDark">Fruta</div>

            <span className="mock-arrow">-&gt;</span>

            <div
              className="mock-step text-brandDark"
              style={{
                width: "64px",
                height: "64px",
                fontSize: "26px",
                borderColor: "rgba(125, 211, 252, 0.35)",
              }}
            >
              ⚙️
            </div>

            <span className="mock-arrow">-&gt;</span>

            <div className="mock-step text-brandDark">Lista</div>
          </div>

          <div className="mt-3 flex gap-2">
            {[
              ["Entrada", "120 kg/h", false],
              ["Eficiencia", "+35%", true],
              ["Calidad", "Estable", false],
            ].map(([label, value, highlight]) => (
              <div
                key={label as string}
                className="flex-1 border border-brandLine bg-brandBg p-2 text-center"
              >
                <p className="text-[9px] text-brandText/60">{label}</p>

                <p
                  className={`text-xs font-bold ${
                    highlight ? "text-brandAccent" : "text-brandDark"
                  }`}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="case-visual">
      <div className="mock-window">
        <MockDots />

        <div className="mb-3 flex gap-2">
          <div className="h-14 flex-1 border border-brandLine bg-brandAccentSoft p-2">
            <p className="text-[9px] font-medium text-brandText/60">
              Stock activo
            </p>

            <p className="text-sm font-bold text-brandDark">248</p>

            <div className="mock-bar mt-1">
              <div className="mock-bar-fill" style={{ width: "80%" }} />
            </div>
          </div>

          <div className="h-14 flex-1 border border-brandLine bg-brandBg p-2">
            <p className="text-[9px] font-medium text-brandText/60">
              Ventas hoy
            </p>

            <p className="text-sm font-bold text-brandDark">$4,320</p>

            <div className="mock-bar mt-1">
              <div className="mock-bar-fill" style={{ width: "58.33%" }} />
            </div>
          </div>
        </div>

        {["Producto A", "Producto B", "Producto C"].map((item) => (
          <div key={item} className="mock-row">
            <div className="mock-icon-box flex items-center justify-center bg-brandAccentSoft text-xs font-bold text-brandDark">
              Inv
            </div>

            <div className="flex-1">
              <p className="text-[10px] font-semibold text-brandDark">{item}</p>

              <div className="mock-bar mt-1">
                <div className="mock-bar-fill" style={{ width: "75%" }} />
              </div>
            </div>

            <span className="text-[10px] font-semibold text-brandAccent">
              OK
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseBadge({ label }: { label: string }) {
  return <span className="case-tab">{label}</span>;
}

function MockDots() {
  return (
    <div className="mock-dots">
      <span />
      <span />
      <span />
    </div>
  );
}

function CaseStudies({ studies }: { studies: CaseStudy[] }) {
  return (
    <section id="casos" className="bg-brandLight py-20">
      <div className="section-shell">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="eyebrow">Casos de exito</span>

          <h2 className="mt-5 max-w-4xl font-sans text-4xl font-normal leading-[1.05] tracking-[-0.025em] text-brandDark md:text-5xl lg:text-6xl">
            Ejemplos de soluciones que mejoran la operacion diaria
          </h2>

          <p className="mt-4 text-brandText">
            Casos con problemas de administracion, produccion, control y
            organizacion que se resolvieron con herramientas practicas.
          </p>
        </div>

        <div className="grid gap-12 pt-8 md:grid-cols-3">
          {studies.map((study) => (
            <article
              key={study.id}
              className="case-card transition hover:border-brandAccent"
            >
              <CaseBadge label={study.type} />

              <CaseVisual study={study} />

              <div className="p-6 pt-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-block bg-brandAccentSoft px-3 py-1 text-sm font-bold text-brandDark">
                    {study.tag}
                  </span>

                  <span className="text-xs font-medium text-brandText/60">
                    {study.sector}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-brandDark">
                  {study.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-brandText">
                  {study.copy}
                </p>

                <div className="space-y-2">
                  {study.benefits.map((benefit) => (
                    <div key={benefit} className="benefit-chip">
                      <CheckIcon />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage({ content }: HomePageProps) {
  return (
    <PageShell>
      <main>
        <section className="border-b border-brandLine bg-brandBg pt-32 text-brandDark">
          <div className="section-shell grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-5 inline-flex items-center gap-2 border border-brandLine bg-brandSurface px-4 py-2 font-mono text-xs uppercase tracking-wide text-brandAccent">
                Aliado tecnologico para negocios locales e industria
              </span>

              <h1 className="h1 mb-8 text-5xl font-normal leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-6xl">
                Soluciones de ingenieria, tecnologia y soporte tecnico para
                crecer con confianza.
              </h1>

              <p className="mb-8 max-w-xl text-lg text-brandText">
                Acompanamos a negocios, industrias y hogares con proyectos de
                software, mecatronica, biomedica y servicios tecnicos hechos a
                la medida.
              </p>

              <div className="flex flex-col gap-4 pb-20 sm:flex-row">
                <Link
                  href="/#contacto"
                  className="border border-brandAccent bg-brandAccent px-6 py-3 text-center font-semibold text-brandBg transition hover:bg-brandAccentHover"
                >
                  Solicitar una propuesta
                </Link>

                <Link
                  href="/#servicios"
                  className="border border-brandLine px-6 py-3 text-center font-semibold text-brandDark transition hover:border-brandAccent hover:text-brandAccent"
                >
                  Ver servicios
                </Link>
              </div>
            </div>

            <div className="card p-6">
              <div className="bg-brandSurfaceAlt p-6">
                <p className="mb-2 text-sm text-brandText">Soluciones para</p>

                <h2 className="mb-6 font-sans text-2xl font-normal leading-tight tracking-[-0.02em] text-brandDark">
                  Industria, negocios locales y hogar
                </h2>

                <div className="space-y-4">
                  {[
                    "Proyectos de ingenieria",
                    "Soporte tecnico",
                    "Transformacion digital",
                  ].map((item, index) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center bg-brandAccentSoft font-bold text-brandDark">
                        {index + 1}
                      </div>

                      <div>
                        <h3 className="font-semibold text-brandDark">{item}</h3>

                        <p className="text-sm text-brandText">
                          Herramientas practicas para operar mejor, vender mas y
                          crecer con orden.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="nosotros" className="bg-brandLight py-20">
          <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Quienes somos</span>

              <h2 className="mt-3 text-3xl font-bold text-brandDark md:text-4xl">
                Una empresa nacida del esfuerzo, la vision y el deseo de ayudar.
              </h2>

              <p className="mt-6 leading-relaxed text-brandText">
                Marin Industries nace de una historia familiar marcada por la
                determinacion de construir algo propio y servir con honestidad a
                la comunidad.
              </p>

              <p className="mt-5 leading-relaxed text-brandText">
                Acompana a comercios, emprendedores y familias en su
                transformacion digital mediante herramientas tecnologicas
                accesibles, utiles y adaptadas a su realidad.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="card p-6">
                <h3 className="mb-3 text-xl font-bold text-brandDark">
                  Mision
                </h3>

                <p className="text-brandText">
                  Llegar a negocios locales con soluciones tecnologicas
                  inteligentes que faciliten sus servicios.
                </p>
              </div>

              <div className="card border-l-2 border-l-brandAccent p-6">
                <h3 className="mb-3 text-xl font-bold text-brandDark">
                  Vision
                </h3>

                <p className="text-brandText">
                  Usar tecnologias aplicadas para mejorar procesos,
                  sustentabilidad y calidad de vida.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-brandBg py-20">
          <div className="section-shell">
            <div className="mb-12 max-w-3xl">
              <span className="eyebrow">Que hacemos</span>

              <h2 className="mt-3 text-3xl font-bold text-brandDark md:text-4xl">
                Soluciones especificas y personalizadas para cada necesidad.
              </h2>

              <p className="mt-4 text-brandText">
                Proyectos de ingenieria, desarrollo, automatizacion y soporte
                con enfoque practico.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.services.map((service) => (
                <article
                  key={service.title}
                  className="card p-6 transition hover:border-brandAccent"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center bg-brandAccentSoft font-bold text-brandDark">
                    {service.icon}
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-brandDark">
                    {service.title}
                  </h3>

                  <p className="text-brandText">{service.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CaseStudies studies={content.caseStudies} />

        <section className="bg-brandBg py-20">
          <div className="section-shell">
            <div className="mb-12 max-w-3xl">
              <span className="eyebrow">Nuevos modulos</span>

              <h2 className="mt-3 text-3xl font-bold text-brandDark md:text-4xl">
                Base preparada para crecer mas alla de la landing.
              </h2>

              <p className="mt-4 text-brandText">
                Estas areas dejan listo el camino para las solicitudes recibidas
                sin prometer todavia un sistema completo que requiere reglas y
                permisos.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {content.modules.map((module) => (
                <Link
                  key={module.href}
                  href={module.href}
                  className="group card p-6 transition hover:-translate-y-1 hover:border-brandAccent"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-bold text-brandDark">
                      {module.title}
                    </h3>

                    <span
                      aria-hidden="true"
                      className="shrink-0 text-3xl font-light leading-none text-brandText transition-all duration-300 group-hover:translate-x-2 group-hover:text-brandAccent"
                    >
                      →
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-brandText">
                    {module.copy}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brandLight py-20">
          <div className="section-shell">
            <div className="mb-12 max-w-3xl">
              <span className="eyebrow">Como trabajamos</span>

              <h2 className="mt-3 text-3xl font-bold text-brandDark md:text-4xl">
                Un proceso claro desde la idea hasta la implementacion.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-5">
              {content.process.map((step, index) => (
                <div key={step} className="card p-5">
                  <span className="inline-flex h-8 w-8 items-center justify-center bg-brandAccent font-bold text-brandBg">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mb-2 mt-3 font-bold text-brandDark">{step}</h3>

                  <p className="text-sm text-brandText">
                    Definicion, ejecucion y seguimiento con prioridades claras.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="bg-brandBlueDeep py-20 text-brandDark"
        >
          <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-brandAccent">
                Contacto
              </span>

              <h2 className="mb-6 mt-5 font-sans text-4xl font-normal leading-[1.02] tracking-[-0.025em] md:text-5xl lg:text-6xl">
                Digitaliza tu negocio con una solucion hecha a tu medida.
              </h2>

              <p className="max-w-xl text-brandText">
                Cuentanos que necesitas y te responderemos para iniciar la
                propuesta.
              </p>
            </div>

            <div className="card p-6 md:p-8">
              <h3 className="mb-4 text-2xl font-bold text-brandDark">
                Iniciar una conversacion
              </h3>

              <p className="mb-6 text-brandText">
                Comparte el contexto de tu negocio y el tipo de solucion que
                buscas.
              </p>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
