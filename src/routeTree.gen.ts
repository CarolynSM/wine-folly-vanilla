/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WinesIndexImport } from './routes/wines/index'
import { Route as WinesTypeIdImport } from './routes/wines/$typeId'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const WinesIndexRoute = WinesIndexImport.update({
  path: '/wines/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/wines/index.lazy').then((d) => d.Route))

const WinesTypeIdRoute = WinesTypeIdImport.update({
  path: '/wines/$typeId',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/wines/$typeId.lazy').then((d) => d.Route))

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
    '/wines/$typeId': {
      id: '/wines/$typeId'
      path: '/wines/$typeId'
      fullPath: '/wines/$typeId'
      preLoaderRoute: typeof WinesTypeIdImport
      parentRoute: typeof rootRoute
    }
    '/wines/': {
      id: '/wines/'
      path: '/wines'
      fullPath: '/wines'
      preLoaderRoute: typeof WinesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  WinesTypeIdRoute,
  WinesIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/wines/$typeId",
        "/wines/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/wines/$typeId": {
      "filePath": "wines/$typeId.tsx"
    },
    "/wines/": {
      "filePath": "wines/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
