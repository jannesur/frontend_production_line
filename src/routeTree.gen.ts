/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const StatisticsLazyImport = createFileRoute('/statistics')()
const SearchLazyImport = createFileRoute('/search')()
const CreateStationLazyImport = createFileRoute('/create-station')()
const CreateRobotLazyImport = createFileRoute('/create-robot')()
const CreateProductionLineLazyImport = createFileRoute(
  '/create-production-line',
)()
const CreateEmployeeLazyImport = createFileRoute('/create-employee')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const StatisticsLazyRoute = StatisticsLazyImport.update({
  path: '/statistics',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/statistics.lazy').then((d) => d.Route))

const SearchLazyRoute = SearchLazyImport.update({
  path: '/search',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/search.lazy').then((d) => d.Route))

const CreateStationLazyRoute = CreateStationLazyImport.update({
  path: '/create-station',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/create-station.lazy').then((d) => d.Route),
)

const CreateRobotLazyRoute = CreateRobotLazyImport.update({
  path: '/create-robot',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/create-robot.lazy').then((d) => d.Route))

const CreateProductionLineLazyRoute = CreateProductionLineLazyImport.update({
  path: '/create-production-line',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/create-production-line.lazy').then((d) => d.Route),
)

const CreateEmployeeLazyRoute = CreateEmployeeLazyImport.update({
  path: '/create-employee',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/create-employee.lazy').then((d) => d.Route),
)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/create-employee': {
      preLoaderRoute: typeof CreateEmployeeLazyImport
      parentRoute: typeof rootRoute
    }
    '/create-production-line': {
      preLoaderRoute: typeof CreateProductionLineLazyImport
      parentRoute: typeof rootRoute
    }
    '/create-robot': {
      preLoaderRoute: typeof CreateRobotLazyImport
      parentRoute: typeof rootRoute
    }
    '/create-station': {
      preLoaderRoute: typeof CreateStationLazyImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      preLoaderRoute: typeof SearchLazyImport
      parentRoute: typeof rootRoute
    }
    '/statistics': {
      preLoaderRoute: typeof StatisticsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  CreateEmployeeLazyRoute,
  CreateProductionLineLazyRoute,
  CreateRobotLazyRoute,
  CreateStationLazyRoute,
  SearchLazyRoute,
  StatisticsLazyRoute,
])

/* prettier-ignore-end */
