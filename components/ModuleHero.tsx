type ModuleHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function ModuleHero({ eyebrow, title, description }: ModuleHeroProps) {
  return (
    <section className="bg-gradient-to-br from-brandDark via-brandBlue to-brandBlueDeep pt-32 text-white">
      <div className="section-shell py-16">
        <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-200">{description}</p>
      </div>
    </section>
  );
}
