export function normalizePageHash(routes) {
  const hash = window.location.hash.slice(1)
  if (routes.find((item) => item === hash)) {
    return hash
  }

  window.location.hash = routes[0]

  return routes[0]
}
