/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WineTypesImport } from './routes/wine-types'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const WineTypesRoute = WineTypesImport.update({
  path: '/wine-types',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/wine-types.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/wine-types': {
      id: '/wine-types'
      path: '/wine-types'
      fullPath: '/wine-types'
      preLoaderRoute: typeof WineTypesImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  WineTypesRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/wine-types"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/wine-types": {
      "filePath": "wine-types.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
