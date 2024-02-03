/**
 * Devuelve la lista de dominios permitidos que le puedan mandar peticiones para poder configurarlos en el CORS.
 * @returns string[]
 */
export const getCorsDomains = (): string[] => {
  const domains: string = process.env.CORS_DOMAINS_ALLOWED;
  const domainsArr: string[] = domains.trim().replaceAll(' ', '').split(',');

  return domainsArr;
};
