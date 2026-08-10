import { container } from "@/src/infrastructure/composition/root-container";
import { JobOpeningsPage } from "@/src/presentation/pages/JobOpeningsPage";

export default async function Page() {
  const openings = await container.jobs.listJobOpenings();

  return <JobOpeningsPage openings={openings} />;
}
