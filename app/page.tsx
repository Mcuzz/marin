import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";

const services = [
  {
    title: "Proyectos de ingenieria",
    copy: "Soluciones industriales, software, mecatronica y biomedica, pensadas para cada contexto.",
    icon: "01"
  },
  {
    title: "Software y sistemas",
    copy: "Sistemas de gestion, automatizacion y herramientas que mejoran la operacion diaria.",
    icon: "02"
  },
  {
    title: "Aplicaciones moviles",
    copy: "Apps practicas para pedidos, servicios, seguimiento y atencion mas rapida.",
    icon: "03"
  },
  {
    title: "Sitios web",
    copy: "Presencia digital profesional para mostrar servicios, atraer clientes y generar confianza.",
    icon: "04"
  },
  {
    title: "Automatizacion",
    copy: "Simplificacion de procesos repetitivos para ahorrar tiempo y reducir errores.",
    icon: "05"
  },
  {
    title: "Servicios tecnicos",
    copy: "Soporte para equipos y dispositivos en casa, comercio e industria.",
    icon: "06"
  }
];

const modules = [
  {
    title: "Convocatorias",
    copy: "Base para publicar vacantes, proyectos disponibles y oportunidades de colaboracion.",
    href: "/convocatorias"
  },
  {
    title: "Catalogo y costos",
    copy: "Servicios y productos con precios estaticos o rangos iniciales mientras se define administracion.",
    href: "/catalogo"
  },
  {
    title: "Cotizacion",
    copy: "Formulario inicial para recopilar necesidades antes de automatizar reglas de precio.",
    href: "/cotizacion"
  },
  {
    title: "Recursos humanos",
    copy: "Entrada separada para expedientes, matriz de aptitudes y control interno autorizado.",
    href: "/rh"
  }
];

const process = ["Diagnostico", "Propuesta", "Desarrollo", "Implementacion", "Acompanamiento"];

function CheckIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CaseStudies() {
  return (
    <section id="casos" className="bg-brandLight py-20">
      <div className="section-shell">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="eyebrow">Casos de exito</span>
          <h2 className="mt-3 text-3xl font-bold text-brandDark md:text-4xl">
            Ejemplos de soluciones que mejoran la operacion diaria
          </h2>
          <p className="mt-4 text-slate-600">
            Casos con problemas de administracion, produccion, control y organizacion que se resolvieron
            con herramientas practicas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <article className="case-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl">
            <div className="case-visual bg-gradient-to-br from-brandBlue via-brandDark to-brandBlueDeep">
              <div className="absolute left-5 right-5 top-5 z-10">
                <span className="inline-block rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  Sistema de inventario
                </span>
              </div>
              <div className="mock-window">
                <div className="mock-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="mb-3 flex gap-2">
                  <div className="h-14 flex-1 rounded-lg bg-brandAccentSoft p-2">
                    <p className="text-[9px] font-medium text-slate-500">Stock activo</p>
                    <p className="text-sm font-bold text-brandDark">248</p>
                    <div className="mock-bar mt-1">
                      <div className="mock-bar-fill w-4/5" />
                    </div>
                  </div>
                  <div className="h-14 flex-1 rounded-lg bg-slate-50 p-2">
                    <p className="text-[9px] font-medium text-slate-500">Ventas hoy</p>
                    <p className="text-sm font-bold text-brandDark">$4,320</p>
                    <div className="mock-bar mt-1">
                      <div className="mock-bar-fill w-7/12" />
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
                        <div className="mock-bar-fill w-3/4" />
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-600">OK</span>
                  </div>
                ))}
              </div>
            </div>
            <CaseBody
              tag="Yolanda's"
              sector="Retail"
              title="Inventario y control de ventas"
              copy="Panel practico para controlar entradas, salidas, ventas y existencias sin depender de registros dispersos."
              benefits={["Control claro del stock", "Menos errores al registrar ventas", "Informacion lista para decidir"]}
            />
          </article>

          <article className="case-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl">
            <div className="case-visual bg-gradient-to-br from-slate-900 via-brandBlue to-brandBlueDeep">
              <div className="absolute left-5 right-5 top-5 z-10">
                <span className="inline-block rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  Punto de venta
                </span>
              </div>
              <div className="mock-window">
                <div className="mock-dots">
                  <span />
                  <span />
                  <span />
                </div>
                {[
                  ["Orden #041", "3 items", "$420"],
                  ["Orden #042", "2 items", "$260"],
                  ["Orden #044", "1 item", "$95"]
                ].map(([order, items, total]) => (
                  <div key={order} className="mock-row">
                    <div className="mock-icon-box flex items-center justify-center bg-brandAccentSoft text-xs font-bold text-brandDark">
                      POS
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold text-brandDark">{order}</p>
                      <p className="text-[9px] text-slate-400">{items}</p>
                    </div>
                    <span className="text-[11px] font-bold text-brandDark">{total}</span>
                  </div>
                ))}
                <div className="mock-pos-total">
                  <span>Total del turno</span>
                  <span>$3,870</span>
                </div>
              </div>
            </div>
            <CaseBody
              tag="Terrazitas"
              sector="Restaurante"
              title="Punto de venta y seguimiento operativo"
              copy="Interfaz para registrar pedidos, cerrar turnos y dar seguimiento a la operacion sin depender de papel."
              benefits={["Atencion mas agil en horas pico", "Menos carga manual al cierre", "Mejor experiencia para el equipo"]}
            />
          </article>

          <article className="case-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl">
            <div className="case-visual bg-gradient-to-br from-emerald-700 via-brandBlue to-brandBlueDeep">
              <div className="absolute left-5 right-5 top-5 z-10">
                <span className="inline-block rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  Automatizacion industrial
                </span>
              </div>
              <div className="mock-window !bottom-[-0.5rem] pb-5">
                <div className="mock-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <p className="mb-1 text-center text-[10px] font-bold text-brandDark">Proceso de lavado - Limon-Son</p>
                <div className="mock-process">
                  <div className="mock-step bg-amber-100 text-sm font-bold text-amber-700">Fruta</div>
                  <span className="mock-arrow">→</span>
                  <div className="mock-step h-16 w-16 bg-blue-100 text-sm font-bold text-blue-700">Lavado</div>
                  <span className="mock-arrow">→</span>
                  <div className="mock-step bg-emerald-100 text-sm font-bold text-emerald-700">Lista</div>
                </div>
                <div className="mt-3 flex gap-2">
                  {[
                    ["Entrada", "120 kg/h"],
                    ["Eficiencia", "+35%"],
                    ["Calidad", "Estable"]
                  ].map(([label, value]) => (
                    <div key={label} className="flex-1 rounded-lg bg-slate-50 p-2 text-center">
                      <p className="text-[9px] text-slate-500">{label}</p>
                      <p className="text-xs font-bold text-brandDark">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <CaseBody
              tag="Limon-Son"
              sector="Produccion"
              title="Solucion para el lavado de frutas"
              copy="Solucion de ingenieria para optimizar el lavado, reducir variabilidad y dar control al proceso productivo."
              benefits={["Proceso mas practico y repetible", "Mejor control de produccion", "Resultados medibles"]}
            />
          </article>
        </div>
      </div>
    </section>
  );
}

function CaseBody({
  tag,
  sector,
  title,
  copy,
  benefits
}: {
  tag: string;
  sector: string;
  title: string;
  copy: string;
  benefits: string[];
}) {
  return (
    <div className="p-6 pt-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-block rounded-full bg-brandAccentSoft px-3 py-1 text-sm font-bold text-brandDark">
          {tag}
        </span>
        <span className="text-xs font-medium text-slate-400">{sector}</span>
      </div>
      <h3 className="mb-2 text-xl font-bold text-brandDark">{title}</h3>
      <p className="mb-5 text-sm leading-relaxed text-slate-600">{copy}</p>
      <div className="space-y-2">
        {benefits.map((benefit) => (
          <div key={benefit} className="benefit-chip">
            <CheckIcon />
            {benefit}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="bg-gradient-to-br from-brandDark via-brandBlue to-brandBlueDeep pt-32 text-white">
          <div className="section-shell grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                Aliado tecnologico para negocios locales e industria
              </span>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Soluciones de ingenieria, tecnologia y soporte tecnico para crecer con confianza.
              </h1>
              <p className="mb-8 max-w-xl text-lg text-slate-200">
                Acompanamos a negocios, industrias y hogares con proyectos de software, mecatronica,
                biomedica y servicios tecnicos hechos a la medida.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contacto"
                  className="rounded-xl bg-brandAccent px-6 py-3 text-center font-semibold text-brandDark transition hover:bg-brandAccentHover"
                >
                  Solicitar una propuesta
                </Link>
                <Link
                  href="/#servicios"
                  className="rounded-xl border border-white/30 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Ver servicios
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
              <div className="rounded-2xl bg-white p-6 text-brandDark">
                <p className="mb-2 text-sm text-slate-500">Soluciones para</p>
                <h2 className="mb-6 text-2xl font-bold">Industria, negocios locales y hogar</h2>
                <div className="space-y-4">
                  {["Proyectos de ingenieria", "Soporte tecnico", "Transformacion digital"].map((item, index) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brandAccentSoft font-bold text-brandDark">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold">{item}</h3>
                        <p className="text-sm text-slate-500">
                          Herramientas practicas para operar mejor, vender mas y crecer con orden.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="nosotros" className="bg-white py-20">
          <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Quienes somos</span>
              <h2 className="mt-3 text-3xl font-bold text-brandDark md:text-4xl">
                Una empresa nacida del esfuerzo, la vision y el deseo de ayudar.
              </h2>
              <p className="mt-6 leading-relaxed text-slate-600">
                Marin Industries nace de una historia familiar marcada por la determinacion de construir algo
                propio y servir con honestidad a la comunidad.
              </p>
              <p className="mt-5 leading-relaxed text-slate-600">
                Acompana a comercios, emprendedores y familias en su transformacion digital mediante
                herramientas tecnologicas accesibles, utiles y adaptadas a su realidad.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="card bg-brandLight p-6">
                <h3 className="mb-3 text-xl font-bold text-brandDark">Mision</h3>
                <p className="text-slate-600">
                  Llegar a negocios locales con soluciones tecnologicas inteligentes que faciliten sus servicios.
                </p>
              </div>
              <div className="rounded-2xl bg-brandDark p-6 text-white">
                <h3 className="mb-3 text-xl font-bold">Vision</h3>
                <p className="text-slate-200">
                  Usar tecnologias aplicadas para mejorar procesos, sustentabilidad y calidad de vida.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-white py-20">
          <div className="section-shell">
            <div className="mb-12 max-w-3xl">
              <span className="eyebrow">Que hacemos</span>
              <h2 className="mt-3 text-3xl font-bold text-brandDark md:text-4xl">
                Soluciones especificas y personalizadas para cada necesidad.
              </h2>
              <p className="mt-4 text-slate-600">
                Proyectos de ingenieria, desarrollo, automatizacion y soporte con enfoque practico.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="card bg-brandLight p-6 transition hover:shadow-xl">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brandAccentSoft font-bold text-brandDark">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-brandDark">{service.title}</h3>
                  <p className="text-slate-600">{service.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CaseStudies />

        <section className="bg-white py-20">
          <div className="section-shell">
            <div className="mb-12 max-w-3xl">
              <span className="eyebrow">Nuevos modulos</span>
              <h2 className="mt-3 text-3xl font-bold text-brandDark md:text-4xl">
                Base preparada para crecer mas alla de la landing.
              </h2>
              <p className="mt-4 text-slate-600">
                Estas areas dejan listo el camino para las solicitudes recibidas sin prometer todavia un sistema
                completo que requiere reglas y permisos.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {modules.map((module) => (
                <Link key={module.href} href={module.href} className="card p-6 transition hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="mb-3 text-xl font-bold text-brandDark">{module.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{module.copy}</p>
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
              {process.map((step, index) => (
                <div key={step} className="card bg-white p-5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brandAccent font-bold text-brandDark">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 mt-3 font-bold text-brandDark">{step}</h3>
                  <p className="text-sm text-slate-600">Definicion, ejecucion y seguimiento con prioridades claras.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-brandDark py-20 text-white">
          <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-brandAccent">Contacto</span>
              <h2 className="mb-6 mt-3 text-3xl font-bold md:text-5xl">
                Digitaliza tu negocio con una solucion hecha a tu medida.
              </h2>
              <p className="max-w-xl text-slate-300">
                Cuentanos que necesitas y te responderemos para iniciar la propuesta.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 text-brandDark md:p-8">
              <h3 className="mb-4 text-2xl font-bold">Iniciar una conversacion</h3>
              <p className="mb-6 text-slate-600">
                Comparte el contexto de tu negocio y el tipo de solucion que buscas.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
