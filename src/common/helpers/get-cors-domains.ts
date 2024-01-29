export const getCorsDomains = () => {
  const domains: string = process.env.CORS_DOMAINS_ALLOWED;
  const domainsArr: string[] = domains.trim().replaceAll(' ', '').split(',');

  return domainsArr;
};
