const mapping: Record<string, string> = {
  businesses: 'business',
  'car-pools': 'car_pool',
  profiles: 'profile',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
