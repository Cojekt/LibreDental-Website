// Project-wide links and details, so they live in one place.
export const repoUrl = "https://github.com/Cojekt/LibreDental";
export const releasesUrl = `${repoUrl}/releases`;
export const issuesUrl = `${repoUrl}/issues`;
export const discussionsUrl = `${repoUrl}/discussions`;
export const docsUrl = `${repoUrl}/blob/main/docs`;
export const contactEmail = "contact@libredental.com";

// Release asset names don't include the version, so this always points at
// the newest release and never needs updating.
export const latestDownload = (asset: string) =>
  `${releasesUrl}/latest/download/${asset}`;
