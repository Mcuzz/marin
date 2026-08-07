import Link from "next/link";
import { ModuleHero } from "@/components/ModuleHero";
import { PageShell } from "@/components/PageShell";

export default function CotizacionPage() {
  return (
    <PageShell>
      <main>
        <ModuleHero
          eyebrow="Cotizacion de proyectos"
          title="Filtro inicial para entender alcance, datos fiscales y necesidades"
          description="Esta pagina ordena la informacion que despues puede alimentar una cotizacion automatizada."
        />

        <section className="py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <form className="card space-y-5 p-6">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Nombre o razon social" placeholder="Nombre del solicitante" />
                <Field label="RFC" placeholder="RFC para filtro fiscal" />
                <Field label="Correo" placeholder="correo@empresa.com" type="email" />
                <Field label="Telefono" placeholder="662 123 4567" type="tel" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-brandDark">Tipo de proyecto</label>
                <select className="w-full rounded-xl border border-slate-300 px-4 py-3">
                  <option>Selecciona una opcion</option>
                  <option>Sitio web</option>
                  <option>Sistema administrativo</option>
                  <option>Inventario / punto de venta</option>
                  <option>Automatizacion industrial</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-brandDark">Descripcion del alcance</label>
                <textarea
                  rows={5}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="Describe el problema, usuarios, proceso actual y resultado esperado."
                />
              </div>

              <button type="button" className="w-full rounded-xl bg-brandAccent px-6 py-3 font-bold text-brandDark">
                Preparar solicitud
              </button>
            </form>

            <aside className="card p-6">
              <span className="eyebrow">Pendiente por definir</span>
              <h2 className="mt-4 text-2xl font-bold text-brandDark">Reglas para automatizar</h2>
              <p className="mt-4 text-slate-600">
                Para convertir esto en cotizador automatico se necesitan precios oficiales, variables de alcance,
                criterios administrativos y flujo de aprobacion.
              </p>
              <Link href="/catalogo" className="mt-6 inline-flex rounded-xl border border-brandDark px-5 py-3 font-bold text-brandDark">
                Ver catalogo
              </Link>
            </aside>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

function Field({
  label,
  placeholder,
  type = "text"
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-brandDark">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
    </div>
  );
}
