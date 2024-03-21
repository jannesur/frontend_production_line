import {
  invariant,
  require_jsx_runtime,
  tiny_warning_esm_default,
  useStore
} from "./chunk-OKIWAWUK.js";
import {
  require_react
} from "./chunk-FQO5W7GE.js";
import {
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/@tanstack/router-devtools/dist/esm/devtools.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/awaited.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var React7 = __toESM(require_react(), 1);

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/useRouter.js
var React2 = __toESM(require_react(), 1);

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/routerContext.js
var React = __toESM(require_react(), 1);
var routerContext = React.createContext(null);
function getRouterContext() {
  if (typeof document === "undefined") {
    return routerContext;
  }
  if (window.__TSR_ROUTER_CONTEXT__) {
    return window.__TSR_ROUTER_CONTEXT__;
  }
  window.__TSR_ROUTER_CONTEXT__ = routerContext;
  return routerContext;
}

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/useRouter.js
function useRouter(opts) {
  const value = React2.useContext(getRouterContext());
  tiny_warning_esm_default(
    !(((opts == null ? void 0 : opts.warn) ?? true) && !value),
    "useRouter must be used inside a <RouterProvider> component!"
  );
  return value;
}

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/Matches.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var React5 = __toESM(require_react(), 1);

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/CatchBoundary.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var React3 = __toESM(require_react(), 1);
function CatchBoundary(props) {
  const errorComponent = props.errorComponent ?? ErrorComponent;
  return (0, import_jsx_runtime.jsx)(
    CatchBoundaryImpl,
    {
      getResetKey: props.getResetKey,
      onCatch: props.onCatch,
      children: ({ error }) => {
        if (error) {
          return React3.createElement(errorComponent, {
            error
          });
        }
        return props.children;
      }
    }
  );
}
var CatchBoundaryImpl = class extends React3.Component {
  constructor() {
    super(...arguments);
    this.state = { error: null };
  }
  static getDerivedStateFromProps(props) {
    var _a;
    return { resetKey: (_a = props.getResetKey) == null ? void 0 : _a.call(props) };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.error && prevState.resetKey !== this.state.resetKey) {
      this.setState({ error: null });
    }
  }
  componentDidCatch(error) {
    var _a, _b;
    if (this.props.onCatch) {
      (_b = (_a = this.props).onCatch) == null ? void 0 : _b.call(_a, error);
    } else {
      console.error(error);
    }
  }
  render() {
    return this.props.children(this.state);
  }
};
function ErrorComponent({ error }) {
  const [show, setShow] = React3.useState(true);
  return (0, import_jsx_runtime.jsxs)("div", { style: { padding: ".5rem", maxWidth: "100%" }, children: [
    (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [
      (0, import_jsx_runtime.jsx)("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }),
      (0, import_jsx_runtime.jsx)(
        "button",
        {
          style: {
            appearance: "none",
            fontSize: ".6em",
            border: "1px solid currentColor",
            padding: ".1rem .2rem",
            fontWeight: "bold",
            borderRadius: ".25rem"
          },
          onClick: () => setShow((d) => !d),
          children: show ? "Hide Error" : "Show Error"
        }
      )
    ] }),
    (0, import_jsx_runtime.jsx)("div", { style: { height: ".25rem" } }),
    show ? (0, import_jsx_runtime.jsx)("div", { children: (0, import_jsx_runtime.jsx)(
      "pre",
      {
        style: {
          fontSize: ".7em",
          border: "1px solid red",
          borderRadius: ".25rem",
          padding: ".3rem",
          color: "red",
          overflow: "auto"
        },
        children: error.message ? (0, import_jsx_runtime.jsx)("code", { children: error.message }) : null
      }
    ) }) : null
  ] });
}

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/useRouterState.js
function useRouterState(opts) {
  const contextRouter = useRouter({
    warn: (opts == null ? void 0 : opts.router) === void 0
  });
  return useStore(((opts == null ? void 0 : opts.router) || contextRouter).__store, opts == null ? void 0 : opts.select);
}

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/utils.js
var React4 = __toESM(require_react(), 1);
var isServer = typeof document === "undefined";
function isFunction(d) {
  return typeof d === "function";
}
function functionalUpdate(updater, previous) {
  if (isFunction(updater)) {
    return updater(previous);
  }
  return updater;
}
function pick(parent, keys) {
  return keys.reduce((obj, key) => {
    obj[key] = parent[key];
    return obj;
  }, {});
}
function isPlainObject(o2) {
  if (!hasObjectPrototype(o2)) {
    return false;
  }
  const ctor = o2.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o2) {
  return Object.prototype.toString.call(o2) === "[object Object]";
}
function deepEqual(a2, b2, partial = false) {
  if (a2 === b2) {
    return true;
  }
  if (typeof a2 !== typeof b2) {
    return false;
  }
  if (isPlainObject(a2) && isPlainObject(b2)) {
    const aKeys = Object.keys(a2);
    const bKeys = Object.keys(b2);
    if (!partial && aKeys.length !== bKeys.length) {
      return false;
    }
    return !bKeys.some(
      (key) => !(key in a2) || !deepEqual(a2[key], b2[key], partial)
    );
  }
  if (Array.isArray(a2) && Array.isArray(b2)) {
    return !a2.some((item, index) => !deepEqual(item, b2[index], partial));
  }
  return false;
}

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/not-found.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function isNotFound(obj) {
  return !!(obj == null ? void 0 : obj.isNotFound);
}
function CatchNotFound(props) {
  const resetKey = useRouterState({
    select: (s2) => `not-found-${s2.location.pathname}-${s2.status}`
  });
  return (0, import_jsx_runtime2.jsx)(
    CatchBoundary,
    {
      getResetKey: () => resetKey,
      onCatch: (error) => {
        var _a;
        if (isNotFound(error)) {
          (_a = props.onCatch) == null ? void 0 : _a.call(props, error);
        } else {
          throw error;
        }
      },
      errorComponent: ({ error }) => {
        var _a;
        return (_a = props.fallback) == null ? void 0 : _a.call(props, error);
      },
      children: props.children
    }
  );
}
function DefaultGlobalNotFound() {
  return (0, import_jsx_runtime2.jsx)("p", { children: "Not Found" });
}

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/redirects.js
function isRedirect(obj) {
  return !!(obj == null ? void 0 : obj.isRedirect);
}

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/Matches.js
var matchContext = React5.createContext(void 0);
function SafeFragment(props) {
  return (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: props.children });
}
function Match({ matchId }) {
  var _a, _b, _c, _d;
  const router = useRouter();
  const routeId = useRouterState({
    select: (s2) => {
      var _a2;
      return (_a2 = getRenderedMatches(s2).find((d) => d.id === matchId)) == null ? void 0 : _a2.routeId;
    }
  });
  invariant(
    routeId,
    `Could not find routeId for matchId "${matchId}". Please file an issue!`
  );
  const route = router.routesById[routeId];
  const PendingComponent = route.options.pendingComponent ?? router.options.defaultPendingComponent;
  const pendingElement = PendingComponent ? (0, import_jsx_runtime3.jsx)(PendingComponent, {}) : null;
  const routeErrorComponent = route.options.errorComponent ?? router.options.defaultErrorComponent ?? ErrorComponent;
  const routeNotFoundComponent = route.isRoot ? (
    // If it's the root route, use the globalNotFound option, with fallback to the notFoundRoute's component
    route.options.notFoundComponent ?? ((_a = router.options.notFoundRoute) == null ? void 0 : _a.options.component)
  ) : route.options.notFoundComponent;
  const ResolvedSuspenseBoundary = route.options.wrapInSuspense ?? PendingComponent ?? ((_b = route.options.component) == null ? void 0 : _b.preload) ?? ((_c = route.options.pendingComponent) == null ? void 0 : _c.preload) ?? ((_d = route.options.errorComponent) == null ? void 0 : _d.preload) ? React5.Suspense : SafeFragment;
  const ResolvedCatchBoundary = routeErrorComponent ? CatchBoundary : SafeFragment;
  const ResolvedNotFoundBoundary = routeNotFoundComponent ? CatchNotFound : SafeFragment;
  return (0, import_jsx_runtime3.jsx)(matchContext.Provider, { value: matchId, children: (0, import_jsx_runtime3.jsx)(ResolvedSuspenseBoundary, { fallback: pendingElement, children: (0, import_jsx_runtime3.jsx)(
    ResolvedCatchBoundary,
    {
      getResetKey: () => {
        var _a2;
        return (_a2 = router.state.resolvedLocation.state) == null ? void 0 : _a2.key;
      },
      errorComponent: routeErrorComponent,
      onCatch: (error) => {
        if (isNotFound(error))
          throw error;
        tiny_warning_esm_default(false, `Error in route match: ${matchId}`);
        console.error(error);
      },
      children: (0, import_jsx_runtime3.jsx)(
        ResolvedNotFoundBoundary,
        {
          fallback: (error) => {
            if (!routeNotFoundComponent || error.routeId && error.routeId !== routeId || !error.routeId && !route.isRoot)
              throw error;
            return React5.createElement(routeNotFoundComponent, error);
          },
          children: (0, import_jsx_runtime3.jsx)(MatchInner, { matchId, pendingElement })
        }
      )
    }
  ) }) });
}
function MatchInner({
  matchId,
  pendingElement
}) {
  var _a;
  const router = useRouter();
  const routeId = useRouterState({
    select: (s2) => {
      var _a2;
      return (_a2 = getRenderedMatches(s2).find((d) => d.id === matchId)) == null ? void 0 : _a2.routeId;
    }
  });
  const route = router.routesById[routeId];
  const match = useRouterState({
    select: (s2) => pick(getRenderedMatches(s2).find((d) => d.id === matchId), [
      "status",
      "error",
      "showPending",
      "loadPromise"
    ])
  });
  const RouteErrorComponent = (route.options.errorComponent ?? router.options.defaultErrorComponent) || ErrorComponent;
  if (match.status === "notFound") {
    invariant(isNotFound(match.error), "Expected a notFound error");
    return renderRouteNotFound(router, route, match.error.data);
  }
  if (match.status === "redirected") {
    invariant(isRedirect(match.error), "Expected a redirect error");
    tiny_warning_esm_default(
      false,
      "Tried to render a redirected route match! This is a weird circumstance, please file an issue!"
    );
    return null;
  }
  if (match.status === "error") {
    if (isServer) {
      return (0, import_jsx_runtime3.jsx)(
        RouteErrorComponent,
        {
          error: match.error,
          info: {
            componentStack: ""
          }
        }
      );
    }
    if (isServerSideError(match.error)) {
      const deserializeError = ((_a = router.options.errorSerializer) == null ? void 0 : _a.deserialize) ?? defaultDeserializeError;
      throw deserializeError(match.error.data);
    } else {
      throw match.error;
    }
  }
  if (match.status === "pending") {
    if (match.showPending) {
      return pendingElement;
    }
    throw match.loadPromise;
  }
  if (match.status === "success") {
    let Comp = route.options.component ?? router.options.defaultComponent;
    if (Comp) {
      return (0, import_jsx_runtime3.jsx)(Comp, {});
    }
    return (0, import_jsx_runtime3.jsx)(Outlet, {});
  }
  invariant(
    false,
    "Idle routeMatch status encountered during rendering! You should never see this. File an issue!"
  );
}
var Outlet = React5.memo(function Outlet2() {
  const router = useRouter();
  const matchId = React5.useContext(matchContext);
  const routeId = useRouterState({
    select: (s2) => {
      var _a;
      return (_a = getRenderedMatches(s2).find((d) => d.id === matchId)) == null ? void 0 : _a.routeId;
    }
  });
  const route = router.routesById[routeId];
  const { parentGlobalNotFound } = useRouterState({
    select: (s2) => {
      const matches = getRenderedMatches(s2);
      const parentMatch = matches.find((d) => d.id === matchId);
      invariant(
        parentMatch,
        `Could not find parent match for matchId "${matchId}"`
      );
      return {
        parentGlobalNotFound: parentMatch.globalNotFound
      };
    }
  });
  const childMatchId = useRouterState({
    select: (s2) => {
      var _a;
      const matches = getRenderedMatches(s2);
      const index = matches.findIndex((d) => d.id === matchId);
      return (_a = matches[index + 1]) == null ? void 0 : _a.id;
    }
  });
  if (parentGlobalNotFound) {
    return renderRouteNotFound(router, route, void 0);
  }
  if (!childMatchId) {
    return null;
  }
  return (0, import_jsx_runtime3.jsx)(Match, { matchId: childMatchId });
});
function renderRouteNotFound(router, route, data) {
  if (!route.options.notFoundComponent) {
    if (router.options.defaultNotFoundComponent) {
      return (0, import_jsx_runtime3.jsx)(router.options.defaultNotFoundComponent, { data });
    }
    if (true) {
      tiny_warning_esm_default(
        route.options.notFoundComponent,
        `A notFoundError was encountered on the route with ID "${route.id}", but a notFoundComponent option was not configured, nor was a router level defaultNotFoundComponent configured. Consider configuring at least one of these to avoid TanStack Router's overly generic defaultNotFoundComponent (<div>Not Found<div>)`
      );
    }
    return (0, import_jsx_runtime3.jsx)(DefaultGlobalNotFound, {});
  }
  return (0, import_jsx_runtime3.jsx)(route.options.notFoundComponent, { data });
}
function getRenderedMatches(state) {
  var _a;
  return ((_a = state.pendingMatches) == null ? void 0 : _a.some((d) => d.showPending)) ? state.pendingMatches : state.matches;
}
function useMatch(opts) {
  var _a;
  const router = useRouter();
  const nearestMatchId = React5.useContext(matchContext);
  const nearestMatchRouteId = (_a = getRenderedMatches(router.state).find(
    (d) => d.id === nearestMatchId
  )) == null ? void 0 : _a.routeId;
  const matchRouteId = (() => {
    const matches = getRenderedMatches(router.state);
    const match = (opts == null ? void 0 : opts.from) ? matches.find((d) => d.routeId === (opts == null ? void 0 : opts.from)) : matches.find((d) => d.id === nearestMatchId);
    return match.routeId;
  })();
  if ((opts == null ? void 0 : opts.strict) ?? true) {
    invariant(
      nearestMatchRouteId == matchRouteId,
      `useMatch("${matchRouteId}") is being called in a component that is meant to render the '${nearestMatchRouteId}' route. Did you mean to 'useMatch("${matchRouteId}", { strict: false })' or 'useRoute("${matchRouteId}")' instead?`
    );
  }
  const matchSelection = useRouterState({
    select: (state) => {
      const match = getRenderedMatches(state).find(
        (d) => (opts == null ? void 0 : opts.from) ? (opts == null ? void 0 : opts.from) === d.routeId : d.id === nearestMatchId
      );
      invariant(
        match,
        `Could not find ${(opts == null ? void 0 : opts.from) ? `an active match from "${opts.from}"` : "a nearest match!"}`
      );
      return (opts == null ? void 0 : opts.select) ? opts.select(match) : match;
    }
  });
  return matchSelection;
}
function isServerSideError(error) {
  if (!(typeof error === "object" && error && "data" in error))
    return false;
  if (!("__isServerError" in error && error.__isServerError))
    return false;
  if (!(typeof error.data === "object" && error.data))
    return false;
  return error.__isServerError === true;
}
function defaultDeserializeError(serializedData) {
  if ("name" in serializedData && "message" in serializedData) {
    const error = new Error(serializedData.message);
    error.name = serializedData.name;
    return error;
  }
  return serializedData.data;
}

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/path.js
function trimPathLeft(path) {
  return path === "/" ? path : path.replace(/^\/{1,}/, "");
}
function trimPathRight(path) {
  return path === "/" ? path : path.replace(/\/{1,}$/, "");
}
function trimPath(path) {
  return trimPathRight(trimPathLeft(path));
}

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/route.js
var rootRouteId = "__root__";

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/qss.js
function encode(obj, pfx) {
  var k, i2, tmp, str = "";
  for (k in obj) {
    if ((tmp = obj[k]) !== void 0) {
      if (Array.isArray(tmp)) {
        for (i2 = 0; i2 < tmp.length; i2++) {
          str && (str += "&");
          str += encodeURIComponent(k) + "=" + encodeURIComponent(tmp[i2]);
        }
      } else {
        str && (str += "&");
        str += encodeURIComponent(k) + "=" + encodeURIComponent(tmp);
      }
    }
  }
  return (pfx || "") + str;
}
function toValue(mix) {
  if (!mix)
    return "";
  var str = decodeURIComponent(mix);
  if (str === "false")
    return false;
  if (str === "true")
    return true;
  return +str * 0 === 0 && +str + "" === str ? +str : str;
}
function decode(str, pfx) {
  var tmp, k, out = {}, arr = (pfx ? str.substr(pfx.length) : str).split("&");
  while (tmp = arr.shift()) {
    tmp = tmp.split("=");
    k = tmp.shift();
    if (out[k] !== void 0) {
      out[k] = [].concat(out[k], toValue(tmp.shift()));
    } else {
      out[k] = toValue(tmp.shift());
    }
  }
  return out;
}

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/searchParams.js
var defaultParseSearch = parseSearchWith(JSON.parse);
var defaultStringifySearch = stringifySearchWith(
  JSON.stringify,
  JSON.parse
);
function parseSearchWith(parser) {
  return (searchStr) => {
    if (searchStr.substring(0, 1) === "?") {
      searchStr = searchStr.substring(1);
    }
    let query = decode(searchStr);
    for (let key in query) {
      const value = query[key];
      if (typeof value === "string") {
        try {
          query[key] = parser(value);
        } catch (err) {
        }
      }
    }
    return query;
  };
}
function stringifySearchWith(stringify, parser) {
  function stringifyValue(val) {
    if (typeof val === "object" && val !== null) {
      try {
        return stringify(val);
      } catch (err) {
      }
    } else if (typeof val === "string" && typeof parser === "function") {
      try {
        parser(val);
        return stringify(val);
      } catch (err) {
      }
    }
    return val;
  }
  return (search) => {
    search = { ...search };
    if (search) {
      Object.keys(search).forEach((key) => {
        const val = search[key];
        if (typeof val === "undefined" || val === void 0) {
          delete search[key];
        } else {
          search[key] = stringifyValue(val);
        }
      });
    }
    const searchStr = encode(search).toString();
    return searchStr ? `?${searchStr}` : "";
  };
}

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/RouterProvider.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var React6 = __toESM(require_react(), 1);

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/lazyRouteComponent.js
var React8 = __toESM(require_react(), 1);

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/link.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var React9 = __toESM(require_react(), 1);
var preloadWarning = "Error preloading route! ☝️";
function useLinkProps(options) {
  const router = useRouter();
  const matchPathname2 = useMatch({
    strict: false,
    select: (s2) => s2.pathname
  });
  const {
    // custom props
    activeProps = () => ({ className: "active" }),
    inactiveProps = () => ({}),
    activeOptions,
    hash,
    search,
    params,
    to,
    state,
    mask,
    preload: userPreload,
    preloadDelay: userPreloadDelay,
    replace,
    startTransition: startTransition2,
    resetScroll,
    // element props
    children,
    target,
    disabled,
    style,
    className,
    onClick,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    onTouchStart,
    ...rest
  } = options;
  const dest = {
    from: options.to ? matchPathname2 : void 0,
    ...options
  };
  let type = "internal";
  try {
    new URL(`${to}`);
    type = "external";
  } catch {
  }
  const next = router.buildLocation(dest);
  const preload = userPreload ?? router.options.defaultPreload;
  const preloadDelay = userPreloadDelay ?? router.options.defaultPreloadDelay ?? 0;
  const isActive = useRouterState({
    select: (s2) => {
      const currentPathSplit = s2.location.pathname.split("/");
      const nextPathSplit = next.pathname.split("/");
      const pathIsFuzzyEqual = nextPathSplit.every(
        (d, i2) => d === currentPathSplit[i2]
      );
      const pathTest = (activeOptions == null ? void 0 : activeOptions.exact) ? s2.location.pathname === next.pathname : pathIsFuzzyEqual;
      const hashTest = (activeOptions == null ? void 0 : activeOptions.includeHash) ? s2.location.hash === next.hash : true;
      const searchTest = (activeOptions == null ? void 0 : activeOptions.includeSearch) ?? true ? deepEqual(s2.location.search, next.search, !(activeOptions == null ? void 0 : activeOptions.exact)) : true;
      return pathTest && hashTest && searchTest;
    }
  });
  if (type === "external") {
    return {
      ...rest,
      type,
      href: to,
      children,
      target,
      disabled,
      style,
      className,
      onClick,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      onTouchStart
    };
  }
  const handleClick = (e2) => {
    if (!disabled && !isCtrlEvent(e2) && !e2.defaultPrevented && (!target || target === "_self") && e2.button === 0) {
      e2.preventDefault();
      router.commitLocation({ ...next, replace, resetScroll, startTransition: startTransition2 });
    }
  };
  const doPreload = () => {
    React9.startTransition(() => {
      router.preloadRoute(dest).catch((err) => {
        console.warn(err);
        console.warn(preloadWarning);
      });
    });
  };
  const handleFocus = (e2) => {
    if (disabled)
      return;
    if (preload) {
      doPreload();
    }
  };
  const handleTouchStart = handleFocus;
  const handleEnter = (e2) => {
    if (disabled)
      return;
    const target2 = e2.target || {};
    if (preload) {
      if (target2.preloadTimeout) {
        return;
      }
      target2.preloadTimeout = setTimeout(() => {
        target2.preloadTimeout = null;
        doPreload();
      }, preloadDelay);
    }
  };
  const handleLeave = (e2) => {
    if (disabled)
      return;
    const target2 = e2.target || {};
    if (target2.preloadTimeout) {
      clearTimeout(target2.preloadTimeout);
      target2.preloadTimeout = null;
    }
  };
  const composeHandlers = (handlers) => (e2) => {
    if (e2.persist)
      e2.persist();
    handlers.filter(Boolean).forEach((handler) => {
      if (e2.defaultPrevented)
        return;
      handler(e2);
    });
  };
  const resolvedActiveProps = isActive ? functionalUpdate(activeProps, {}) ?? {} : {};
  const resolvedInactiveProps = isActive ? {} : functionalUpdate(inactiveProps, {}) ?? {};
  return {
    ...resolvedActiveProps,
    ...resolvedInactiveProps,
    ...rest,
    href: disabled ? void 0 : next.maskedLocation ? next.maskedLocation.href : next.href,
    onClick: composeHandlers([onClick, handleClick]),
    onFocus: composeHandlers([onFocus, handleFocus]),
    onMouseEnter: composeHandlers([onMouseEnter, handleEnter]),
    onMouseLeave: composeHandlers([onMouseLeave, handleLeave]),
    onTouchStart: composeHandlers([onTouchStart, handleTouchStart]),
    target,
    style: {
      ...style,
      ...resolvedActiveProps.style,
      ...resolvedInactiveProps.style
    },
    className: [
      className,
      resolvedActiveProps.className,
      resolvedInactiveProps.className
    ].filter(Boolean).join(" ") || void 0,
    ...disabled ? {
      role: "link",
      "aria-disabled": true
    } : void 0,
    ["data-status"]: isActive ? "active" : void 0
  };
}
var Link = React9.forwardRef((props, ref) => {
  const { _asChild, ...rest } = props;
  const { type, ...linkProps } = useLinkProps(rest);
  const children = typeof rest.children === "function" ? rest.children({
    isActive: linkProps["data-status"] === "active"
  }) : rest.children;
  return React9.createElement(
    _asChild ? _asChild : "a",
    {
      ...linkProps,
      ref
    },
    children
  );
});
function isCtrlEvent(e2) {
  return !!(e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey);
}

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/scroll-restoration.js
var React10 = __toESM(require_react(), 1);
var sessionsStorage = typeof window !== "undefined" && window.sessionStorage;
var cache = sessionsStorage ? (() => {
  const storageKey = "tsr-scroll-restoration-v2";
  const state = JSON.parse(
    window.sessionStorage.getItem(storageKey) || "null"
  ) || { cached: {}, next: {} };
  return {
    state,
    set: (updater) => {
      cache.state = functionalUpdate(updater, cache.state);
      window.sessionStorage.setItem(storageKey, JSON.stringify(cache.state));
    }
  };
})() : void 0;

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/useBlocker.js
var React11 = __toESM(require_react(), 1);

// node_modules/@tanstack/router-devtools/node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var React12 = __toESM(require_react(), 1);

// node_modules/@tanstack/router-devtools/dist/esm/useLocalStorage.js
var import_react = __toESM(require_react(), 1);
var getItem = (key) => {
  try {
    const itemValue = localStorage.getItem(key);
    if (typeof itemValue === "string") {
      return JSON.parse(itemValue);
    }
    return void 0;
  } catch {
    return void 0;
  }
};
function useLocalStorage(key, defaultValue) {
  const [value, setValue] = import_react.default.useState();
  import_react.default.useEffect(() => {
    const initialValue = getItem(key);
    if (typeof initialValue === "undefined" || initialValue === null) {
      setValue(
        typeof defaultValue === "function" ? defaultValue() : defaultValue
      );
    } else {
      setValue(initialValue);
    }
  }, [defaultValue, key]);
  const setter = import_react.default.useCallback(
    (updater) => {
      setValue((old) => {
        let newVal = updater;
        if (typeof updater == "function") {
          newVal = updater(old);
        }
        try {
          localStorage.setItem(key, JSON.stringify(newVal));
        } catch {
        }
        return newVal;
      });
    },
    [key]
  );
  return [value, setter];
}

// node_modules/@tanstack/router-devtools/dist/esm/utils.js
var import_react2 = __toESM(require_react(), 1);
var isServer2 = typeof window === "undefined";
function getStatusColor(match) {
  return match.status === "success" && match.isFetching ? "blue" : match.status === "pending" ? "yellow" : match.status === "error" ? "red" : match.status === "success" ? "green" : "gray";
}
function getRouteStatusColor(matches, route) {
  const found = matches.find((d) => d.routeId === route.id);
  if (!found)
    return "gray";
  return getStatusColor(found);
}
function useIsMounted() {
  const mountedRef = import_react2.default.useRef(false);
  const isMounted = import_react2.default.useCallback(() => mountedRef.current, []);
  import_react2.default[isServer2 ? "useEffect" : "useLayoutEffect"](() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return isMounted;
}
var displayValue = (value) => {
  const name = Object.getOwnPropertyNames(Object(value));
  const newValue = typeof value === "bigint" ? `${value.toString()}n` : value;
  try {
    return JSON.stringify(newValue, name);
  } catch (e2) {
    return `unable to stringify`;
  }
};
function useSafeState(initialState) {
  const isMounted = useIsMounted();
  const [state, setState] = import_react2.default.useState(initialState);
  const safeSetState = import_react2.default.useCallback(
    (value) => {
      scheduleMicrotask(() => {
        if (isMounted()) {
          setState(value);
        }
      });
    },
    [isMounted]
  );
  return [state, safeSetState];
}
function scheduleMicrotask(callback) {
  Promise.resolve().then(callback).catch(
    (error) => setTimeout(() => {
      throw error;
    })
  );
}
function multiSortBy(arr, accessors = [(d) => d]) {
  return arr.map((d, i2) => [d, i2]).sort(([a2, ai], [b2, bi]) => {
    for (const accessor of accessors) {
      const ao = accessor(a2);
      const bo = accessor(b2);
      if (typeof ao === "undefined") {
        if (typeof bo === "undefined") {
          continue;
        }
        return 1;
      }
      if (ao === bo) {
        continue;
      }
      return ao > bo ? 1 : -1;
    }
    return ai - bi;
  }).map(([d]) => d);
}

// node_modules/goober/dist/goober.modern.js
var e = { data: "" };
var t = (t2) => "object" == typeof window ? ((t2 ? t2.querySelector("#_goober") : window._goober) || Object.assign((t2 || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : t2 || e;
var l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g;
var a = /\/\*[^]*?\*\/|  +/g;
var n = /\n+/g;
var o = (e2, t2) => {
  let r2 = "", l2 = "", a2 = "";
  for (let n2 in e2) {
    let c2 = e2[n2];
    "@" == n2[0] ? "i" == n2[1] ? r2 = n2 + " " + c2 + ";" : l2 += "f" == n2[1] ? o(c2, n2) : n2 + "{" + o(c2, "k" == n2[1] ? "" : t2) + "}" : "object" == typeof c2 ? l2 += o(c2, t2 ? t2.replace(/([^,])+/g, (e3) => n2.replace(/(^:.*)|([^,])+/g, (t3) => /&/.test(t3) ? t3.replace(/&/g, e3) : e3 ? e3 + " " + t3 : t3)) : n2) : null != c2 && (n2 = /^--/.test(n2) ? n2 : n2.replace(/[A-Z]/g, "-$&").toLowerCase(), a2 += o.p ? o.p(n2, c2) : n2 + ":" + c2 + ";");
  }
  return r2 + (t2 && a2 ? t2 + "{" + a2 + "}" : a2) + l2;
};
var c = {};
var s = (e2) => {
  if ("object" == typeof e2) {
    let t2 = "";
    for (let r2 in e2)
      t2 += r2 + s(e2[r2]);
    return t2;
  }
  return e2;
};
var i = (e2, t2, r2, i2, p2) => {
  let u2 = s(e2), d = c[u2] || (c[u2] = ((e3) => {
    let t3 = 0, r3 = 11;
    for (; t3 < e3.length; )
      r3 = 101 * r3 + e3.charCodeAt(t3++) >>> 0;
    return "go" + r3;
  })(u2));
  if (!c[d]) {
    let t3 = u2 !== e2 ? e2 : ((e3) => {
      let t4, r3, o2 = [{}];
      for (; t4 = l.exec(e3.replace(a, "")); )
        t4[4] ? o2.shift() : t4[3] ? (r3 = t4[3].replace(n, " ").trim(), o2.unshift(o2[0][r3] = o2[0][r3] || {})) : o2[0][t4[1]] = t4[2].replace(n, " ").trim();
      return o2[0];
    })(e2);
    c[d] = o(p2 ? { ["@keyframes " + d]: t3 } : t3, r2 ? "" : "." + d);
  }
  let f = r2 && c.g ? c.g : null;
  return r2 && (c.g = c[d]), ((e3, t3, r3, l2) => {
    l2 ? t3.data = t3.data.replace(l2, e3) : -1 === t3.data.indexOf(e3) && (t3.data = r3 ? e3 + t3.data : t3.data + e3);
  })(c[d], t2, i2, f), d;
};
var p = (e2, t2, r2) => e2.reduce((e3, l2, a2) => {
  let n2 = t2[a2];
  if (n2 && n2.call) {
    let e4 = n2(r2), t3 = e4 && e4.props && e4.props.className || /^go/.test(e4) && e4;
    n2 = t3 ? "." + t3 : e4 && "object" == typeof e4 ? e4.props ? "" : o(e4, "") : false === e4 ? "" : e4;
  }
  return e3 + l2 + (null == n2 ? "" : n2);
}, "");
function u(e2) {
  let r2 = this || {}, l2 = e2.call ? e2(r2.p) : e2;
  return i(l2.unshift ? l2.raw ? p(l2, [].slice.call(arguments, 1), r2.p) : l2.reduce((e3, t2) => Object.assign(e3, t2 && t2.call ? t2(r2.p) : t2), {}) : l2, t(r2.target), r2.g, r2.o, r2.k);
}
var b = u.bind({ g: 1 });
var h = u.bind({ k: 1 });

// node_modules/clsx/dist/clsx.mjs
function r(e2) {
  var t2, f, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2)
    n2 += e2;
  else if ("object" == typeof e2)
    if (Array.isArray(e2)) {
      var o2 = e2.length;
      for (t2 = 0; t2 < o2; t2++)
        e2[t2] && (f = r(e2[t2])) && (n2 && (n2 += " "), n2 += f);
    } else
      for (f in e2)
        e2[f] && (n2 && (n2 += " "), n2 += f);
  return n2;
}
function clsx() {
  for (var e2, t2, f = 0, n2 = "", o2 = arguments.length; f < o2; f++)
    (e2 = arguments[f]) && (t2 = r(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}

// node_modules/@tanstack/router-devtools/dist/esm/Explorer.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var React13 = __toESM(require_react(), 1);

// node_modules/@tanstack/router-devtools/dist/esm/tokens.js
var tokens = {
  colors: {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000000",
    white: "#ffffff",
    neutral: {
      50: "#f9fafb",
      100: "#f2f4f7",
      200: "#eaecf0",
      300: "#d0d5dd",
      400: "#98a2b3",
      500: "#667085",
      600: "#475467",
      700: "#344054",
      800: "#1d2939",
      900: "#101828"
    },
    darkGray: {
      50: "#525c7a",
      100: "#49536e",
      200: "#414962",
      300: "#394056",
      400: "#313749",
      500: "#292e3d",
      600: "#212530",
      700: "#191c24",
      800: "#111318",
      900: "#0b0d10"
    },
    gray: {
      50: "#f9fafb",
      100: "#f2f4f7",
      200: "#eaecf0",
      300: "#d0d5dd",
      400: "#98a2b3",
      500: "#667085",
      600: "#475467",
      700: "#344054",
      800: "#1d2939",
      900: "#101828"
    },
    blue: {
      25: "#F5FAFF",
      50: "#EFF8FF",
      100: "#D1E9FF",
      200: "#B2DDFF",
      300: "#84CAFF",
      400: "#53B1FD",
      500: "#2E90FA",
      600: "#1570EF",
      700: "#175CD3",
      800: "#1849A9",
      900: "#194185"
    },
    green: {
      25: "#F6FEF9",
      50: "#ECFDF3",
      100: "#D1FADF",
      200: "#A6F4C5",
      300: "#6CE9A6",
      400: "#32D583",
      500: "#12B76A",
      600: "#039855",
      700: "#027A48",
      800: "#05603A",
      900: "#054F31"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a"
    },
    yellow: {
      25: "#FFFCF5",
      50: "#FFFAEB",
      100: "#FEF0C7",
      200: "#FEDF89",
      300: "#FEC84B",
      400: "#FDB022",
      500: "#F79009",
      600: "#DC6803",
      700: "#B54708",
      800: "#93370D",
      900: "#7A2E0E"
    },
    purple: {
      25: "#FAFAFF",
      50: "#F4F3FF",
      100: "#EBE9FE",
      200: "#D9D6FE",
      300: "#BDB4FE",
      400: "#9B8AFB",
      500: "#7A5AF8",
      600: "#6938EF",
      700: "#5925DC",
      800: "#4A1FB8",
      900: "#3E1C96"
    },
    teal: {
      25: "#F6FEFC",
      50: "#F0FDF9",
      100: "#CCFBEF",
      200: "#99F6E0",
      300: "#5FE9D0",
      400: "#2ED3B7",
      500: "#15B79E",
      600: "#0E9384",
      700: "#107569",
      800: "#125D56",
      900: "#134E48"
    },
    pink: {
      25: "#fdf2f8",
      50: "#fce7f3",
      100: "#fbcfe8",
      200: "#f9a8d4",
      300: "#f472b6",
      400: "#ec4899",
      500: "#db2777",
      600: "#be185d",
      700: "#9d174d",
      800: "#831843",
      900: "#500724"
    },
    cyan: {
      25: "#ecfeff",
      50: "#cffafe",
      100: "#a5f3fc",
      200: "#67e8f9",
      300: "#22d3ee",
      400: "#06b6d4",
      500: "#0891b2",
      600: "#0e7490",
      700: "#155e75",
      800: "#164e63",
      900: "#083344"
    }
  },
  alpha: {
    100: "ff",
    90: "e5",
    80: "cc",
    70: "b3",
    60: "99",
    50: "80",
    40: "66",
    30: "4d",
    20: "33",
    10: "1a",
    0: "00"
  },
  font: {
    size: {
      "2xs": "calc(var(--tsrd-font-size) * 0.625)",
      xs: "calc(var(--tsrd-font-size) * 0.75)",
      sm: "calc(var(--tsrd-font-size) * 0.875)",
      md: "var(--tsrd-font-size)",
      lg: "calc(var(--tsrd-font-size) * 1.125)",
      xl: "calc(var(--tsrd-font-size) * 1.25)",
      "2xl": "calc(var(--tsrd-font-size) * 1.5)",
      "3xl": "calc(var(--tsrd-font-size) * 1.875)",
      "4xl": "calc(var(--tsrd-font-size) * 2.25)",
      "5xl": "calc(var(--tsrd-font-size) * 3)",
      "6xl": "calc(var(--tsrd-font-size) * 3.75)",
      "7xl": "calc(var(--tsrd-font-size) * 4.5)",
      "8xl": "calc(var(--tsrd-font-size) * 6)",
      "9xl": "calc(var(--tsrd-font-size) * 8)"
    },
    lineHeight: {
      "3xs": "calc(var(--tsrd-font-size) * 0.75)",
      "2xs": "calc(var(--tsrd-font-size) * 0.875)",
      xs: "calc(var(--tsrd-font-size) * 1)",
      sm: "calc(var(--tsrd-font-size) * 1.25)",
      md: "calc(var(--tsrd-font-size) * 1.5)",
      lg: "calc(var(--tsrd-font-size) * 1.75)",
      xl: "calc(var(--tsrd-font-size) * 2)",
      "2xl": "calc(var(--tsrd-font-size) * 2.25)",
      "3xl": "calc(var(--tsrd-font-size) * 2.5)",
      "4xl": "calc(var(--tsrd-font-size) * 2.75)",
      "5xl": "calc(var(--tsrd-font-size) * 3)",
      "6xl": "calc(var(--tsrd-font-size) * 3.25)",
      "7xl": "calc(var(--tsrd-font-size) * 3.5)",
      "8xl": "calc(var(--tsrd-font-size) * 3.75)",
      "9xl": "calc(var(--tsrd-font-size) * 4)"
    },
    weight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },
    fontFamily: {
      sans: "ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",
      mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`
    }
  },
  breakpoints: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  border: {
    radius: {
      none: "0px",
      xs: "calc(var(--tsrd-font-size) * 0.125)",
      sm: "calc(var(--tsrd-font-size) * 0.25)",
      md: "calc(var(--tsrd-font-size) * 0.375)",
      lg: "calc(var(--tsrd-font-size) * 0.5)",
      xl: "calc(var(--tsrd-font-size) * 0.75)",
      "2xl": "calc(var(--tsrd-font-size) * 1)",
      "3xl": "calc(var(--tsrd-font-size) * 1.5)",
      full: "9999px"
    }
  },
  size: {
    0: "0px",
    0.25: "calc(var(--tsrd-font-size) * 0.0625)",
    0.5: "calc(var(--tsrd-font-size) * 0.125)",
    1: "calc(var(--tsrd-font-size) * 0.25)",
    1.5: "calc(var(--tsrd-font-size) * 0.375)",
    2: "calc(var(--tsrd-font-size) * 0.5)",
    2.5: "calc(var(--tsrd-font-size) * 0.625)",
    3: "calc(var(--tsrd-font-size) * 0.75)",
    3.5: "calc(var(--tsrd-font-size) * 0.875)",
    4: "calc(var(--tsrd-font-size) * 1)",
    4.5: "calc(var(--tsrd-font-size) * 1.125)",
    5: "calc(var(--tsrd-font-size) * 1.25)",
    5.5: "calc(var(--tsrd-font-size) * 1.375)",
    6: "calc(var(--tsrd-font-size) * 1.5)",
    6.5: "calc(var(--tsrd-font-size) * 1.625)",
    7: "calc(var(--tsrd-font-size) * 1.75)",
    8: "calc(var(--tsrd-font-size) * 2)",
    9: "calc(var(--tsrd-font-size) * 2.25)",
    10: "calc(var(--tsrd-font-size) * 2.5)",
    11: "calc(var(--tsrd-font-size) * 2.75)",
    12: "calc(var(--tsrd-font-size) * 3)",
    14: "calc(var(--tsrd-font-size) * 3.5)",
    16: "calc(var(--tsrd-font-size) * 4)",
    20: "calc(var(--tsrd-font-size) * 5)",
    24: "calc(var(--tsrd-font-size) * 6)",
    28: "calc(var(--tsrd-font-size) * 7)",
    32: "calc(var(--tsrd-font-size) * 8)",
    36: "calc(var(--tsrd-font-size) * 9)",
    40: "calc(var(--tsrd-font-size) * 10)",
    44: "calc(var(--tsrd-font-size) * 11)",
    48: "calc(var(--tsrd-font-size) * 12)",
    52: "calc(var(--tsrd-font-size) * 13)",
    56: "calc(var(--tsrd-font-size) * 14)",
    60: "calc(var(--tsrd-font-size) * 15)",
    64: "calc(var(--tsrd-font-size) * 16)",
    72: "calc(var(--tsrd-font-size) * 18)",
    80: "calc(var(--tsrd-font-size) * 20)",
    96: "calc(var(--tsrd-font-size) * 24)"
  },
  shadow: {
    xs: (_ = "rgb(0 0 0 / 0.1)") => `0 1px 2px 0 rgb(0 0 0 / 0.05)`,
    sm: (color = "rgb(0 0 0 / 0.1)") => `0 1px 3px 0 ${color}, 0 1px 2px -1px ${color}`,
    md: (color = "rgb(0 0 0 / 0.1)") => `0 4px 6px -1px ${color}, 0 2px 4px -2px ${color}`,
    lg: (color = "rgb(0 0 0 / 0.1)") => `0 10px 15px -3px ${color}, 0 4px 6px -4px ${color}`,
    xl: (color = "rgb(0 0 0 / 0.1)") => `0 20px 25px -5px ${color}, 0 8px 10px -6px ${color}`,
    "2xl": (color = "rgb(0 0 0 / 0.25)") => `0 25px 50px -12px ${color}`,
    inner: (color = "rgb(0 0 0 / 0.05)") => `inset 0 2px 4px 0 ${color}`,
    none: () => `none`
  },
  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  }
};

// node_modules/@tanstack/router-devtools/dist/esm/Explorer.js
var Expander = ({ expanded, style = {} }) => (0, import_jsx_runtime7.jsx)("span", { className: getStyles().expander, children: (0, import_jsx_runtime7.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    viewBox: "0 0 24 24",
    className: clsx(getStyles().expanderIcon(expanded)),
    children: (0, import_jsx_runtime7.jsx)(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M9 18l6-6-6-6"
      }
    )
  }
) });
function chunkArray(array, size) {
  if (size < 1)
    return [];
  let i2 = 0;
  const result = [];
  while (i2 < array.length) {
    result.push(array.slice(i2, i2 + size));
    i2 = i2 + size;
  }
  return result;
}
var DefaultRenderer = ({
  handleEntry,
  label,
  value,
  subEntries = [],
  subEntryPages = [],
  type,
  expanded = false,
  toggleExpanded,
  pageSize,
  renderer
}) => {
  const [expandedPages, setExpandedPages] = React13.useState([]);
  const [valueSnapshot, setValueSnapshot] = React13.useState(void 0);
  const refreshValueSnapshot = () => {
    setValueSnapshot(value());
  };
  return (0, import_jsx_runtime7.jsx)("div", { className: getStyles().entry, children: subEntryPages.length ? (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    (0, import_jsx_runtime7.jsxs)(
      "button",
      {
        className: getStyles().expandButton,
        onClick: () => toggleExpanded(),
        children: [
          (0, import_jsx_runtime7.jsx)(Expander, { expanded }),
          label,
          (0, import_jsx_runtime7.jsxs)("span", { className: getStyles().info, children: [
            String(type).toLowerCase() === "iterable" ? "(Iterable) " : "",
            subEntries.length,
            " ",
            subEntries.length > 1 ? `items` : `item`
          ] })
        ]
      }
    ),
    expanded ? subEntryPages.length === 1 ? (0, import_jsx_runtime7.jsx)("div", { className: getStyles().subEntries, children: subEntries.map((entry, index) => handleEntry(entry)) }) : (0, import_jsx_runtime7.jsx)("div", { className: getStyles().subEntries, children: subEntryPages.map((entries, index) => {
      return (0, import_jsx_runtime7.jsx)("div", { children: (0, import_jsx_runtime7.jsxs)("div", { className: getStyles().entry, children: [
        (0, import_jsx_runtime7.jsxs)(
          "button",
          {
            className: clsx(getStyles().labelButton, "labelButton"),
            onClick: () => setExpandedPages(
              (old) => old.includes(index) ? old.filter((d) => d !== index) : [...old, index]
            ),
            children: [
              (0, import_jsx_runtime7.jsx)(Expander, { expanded: expandedPages.includes(index) }),
              " ",
              "[",
              index * pageSize,
              " ...",
              " ",
              index * pageSize + pageSize - 1,
              "]"
            ]
          }
        ),
        expandedPages.includes(index) ? (0, import_jsx_runtime7.jsx)("div", { className: getStyles().subEntries, children: entries.map((entry) => handleEntry(entry)) }) : null
      ] }) }, index);
    }) }) : null
  ] }) : type === "function" ? (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: (0, import_jsx_runtime7.jsx)(
    Explorer,
    {
      renderer,
      label: (0, import_jsx_runtime7.jsxs)(
        "button",
        {
          onClick: refreshValueSnapshot,
          className: getStyles().refreshValueBtn,
          children: [
            (0, import_jsx_runtime7.jsx)("span", { children: label }),
            " 🔄",
            " "
          ]
        }
      ),
      value: valueSnapshot,
      defaultExpanded: {}
    }
  ) }) : (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    (0, import_jsx_runtime7.jsxs)("span", { children: [
      label,
      ":"
    ] }),
    " ",
    (0, import_jsx_runtime7.jsx)("span", { className: getStyles().value, children: displayValue(value) })
  ] }) });
};
function isIterable(x) {
  return Symbol.iterator in x;
}
function Explorer({
  value,
  defaultExpanded,
  renderer = DefaultRenderer,
  pageSize = 100,
  filterSubEntries,
  ...rest
}) {
  const [expanded, setExpanded] = React13.useState(Boolean(defaultExpanded));
  const toggleExpanded = React13.useCallback(() => setExpanded((old) => !old), []);
  let type = typeof value;
  let subEntries = [];
  const makeProperty = (sub) => {
    const subDefaultExpanded = defaultExpanded === true ? { [sub.label]: true } : defaultExpanded == null ? void 0 : defaultExpanded[sub.label];
    return {
      ...sub,
      defaultExpanded: subDefaultExpanded
    };
  };
  if (Array.isArray(value)) {
    type = "array";
    subEntries = value.map(
      (d, i2) => makeProperty({
        label: i2.toString(),
        value: d
      })
    );
  } else if (value !== null && typeof value === "object" && isIterable(value) && typeof value[Symbol.iterator] === "function") {
    type = "Iterable";
    subEntries = Array.from(
      value,
      (val, i2) => makeProperty({
        label: i2.toString(),
        value: val
      })
    );
  } else if (typeof value === "object" && value !== null) {
    type = "object";
    subEntries = Object.entries(value).map(
      ([key, val]) => makeProperty({
        label: key,
        value: val
      })
    );
  }
  subEntries = filterSubEntries ? filterSubEntries(subEntries) : subEntries;
  const subEntryPages = chunkArray(subEntries, pageSize);
  return renderer({
    handleEntry: (entry) => (0, import_jsx_runtime7.jsx)(
      Explorer,
      {
        value,
        renderer,
        filterSubEntries,
        ...rest,
        ...entry
      },
      entry.label
    ),
    type,
    subEntries,
    subEntryPages,
    value,
    expanded,
    toggleExpanded,
    pageSize,
    ...rest
  });
}
var stylesFactory = () => {
  const { colors, font, size, alpha, shadow, border } = tokens;
  const { fontFamily, lineHeight, size: fontSize } = font;
  return {
    entry: u`
      font-family: ${fontFamily.mono};
      font-size: ${fontSize.xs};
      line-height: ${lineHeight.sm};
      outline: none;
      word-break: break-word;
    `,
    labelButton: u`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,
    expander: u`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${size[3]};
      height: ${size[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,
    expanderIcon: (expanded) => {
      if (expanded) {
        return u`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `;
      }
      return u`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `;
    },
    expandButton: u`
      display: flex;
      gap: ${size[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,
    value: u`
      color: ${colors.purple[400]};
    `,
    subEntries: u`
      margin-left: ${size[2]};
      padding-left: ${size[2]};
      border-left: 2px solid ${colors.darkGray[400]};
    `,
    info: u`
      color: ${colors.gray[500]};
      font-size: ${fontSize["2xs"]};
      padding-left: ${size[1]};
    `,
    refreshValueBtn: u`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${fontFamily.mono};
      font-size: ${fontSize.xs};
    `
  };
};
var _styles = null;
function getStyles() {
  if (_styles)
    return _styles;
  _styles = stylesFactory();
  return _styles;
}

// node_modules/@tanstack/router-devtools/dist/esm/logo.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);
function TanStackLogo() {
  const id = import_react3.default.useId();
  return (0, import_jsx_runtime8.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      enableBackground: "new 0 0 634 633",
      viewBox: "0 0 634 633",
      children: (0, import_jsx_runtime8.jsxs)("g", { transform: "translate(1)", children: [
        (0, import_jsx_runtime8.jsxs)(
          "linearGradient",
          {
            id: `a-${id}`,
            x1: "-641.486",
            x2: "-641.486",
            y1: "856.648",
            y2: "855.931",
            gradientTransform: "matrix(633 0 0 -633 406377 542258)",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#6bdaff" }),
              (0, import_jsx_runtime8.jsx)("stop", { offset: "0.319", stopColor: "#f9ffb5" }),
              (0, import_jsx_runtime8.jsx)("stop", { offset: "0.706", stopColor: "#ffa770" }),
              (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#ff7373" })
            ]
          }
        ),
        (0, import_jsx_runtime8.jsx)(
          "circle",
          {
            cx: "316.5",
            cy: "316.5",
            r: "316.5",
            fill: `url(#a-${id})`,
            fillRule: "evenodd",
            clipRule: "evenodd"
          }
        ),
        (0, import_jsx_runtime8.jsx)("defs", { children: (0, import_jsx_runtime8.jsx)(
          "filter",
          {
            id: `b-${id}`,
            width: "454",
            height: "396.9",
            x: "-137.5",
            y: "412",
            filterUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("feColorMatrix", { values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" })
          }
        ) }),
        (0, import_jsx_runtime8.jsx)(
          "mask",
          {
            id: `c-${id}`,
            width: "454",
            height: "396.9",
            x: "-137.5",
            y: "412",
            maskUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("g", { filter: `url(#b-${id})`, children: (0, import_jsx_runtime8.jsx)(
              "circle",
              {
                cx: "316.5",
                cy: "316.5",
                r: "316.5",
                fill: "#FFF",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }
            ) })
          }
        ),
        (0, import_jsx_runtime8.jsx)(
          "ellipse",
          {
            cx: "89.5",
            cy: "610.5",
            fill: "#015064",
            fillRule: "evenodd",
            stroke: "#00CFE2",
            strokeWidth: "25",
            clipRule: "evenodd",
            mask: `url(#c-${id})`,
            rx: "214.5",
            ry: "186"
          }
        ),
        (0, import_jsx_runtime8.jsx)("defs", { children: (0, import_jsx_runtime8.jsx)(
          "filter",
          {
            id: `d-${id}`,
            width: "454",
            height: "396.9",
            x: "316.5",
            y: "412",
            filterUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("feColorMatrix", { values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" })
          }
        ) }),
        (0, import_jsx_runtime8.jsx)(
          "mask",
          {
            id: `e-${id}`,
            width: "454",
            height: "396.9",
            x: "316.5",
            y: "412",
            maskUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("g", { filter: `url(#d-${id})`, children: (0, import_jsx_runtime8.jsx)(
              "circle",
              {
                cx: "316.5",
                cy: "316.5",
                r: "316.5",
                fill: "#FFF",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }
            ) })
          }
        ),
        (0, import_jsx_runtime8.jsx)(
          "ellipse",
          {
            cx: "543.5",
            cy: "610.5",
            fill: "#015064",
            fillRule: "evenodd",
            stroke: "#00CFE2",
            strokeWidth: "25",
            clipRule: "evenodd",
            mask: `url(#e-${id})`,
            rx: "214.5",
            ry: "186"
          }
        ),
        (0, import_jsx_runtime8.jsx)("defs", { children: (0, import_jsx_runtime8.jsx)(
          "filter",
          {
            id: `f-${id}`,
            width: "454",
            height: "396.9",
            x: "-137.5",
            y: "450",
            filterUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("feColorMatrix", { values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" })
          }
        ) }),
        (0, import_jsx_runtime8.jsx)(
          "mask",
          {
            id: `g-${id}`,
            width: "454",
            height: "396.9",
            x: "-137.5",
            y: "450",
            maskUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("g", { filter: `url(#f-${id})`, children: (0, import_jsx_runtime8.jsx)(
              "circle",
              {
                cx: "316.5",
                cy: "316.5",
                r: "316.5",
                fill: "#FFF",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }
            ) })
          }
        ),
        (0, import_jsx_runtime8.jsx)(
          "ellipse",
          {
            cx: "89.5",
            cy: "648.5",
            fill: "#015064",
            fillRule: "evenodd",
            stroke: "#00A8B8",
            strokeWidth: "25",
            clipRule: "evenodd",
            mask: `url(#g-${id})`,
            rx: "214.5",
            ry: "186"
          }
        ),
        (0, import_jsx_runtime8.jsx)("defs", { children: (0, import_jsx_runtime8.jsx)(
          "filter",
          {
            id: `h-${id}`,
            width: "454",
            height: "396.9",
            x: "316.5",
            y: "450",
            filterUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("feColorMatrix", { values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" })
          }
        ) }),
        (0, import_jsx_runtime8.jsx)(
          "mask",
          {
            id: `i-${id}`,
            width: "454",
            height: "396.9",
            x: "316.5",
            y: "450",
            maskUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("g", { filter: `url(#h-${id})`, children: (0, import_jsx_runtime8.jsx)(
              "circle",
              {
                cx: "316.5",
                cy: "316.5",
                r: "316.5",
                fill: "#FFF",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }
            ) })
          }
        ),
        (0, import_jsx_runtime8.jsx)(
          "ellipse",
          {
            cx: "543.5",
            cy: "648.5",
            fill: "#015064",
            fillRule: "evenodd",
            stroke: "#00A8B8",
            strokeWidth: "25",
            clipRule: "evenodd",
            mask: `url(#i-${id})`,
            rx: "214.5",
            ry: "186"
          }
        ),
        (0, import_jsx_runtime8.jsx)("defs", { children: (0, import_jsx_runtime8.jsx)(
          "filter",
          {
            id: `j-${id}`,
            width: "454",
            height: "396.9",
            x: "-137.5",
            y: "486",
            filterUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("feColorMatrix", { values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" })
          }
        ) }),
        (0, import_jsx_runtime8.jsx)(
          "mask",
          {
            id: `k-${id}`,
            width: "454",
            height: "396.9",
            x: "-137.5",
            y: "486",
            maskUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("g", { filter: `url(#j-${id})`, children: (0, import_jsx_runtime8.jsx)(
              "circle",
              {
                cx: "316.5",
                cy: "316.5",
                r: "316.5",
                fill: "#FFF",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }
            ) })
          }
        ),
        (0, import_jsx_runtime8.jsx)(
          "ellipse",
          {
            cx: "89.5",
            cy: "684.5",
            fill: "#015064",
            fillRule: "evenodd",
            stroke: "#007782",
            strokeWidth: "25",
            clipRule: "evenodd",
            mask: `url(#k-${id})`,
            rx: "214.5",
            ry: "186"
          }
        ),
        (0, import_jsx_runtime8.jsx)("defs", { children: (0, import_jsx_runtime8.jsx)(
          "filter",
          {
            id: `l-${id}`,
            width: "454",
            height: "396.9",
            x: "316.5",
            y: "486",
            filterUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("feColorMatrix", { values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" })
          }
        ) }),
        (0, import_jsx_runtime8.jsx)(
          "mask",
          {
            id: `m-${id}`,
            width: "454",
            height: "396.9",
            x: "316.5",
            y: "486",
            maskUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("g", { filter: `url(#l-${id})`, children: (0, import_jsx_runtime8.jsx)(
              "circle",
              {
                cx: "316.5",
                cy: "316.5",
                r: "316.5",
                fill: "#FFF",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }
            ) })
          }
        ),
        (0, import_jsx_runtime8.jsx)(
          "ellipse",
          {
            cx: "543.5",
            cy: "684.5",
            fill: "#015064",
            fillRule: "evenodd",
            stroke: "#007782",
            strokeWidth: "25",
            clipRule: "evenodd",
            mask: `url(#m-${id})`,
            rx: "214.5",
            ry: "186"
          }
        ),
        (0, import_jsx_runtime8.jsx)("defs", { children: (0, import_jsx_runtime8.jsx)(
          "filter",
          {
            id: `n-${id}`,
            width: "176.9",
            height: "129.3",
            x: "272.2",
            y: "308",
            filterUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("feColorMatrix", { values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" })
          }
        ) }),
        (0, import_jsx_runtime8.jsx)(
          "mask",
          {
            id: `o-${id}`,
            width: "176.9",
            height: "129.3",
            x: "272.2",
            y: "308",
            maskUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("g", { filter: `url(#n-${id})`, children: (0, import_jsx_runtime8.jsx)(
              "circle",
              {
                cx: "316.5",
                cy: "316.5",
                r: "316.5",
                fill: "#FFF",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }
            ) })
          }
        ),
        (0, import_jsx_runtime8.jsxs)("g", { mask: `url(#o-${id})`, children: [
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: "none",
              stroke: "#000",
              strokeLinecap: "round",
              strokeLinejoin: "bevel",
              strokeWidth: "11",
              d: "M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1"
            }
          ),
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `p-${id}`,
              x1: "-645.656",
              x2: "-646.499",
              y1: "854.878",
              y2: "854.788",
              gradientTransform: "matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#ee2700" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#ff008e" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: `url(#p-${id})`,
              fillRule: "evenodd",
              d: "M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z",
              clipRule: "evenodd"
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: "#D8D8D8",
              fillRule: "evenodd",
              stroke: "#FFF",
              strokeLinecap: "round",
              strokeLinejoin: "bevel",
              strokeWidth: "7",
              d: "M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9",
              clipRule: "evenodd"
            }
          )
        ] }),
        (0, import_jsx_runtime8.jsx)("defs", { children: (0, import_jsx_runtime8.jsx)(
          "filter",
          {
            id: `q-${id}`,
            width: "280.6",
            height: "317.4",
            x: "73.2",
            y: "113.9",
            filterUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("feColorMatrix", { values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" })
          }
        ) }),
        (0, import_jsx_runtime8.jsx)(
          "mask",
          {
            id: `r-${id}`,
            width: "280.6",
            height: "317.4",
            x: "73.2",
            y: "113.9",
            maskUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("g", { filter: `url(#q-${id})`, children: (0, import_jsx_runtime8.jsx)(
              "circle",
              {
                cx: "316.5",
                cy: "316.5",
                r: "316.5",
                fill: "#FFF",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }
            ) })
          }
        ),
        (0, import_jsx_runtime8.jsxs)("g", { mask: `url(#r-${id})`, children: [
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `s-${id}`,
              x1: "-646.8",
              x2: "-646.8",
              y1: "854.844",
              y2: "853.844",
              gradientTransform: "matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#a17500" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#5d2100" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: `url(#s-${id})`,
              fillRule: "evenodd",
              d: "M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6",
              clipRule: "evenodd"
            }
          ),
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `t-${id}`,
              x1: "-635.467",
              x2: "-635.467",
              y1: "852.115",
              y2: "851.115",
              gradientTransform: "matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#2f8a00" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#90ff57" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: `url(#t-${id})`,
              fillRule: "evenodd",
              stroke: "#2F8A00",
              strokeWidth: "13",
              d: "M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z",
              clipRule: "evenodd"
            }
          ),
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `u-${id}`,
              x1: "-636.573",
              x2: "-636.573",
              y1: "855.444",
              y2: "854.444",
              gradientTransform: "matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#2f8a00" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#90ff57" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: `url(#u-${id})`,
              fillRule: "evenodd",
              stroke: "#2F8A00",
              strokeWidth: "13",
              d: "M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z",
              clipRule: "evenodd"
            }
          ),
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `v-${id}`,
              x1: "-632.145",
              x2: "-632.145",
              y1: "854.174",
              y2: "853.174",
              gradientTransform: "matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#2f8a00" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#90ff57" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: `url(#v-${id})`,
              fillRule: "evenodd",
              stroke: "#2F8A00",
              strokeWidth: "13",
              d: "M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z",
              clipRule: "evenodd"
            }
          ),
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `w-${id}`,
              x1: "-638.224",
              x2: "-638.224",
              y1: "853.801",
              y2: "852.801",
              gradientTransform: "matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#2f8a00" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#90ff57" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: `url(#w-${id})`,
              fillRule: "evenodd",
              stroke: "#2F8A00",
              strokeWidth: "13",
              d: "M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z",
              clipRule: "evenodd"
            }
          ),
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `x-${id}`,
              x1: "-637.723",
              x2: "-637.723",
              y1: "855.103",
              y2: "854.103",
              gradientTransform: "matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#2f8a00" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#90ff57" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: `url(#x-${id})`,
              fillRule: "evenodd",
              stroke: "#2F8A00",
              strokeWidth: "13",
              d: "M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z",
              clipRule: "evenodd"
            }
          ),
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `y-${id}`,
              x1: "-631.79",
              x2: "-631.79",
              y1: "855.872",
              y2: "854.872",
              gradientTransform: "matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#2f8a00" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#90ff57" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: `url(#y-${id})`,
              fillRule: "evenodd",
              stroke: "#2F8A00",
              strokeWidth: "13",
              d: "M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z",
              clipRule: "evenodd"
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: "none",
              stroke: "#2F8A00",
              strokeLinecap: "round",
              strokeWidth: "8",
              d: "M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1"
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: "none",
              stroke: "#2F8A00",
              strokeLinecap: "round",
              strokeWidth: "8",
              d: "M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32"
            }
          )
        ] }),
        (0, import_jsx_runtime8.jsx)("defs", { children: (0, import_jsx_runtime8.jsx)(
          "filter",
          {
            id: `z-${id}`,
            width: "532",
            height: "633",
            x: "50.5",
            y: "399",
            filterUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("feColorMatrix", { values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" })
          }
        ) }),
        (0, import_jsx_runtime8.jsx)(
          "mask",
          {
            id: `A-${id}`,
            width: "532",
            height: "633",
            x: "50.5",
            y: "399",
            maskUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("g", { filter: `url(#z-${id})`, children: (0, import_jsx_runtime8.jsx)(
              "circle",
              {
                cx: "316.5",
                cy: "316.5",
                r: "316.5",
                fill: "#FFF",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }
            ) })
          }
        ),
        (0, import_jsx_runtime8.jsxs)(
          "linearGradient",
          {
            id: `B-${id}`,
            x1: "-641.104",
            x2: "-641.278",
            y1: "856.577",
            y2: "856.183",
            gradientTransform: "matrix(532 0 0 -633 341484.5 542657)",
            gradientUnits: "userSpaceOnUse",
            children: [
              (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#fff400" }),
              (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#3c8700" })
            ]
          }
        ),
        (0, import_jsx_runtime8.jsx)(
          "ellipse",
          {
            cx: "316.5",
            cy: "715.5",
            fill: `url(#B-${id})`,
            fillRule: "evenodd",
            clipRule: "evenodd",
            mask: `url(#A-${id})`,
            rx: "266",
            ry: "316.5"
          }
        ),
        (0, import_jsx_runtime8.jsx)("defs", { children: (0, import_jsx_runtime8.jsx)(
          "filter",
          {
            id: `C-${id}`,
            width: "288",
            height: "283",
            x: "391",
            y: "-24",
            filterUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("feColorMatrix", { values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" })
          }
        ) }),
        (0, import_jsx_runtime8.jsx)(
          "mask",
          {
            id: `D-${id}`,
            width: "288",
            height: "283",
            x: "391",
            y: "-24",
            maskUnits: "userSpaceOnUse",
            children: (0, import_jsx_runtime8.jsx)("g", { filter: `url(#C-${id})`, children: (0, import_jsx_runtime8.jsx)(
              "circle",
              {
                cx: "316.5",
                cy: "316.5",
                r: "316.5",
                fill: "#FFF",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }
            ) })
          }
        ),
        (0, import_jsx_runtime8.jsx)("g", { mask: `url(#D-${id})`, children: (0, import_jsx_runtime8.jsxs)("g", { transform: "translate(397 -24)", children: [
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `E-${id}`,
              x1: "-1036.672",
              x2: "-1036.672",
              y1: "880.018",
              y2: "879.018",
              gradientTransform: "matrix(227 0 0 -227 235493 199764)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#ffdf00" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#ff9d00" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "circle",
            {
              cx: "168.5",
              cy: "113.5",
              r: "113.5",
              fill: `url(#E-${id})`,
              fillRule: "evenodd",
              clipRule: "evenodd"
            }
          ),
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `F-${id}`,
              x1: "-1017.329",
              x2: "-1018.602",
              y1: "658.003",
              y2: "657.998",
              gradientTransform: "matrix(30 0 0 -1 30558 771)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#ffa400" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#ff5e00" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: "none",
              stroke: `url(#F-${id})`,
              strokeLinecap: "round",
              strokeLinejoin: "bevel",
              strokeWidth: "12",
              d: "M30 113H0"
            }
          ),
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `G-${id}`,
              x1: "-1014.501",
              x2: "-1015.774",
              y1: "839.985",
              y2: "839.935",
              gradientTransform: "matrix(26.5 0 0 -5.5 26925 4696.5)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#ffa400" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#ff5e00" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: "none",
              stroke: `url(#G-${id})`,
              strokeLinecap: "round",
              strokeLinejoin: "bevel",
              strokeWidth: "12",
              d: "M33.5 79.5L7 74"
            }
          ),
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `H-${id}`,
              x1: "-1016.59",
              x2: "-1017.862",
              y1: "852.671",
              y2: "852.595",
              gradientTransform: "matrix(29 0 0 -8 29523 6971)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#ffa400" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#ff5e00" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: "none",
              stroke: `url(#H-${id})`,
              strokeLinecap: "round",
              strokeLinejoin: "bevel",
              strokeWidth: "12",
              d: "M34 146l-29 8"
            }
          ),
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `I-${id}`,
              x1: "-1011.984",
              x2: "-1013.257",
              y1: "863.523",
              y2: "863.229",
              gradientTransform: "matrix(24 0 0 -13 24339 11407)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#ffa400" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#ff5e00" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: "none",
              stroke: `url(#I-${id})`,
              strokeLinecap: "round",
              strokeLinejoin: "bevel",
              strokeWidth: "12",
              d: "M45 177l-24 13"
            }
          ),
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `J-${id}`,
              x1: "-1006.673",
              x2: "-1007.946",
              y1: "869.279",
              y2: "868.376",
              gradientTransform: "matrix(20 0 0 -19 20205 16720)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#ffa400" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#ff5e00" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: "none",
              stroke: `url(#J-${id})`,
              strokeLinecap: "round",
              strokeLinejoin: "bevel",
              strokeWidth: "12",
              d: "M67 204l-20 19"
            }
          ),
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `K-${id}`,
              x1: "-992.85",
              x2: "-993.317",
              y1: "871.258",
              y2: "870.258",
              gradientTransform: "matrix(13.8339 0 0 -22.8467 13825.796 20131.938)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#ffa400" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#ff5e00" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: "none",
              stroke: `url(#K-${id})`,
              strokeLinecap: "round",
              strokeLinejoin: "bevel",
              strokeWidth: "12",
              d: "M94.4 227l-13.8 22.8"
            }
          ),
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `L-${id}`,
              x1: "-953.835",
              x2: "-953.965",
              y1: "871.9",
              y2: "870.9",
              gradientTransform: "matrix(7.5 0 0 -24.5 7278 21605)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#ffa400" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#ff5e00" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: "none",
              stroke: `url(#L-${id})`,
              strokeLinecap: "round",
              strokeLinejoin: "bevel",
              strokeWidth: "12",
              d: "M127.5 243.5L120 268"
            }
          ),
          (0, import_jsx_runtime8.jsxs)(
            "linearGradient",
            {
              id: `M-${id}`,
              x1: "244.504",
              x2: "244.496",
              y1: "871.898",
              y2: "870.898",
              gradientTransform: "matrix(.5 0 0 -24.5 45.5 21614)",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, import_jsx_runtime8.jsx)("stop", { offset: "0", stopColor: "#ffa400" }),
                (0, import_jsx_runtime8.jsx)("stop", { offset: "1", stopColor: "#ff5e00" })
              ]
            }
          ),
          (0, import_jsx_runtime8.jsx)(
            "path",
            {
              fill: "none",
              stroke: `url(#M-${id})`,
              strokeLinecap: "round",
              strokeLinejoin: "bevel",
              strokeWidth: "12",
              d: "M167.5 252.5l.5 24.5"
            }
          )
        ] }) })
      ] })
    }
  );
}

// node_modules/@tanstack/router-devtools/dist/esm/devtools.js
function Logo(props) {
  const { className, ...rest } = props;
  return (0, import_jsx_runtime9.jsxs)("button", { ...rest, className: clsx(getStyles2().logo, className), children: [
    (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().tanstackLogo, children: "TANSTACK" }),
    (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().routerLogo, children: "React Router v1" })
  ] });
}
var DevtoolsOnCloseContext = import_react4.default.createContext(void 0);
var useDevtoolsOnClose = () => {
  const context = import_react4.default.useContext(DevtoolsOnCloseContext);
  if (!context) {
    throw new Error(
      "useDevtoolsOnClose must be used within a TanStackRouterDevtools component"
    );
  }
  return context;
};
function TanStackRouterDevtools({
  initialIsOpen,
  panelProps = {},
  closeButtonProps = {},
  toggleButtonProps = {},
  position = "bottom-left",
  containerElement: Container = "footer",
  router
}) {
  const [rootEl, setRootEl] = import_react4.default.useState(null);
  const panelRef = import_react4.default.useRef(null);
  const [isOpen, setIsOpen] = useLocalStorage(
    "tanstackRouterDevtoolsOpen",
    initialIsOpen
  );
  const [devtoolsHeight, setDevtoolsHeight] = useLocalStorage(
    "tanstackRouterDevtoolsHeight",
    null
  );
  const [isResolvedOpen, setIsResolvedOpen] = useSafeState(false);
  const [isResizing, setIsResizing] = useSafeState(false);
  const isMounted = useIsMounted();
  const handleDragStart = (panelElement, startEvent) => {
    if (startEvent.button !== 0)
      return;
    setIsResizing(true);
    const dragInfo = {
      originalHeight: (panelElement == null ? void 0 : panelElement.getBoundingClientRect().height) ?? 0,
      pageY: startEvent.pageY
    };
    const run = (moveEvent) => {
      const delta = dragInfo.pageY - moveEvent.pageY;
      const newHeight = (dragInfo == null ? void 0 : dragInfo.originalHeight) + delta;
      setDevtoolsHeight(newHeight);
      if (newHeight < 70) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    const unsub = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", run);
      document.removeEventListener("mouseUp", unsub);
    };
    document.addEventListener("mousemove", run);
    document.addEventListener("mouseup", unsub);
  };
  const isButtonClosed = isOpen ?? false;
  import_react4.default.useEffect(() => {
    setIsResolvedOpen(isOpen ?? false);
  }, [isOpen, isResolvedOpen, setIsResolvedOpen]);
  import_react4.default.useEffect(() => {
    var _a;
    if (isResolvedOpen) {
      const previousValue = (_a = rootEl == null ? void 0 : rootEl.parentElement) == null ? void 0 : _a.style.paddingBottom;
      const run = () => {
        var _a2;
        const containerHeight = (_a2 = panelRef.current) == null ? void 0 : _a2.getBoundingClientRect().height;
        if (rootEl == null ? void 0 : rootEl.parentElement) {
          rootEl.parentElement.style.paddingBottom = `${containerHeight}px`;
        }
      };
      run();
      if (typeof window !== "undefined") {
        window.addEventListener("resize", run);
        return () => {
          window.removeEventListener("resize", run);
          if ((rootEl == null ? void 0 : rootEl.parentElement) && typeof previousValue === "string") {
            rootEl.parentElement.style.paddingBottom = previousValue;
          }
        };
      }
    }
    return;
  }, [isResolvedOpen]);
  import_react4.default.useEffect(() => {
    if (rootEl) {
      const el = rootEl;
      const fontSize = getComputedStyle(el).fontSize;
      el.style.setProperty("--tsrd-font-size", fontSize);
    }
  }, [rootEl]);
  const { style: panelStyle = {}, ...otherPanelProps } = panelProps;
  const {
    style: closeButtonStyle = {},
    onClick: onCloseClick,
    ...otherCloseButtonProps
  } = closeButtonProps;
  const {
    style: toggleButtonStyle = {},
    onClick: onToggleClick,
    ...otherToggleButtonProps
  } = toggleButtonProps;
  if (!isMounted())
    return null;
  const resolvedHeight = devtoolsHeight ?? 500;
  return (0, import_jsx_runtime9.jsxs)(Container, { ref: setRootEl, className: "TanStackRouterDevtools", children: [
    (0, import_jsx_runtime9.jsx)(
      DevtoolsOnCloseContext.Provider,
      {
        value: {
          onCloseClick: onCloseClick ?? (() => {
          })
        },
        children: (0, import_jsx_runtime9.jsx)(
          TanStackRouterDevtoolsPanel,
          {
            ref: panelRef,
            ...otherPanelProps,
            router,
            className: clsx(
              getStyles2().devtoolsPanelContainer,
              getStyles2().devtoolsPanelContainerVisibility(!!isOpen),
              getStyles2().devtoolsPanelContainerResizing(isResizing),
              getStyles2().devtoolsPanelContainerAnimation(
                isResolvedOpen,
                resolvedHeight + 16
              )
            ),
            style: {
              height: resolvedHeight,
              ...panelStyle
            },
            isOpen: isResolvedOpen,
            setIsOpen,
            handleDragStart: (e2) => handleDragStart(panelRef.current, e2)
          }
        )
      }
    ),
    (0, import_jsx_runtime9.jsxs)(
      "button",
      {
        type: "button",
        ...otherToggleButtonProps,
        "aria-label": "Open TanStack Router Devtools",
        onClick: (e2) => {
          setIsOpen(true);
          onToggleClick && onToggleClick(e2);
        },
        className: clsx(
          getStyles2().mainCloseBtn,
          getStyles2().mainCloseBtnPosition(position),
          getStyles2().mainCloseBtnAnimation(!isButtonClosed)
        ),
        children: [
          (0, import_jsx_runtime9.jsxs)("div", { className: getStyles2().mainCloseBtnIconContainer, children: [
            (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().mainCloseBtnIconOuter, children: (0, import_jsx_runtime9.jsx)(TanStackLogo, {}) }),
            (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().mainCloseBtnIconInner, children: (0, import_jsx_runtime9.jsx)(TanStackLogo, {}) })
          ] }),
          (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().mainCloseBtnDivider, children: "-" }),
          (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().routerLogoCloseButton, children: "TanStack Router" })
        ]
      }
    )
  ] });
}
function RouteComp({
  route,
  isRoot,
  activeId,
  setActiveId
}) {
  var _a;
  const routerState = useRouterState();
  const matches = routerState.status === "pending" ? routerState.pendingMatches ?? [] : routerState.matches;
  const match = routerState.matches.find((d) => d.routeId === route.id);
  const param = import_react4.default.useMemo(() => {
    try {
      if (match == null ? void 0 : match.params) {
        const p2 = match.params;
        const r2 = route.path || trimPath(route.id);
        if (r2.startsWith("$")) {
          const trimmed = r2.slice(1);
          if (p2[trimmed]) {
            return `(${p2[trimmed]})`;
          }
        }
      }
      return "";
    } catch (error) {
      return "";
    }
  }, [match, route]);
  return (0, import_jsx_runtime9.jsxs)("div", { children: [
    (0, import_jsx_runtime9.jsxs)(
      "div",
      {
        role: "button",
        "aria-label": `Open match details for ${route.id}`,
        onClick: () => {
          if (match) {
            setActiveId(activeId === route.id ? "" : route.id);
          }
        },
        className: clsx(
          getStyles2().routesRowContainer(route.id === activeId, !!match)
        ),
        children: [
          (0, import_jsx_runtime9.jsx)(
            "div",
            {
              className: clsx(
                getStyles2().matchIndicator(getRouteStatusColor(matches, route))
              )
            }
          ),
          (0, import_jsx_runtime9.jsxs)("div", { className: clsx(getStyles2().routesRow(!!match)), children: [
            (0, import_jsx_runtime9.jsxs)("div", { children: [
              (0, import_jsx_runtime9.jsxs)("code", { className: getStyles2().code, children: [
                isRoot ? rootRouteId : route.path || trimPath(route.id),
                " "
              ] }),
              (0, import_jsx_runtime9.jsx)("code", { className: getStyles2().routeParamInfo, children: param })
            ] }),
            (0, import_jsx_runtime9.jsx)(AgeTicker, { match })
          ] })
        ]
      }
    ),
    ((_a = route.children) == null ? void 0 : _a.length) ? (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().nestedRouteRow(!!isRoot), children: [...route.children].sort((a2, b2) => {
      return a2.rank - b2.rank;
    }).map((r2) => (0, import_jsx_runtime9.jsx)(
      RouteComp,
      {
        route: r2,
        activeId,
        setActiveId
      },
      r2.id
    )) }) : null
  ] });
}
var TanStackRouterDevtoolsPanel = import_react4.default.forwardRef(function TanStackRouterDevtoolsPanel2(props, ref) {
  var _a, _b, _c;
  const {
    isOpen = true,
    setIsOpen,
    handleDragStart,
    router: userRouter,
    ...panelProps
  } = props;
  const { onCloseClick } = useDevtoolsOnClose();
  const { className, ...otherPanelProps } = panelProps;
  const contextRouter = useRouter({ warn: false });
  const router = userRouter ?? contextRouter;
  const routerState = useRouterState({
    router
  });
  const matches = [
    ...routerState.pendingMatches ?? [],
    ...routerState.matches,
    ...routerState.cachedMatches
  ];
  invariant(
    router,
    "No router was found for the TanStack Router Devtools. Please place the devtools in the <RouterProvider> component tree or pass the router instance to the devtools manually."
  );
  const [showMatches, setShowMatches] = useLocalStorage(
    "tanstackRouterDevtoolsShowMatches",
    true
  );
  const [activeId, setActiveId] = useLocalStorage(
    "tanstackRouterDevtoolsActiveRouteId",
    ""
  );
  const activeMatch = import_react4.default.useMemo(
    () => matches.find((d) => d.routeId === activeId || d.id === activeId),
    [matches, activeId]
  );
  const hasSearch = Object.keys(routerState.location.search || {}).length;
  const explorerState = {
    ...router,
    state: router.state
  };
  return (0, import_jsx_runtime9.jsxs)(
    "div",
    {
      ref,
      className: clsx(
        getStyles2().devtoolsPanel,
        "TanStackRouterDevtoolsPanel",
        className
      ),
      ...otherPanelProps,
      children: [
        handleDragStart ? (0, import_jsx_runtime9.jsx)(
          "div",
          {
            className: getStyles2().dragHandle,
            onMouseDown: handleDragStart
          }
        ) : null,
        (0, import_jsx_runtime9.jsx)(
          "button",
          {
            className: getStyles2().panelCloseBtn,
            onClick: (e2) => {
              setIsOpen(false);
              onCloseClick(e2);
            },
            children: (0, import_jsx_runtime9.jsx)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "10",
                height: "6",
                fill: "none",
                viewBox: "0 0 10 6",
                className: getStyles2().panelCloseBtnIcon,
                children: (0, import_jsx_runtime9.jsx)(
                  "path",
                  {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.667",
                    d: "M1 1l4 4 4-4"
                  }
                )
              }
            )
          }
        ),
        (0, import_jsx_runtime9.jsxs)("div", { className: getStyles2().firstContainer, children: [
          (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().row, children: (0, import_jsx_runtime9.jsx)(
            Logo,
            {
              "aria-hidden": true,
              onClick: (e2) => {
                setIsOpen(false);
                onCloseClick(e2);
              }
            }
          ) }),
          (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().routerExplorerContainer, children: (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().routerExplorer, children: (0, import_jsx_runtime9.jsx)(
            Explorer,
            {
              label: "Router",
              value: Object.fromEntries(
                multiSortBy(
                  Object.keys(explorerState),
                  [
                    "state",
                    "routesById",
                    "routesByPath",
                    "flatRoutes",
                    "options"
                  ].map((d) => (dd) => dd !== d)
                ).map((key) => [key, explorerState[key]]).filter(
                  (d) => typeof d[1] !== "function" && ![
                    "__store",
                    "basepath",
                    "injectedHtml",
                    "subscribers",
                    "latestLoadPromise",
                    "navigateTimeout",
                    "resetNextScroll",
                    "tempLocationKey",
                    "latestLocation",
                    "routeTree",
                    "history"
                  ].includes(d[0])
                )
              ),
              defaultExpanded: {
                state: {},
                context: {},
                options: {}
              },
              filterSubEntries: (subEntries) => {
                return subEntries.filter((d) => typeof d.value !== "function");
              }
            }
          ) }) })
        ] }),
        (0, import_jsx_runtime9.jsxs)("div", { className: getStyles2().secondContainer, children: [
          (0, import_jsx_runtime9.jsxs)("div", { className: getStyles2().matchesContainer, children: [
            (0, import_jsx_runtime9.jsxs)("div", { className: getStyles2().detailsHeader, children: [
              (0, import_jsx_runtime9.jsx)("span", { children: "Pathname" }),
              routerState.location.maskedLocation ? (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().maskedBadgeContainer, children: (0, import_jsx_runtime9.jsx)("span", { className: getStyles2().maskedBadge, children: "masked" }) }) : null
            ] }),
            (0, import_jsx_runtime9.jsxs)("div", { className: getStyles2().detailsContent, children: [
              (0, import_jsx_runtime9.jsx)("code", { children: routerState.location.pathname }),
              routerState.location.maskedLocation ? (0, import_jsx_runtime9.jsx)("code", { className: getStyles2().maskedLocation, children: routerState.location.maskedLocation.pathname }) : null
            ] }),
            (0, import_jsx_runtime9.jsxs)("div", { className: getStyles2().detailsHeader, children: [
              (0, import_jsx_runtime9.jsxs)("div", { className: getStyles2().routeMatchesToggle, children: [
                (0, import_jsx_runtime9.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setShowMatches(false);
                    },
                    disabled: !showMatches,
                    className: clsx(
                      getStyles2().routeMatchesToggleBtn(!showMatches, true)
                    ),
                    children: "Routes"
                  }
                ),
                (0, import_jsx_runtime9.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setShowMatches(true);
                    },
                    disabled: showMatches,
                    className: clsx(
                      getStyles2().routeMatchesToggleBtn(!!showMatches, false)
                    ),
                    children: "Matches"
                  }
                )
              ] }),
              (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().detailsHeaderInfo, children: (0, import_jsx_runtime9.jsx)("div", { children: "age / staleTime / gcTime" }) })
            ] }),
            (0, import_jsx_runtime9.jsx)("div", { className: clsx(getStyles2().routesContainer), children: !showMatches ? (0, import_jsx_runtime9.jsx)(
              RouteComp,
              {
                route: router.routeTree,
                isRoot: true,
                activeId,
                setActiveId
              }
            ) : (0, import_jsx_runtime9.jsx)("div", { children: (routerState.status === "pending" ? routerState.pendingMatches ?? [] : routerState.matches).map((match, i2) => {
              return (0, import_jsx_runtime9.jsxs)(
                "div",
                {
                  role: "button",
                  "aria-label": `Open match details for ${match.id}`,
                  onClick: () => setActiveId(activeId === match.id ? "" : match.id),
                  className: clsx(
                    getStyles2().matchRow(match === activeMatch)
                  ),
                  children: [
                    (0, import_jsx_runtime9.jsx)(
                      "div",
                      {
                        className: clsx(
                          getStyles2().matchIndicator(getStatusColor(match))
                        )
                      }
                    ),
                    (0, import_jsx_runtime9.jsx)(
                      "code",
                      {
                        className: getStyles2().matchID,
                        children: `${match.routeId === rootRouteId ? rootRouteId : match.pathname}`
                      }
                    ),
                    (0, import_jsx_runtime9.jsx)(AgeTicker, { match })
                  ]
                },
                match.id || i2
              );
            }) }) })
          ] }),
          ((_a = routerState.cachedMatches) == null ? void 0 : _a.length) ? (0, import_jsx_runtime9.jsxs)("div", { className: getStyles2().cachedMatchesContainer, children: [
            (0, import_jsx_runtime9.jsxs)("div", { className: getStyles2().detailsHeader, children: [
              (0, import_jsx_runtime9.jsx)("div", { children: "Cached Matches" }),
              (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().detailsHeaderInfo, children: "age / staleTime / gcTime" })
            ] }),
            (0, import_jsx_runtime9.jsx)("div", { children: routerState.cachedMatches.map((match) => {
              return (0, import_jsx_runtime9.jsxs)(
                "div",
                {
                  role: "button",
                  "aria-label": `Open match details for ${match.id}`,
                  onClick: () => setActiveId(activeId === match.id ? "" : match.id),
                  className: clsx(getStyles2().matchRow(match === activeMatch)),
                  children: [
                    (0, import_jsx_runtime9.jsx)(
                      "div",
                      {
                        className: clsx(
                          getStyles2().matchIndicator(getStatusColor(match))
                        )
                      }
                    ),
                    (0, import_jsx_runtime9.jsx)("code", { className: getStyles2().matchID, children: `${match.id}` }),
                    (0, import_jsx_runtime9.jsx)(AgeTicker, { match })
                  ]
                },
                match.id
              );
            }) })
          ] }) : null
        ] }),
        activeMatch ? (0, import_jsx_runtime9.jsxs)("div", { className: getStyles2().thirdContainer, children: [
          (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().detailsHeader, children: "Match Details" }),
          (0, import_jsx_runtime9.jsx)("div", { children: (0, import_jsx_runtime9.jsxs)("div", { className: getStyles2().matchDetails, children: [
            (0, import_jsx_runtime9.jsx)(
              "div",
              {
                className: getStyles2().matchStatus(
                  activeMatch.status,
                  activeMatch.isFetching
                ),
                children: (0, import_jsx_runtime9.jsx)("div", { children: activeMatch.status === "success" && activeMatch.isFetching ? "fetching" : activeMatch.status })
              }
            ),
            (0, import_jsx_runtime9.jsxs)("div", { className: getStyles2().matchDetailsInfoLabel, children: [
              (0, import_jsx_runtime9.jsx)("div", { children: "ID:" }),
              (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().matchDetailsInfo, children: (0, import_jsx_runtime9.jsx)("code", { children: activeMatch.id }) })
            ] }),
            (0, import_jsx_runtime9.jsxs)("div", { className: getStyles2().matchDetailsInfoLabel, children: [
              (0, import_jsx_runtime9.jsx)("div", { children: "State:" }),
              (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().matchDetailsInfo, children: ((_b = routerState.pendingMatches) == null ? void 0 : _b.find(
                (d) => d.id === activeMatch.id
              )) ? "Pending" : ((_c = routerState.matches) == null ? void 0 : _c.find((d) => d.id === activeMatch.id)) ? "Active" : "Cached" })
            ] }),
            (0, import_jsx_runtime9.jsxs)("div", { className: getStyles2().matchDetailsInfoLabel, children: [
              (0, import_jsx_runtime9.jsx)("div", { children: "Last Updated:" }),
              (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().matchDetailsInfo, children: activeMatch.updatedAt ? new Date(
                activeMatch.updatedAt
              ).toLocaleTimeString() : "N/A" })
            ] })
          ] }) }),
          activeMatch.loaderData ? (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
            (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().detailsHeader, children: "Loader Data" }),
            (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().detailsContent, children: (0, import_jsx_runtime9.jsx)(
              Explorer,
              {
                label: "loaderData",
                value: activeMatch.loaderData,
                defaultExpanded: {}
              }
            ) })
          ] }) : null,
          (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().detailsHeader, children: "Explorer" }),
          (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().detailsContent, children: (0, import_jsx_runtime9.jsx)(Explorer, { label: "Match", value: activeMatch, defaultExpanded: {} }) })
        ] }) : null,
        hasSearch ? (0, import_jsx_runtime9.jsxs)("div", { className: getStyles2().fourthContainer, children: [
          (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().detailsHeader, children: "Search Params" }),
          (0, import_jsx_runtime9.jsx)("div", { className: getStyles2().detailsContent, children: (0, import_jsx_runtime9.jsx)(
            Explorer,
            {
              value: routerState.location.search || {},
              defaultExpanded: Object.keys(
                routerState.location.search || {}
              ).reduce((obj, next) => {
                obj[next] = {};
                return obj;
              }, {})
            }
          ) })
        ] }) : null
      ]
    }
  );
});
function AgeTicker({ match }) {
  const router = useRouter();
  const rerender = import_react4.default.useReducer(
    () => ({}),
    () => ({})
  )[1];
  import_react4.default.useEffect(() => {
    const interval = setInterval(() => {
      rerender();
    }, 1e3);
    return () => {
      clearInterval(interval);
    };
  }, []);
  if (!match) {
    return null;
  }
  const route = router.looseRoutesById[match == null ? void 0 : match.routeId];
  if (!route.options.loader) {
    return null;
  }
  const age = Date.now() - (match == null ? void 0 : match.updatedAt);
  const staleTime = route.options.staleTime ?? router.options.defaultStaleTime ?? 0;
  const gcTime = route.options.gcTime ?? router.options.defaultGcTime ?? 30 * 60 * 1e3;
  return (0, import_jsx_runtime9.jsxs)("div", { className: clsx(getStyles2().ageTicker(age > staleTime)), children: [
    (0, import_jsx_runtime9.jsx)("div", { children: formatTime(age) }),
    (0, import_jsx_runtime9.jsx)("div", { children: "/" }),
    (0, import_jsx_runtime9.jsx)("div", { children: formatTime(staleTime) }),
    (0, import_jsx_runtime9.jsx)("div", { children: "/" }),
    (0, import_jsx_runtime9.jsx)("div", { children: formatTime(gcTime) })
  ] });
}
function formatTime(ms) {
  const units = ["s", "min", "h", "d"];
  const values = [ms / 1e3, ms / 6e4, ms / 36e5, ms / 864e5];
  let chosenUnitIndex = 0;
  for (let i2 = 1; i2 < values.length; i2++) {
    if (values[i2] < 1)
      break;
    chosenUnitIndex = i2;
  }
  const formatter = new Intl.NumberFormat(navigator.language, {
    compactDisplay: "short",
    notation: "compact",
    maximumFractionDigits: 0
  });
  return formatter.format(values[chosenUnitIndex]) + units[chosenUnitIndex];
}
var stylesFactory2 = () => {
  const { colors, font, size, alpha, shadow, border } = tokens;
  const { fontFamily, lineHeight, size: fontSize } = font;
  return {
    devtoolsPanelContainer: u`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${colors.gray[700]};
      transform-origin: top;
    `,
    devtoolsPanelContainerVisibility: (isOpen) => {
      return u`
        visibility: ${isOpen ? "visible" : "hidden"};
      `;
    },
    devtoolsPanelContainerResizing: (isResizing) => {
      if (isResizing) {
        return u`
          transition: none;
        `;
      }
      return u`
        transition: all 0.4s ease;
      `;
    },
    devtoolsPanelContainerAnimation: (isOpen, height) => {
      if (isOpen) {
        return u`
          pointer-events: auto;
          transform: translateY(0);
        `;
      }
      return u`
        pointer-events: none;
        transform: translateY(${height}px);
      `;
    },
    logo: u`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${fontFamily.sans};
      gap: ${tokens.size[0.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${border.radius.xs};
        outline: 2px solid ${colors.blue[800]};
      }
    `,
    tanstackLogo: u`
      font-size: ${font.size.md};
      font-weight: ${font.weight.bold};
      line-height: ${font.lineHeight.xs};
      white-space: nowrap;
      color: ${colors.gray[300]};
    `,
    routerLogo: u`
      font-weight: ${font.weight.semibold};
      font-size: ${font.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,
    devtoolsPanel: u`
      display: flex;
      font-size: ${fontSize.sm};
      font-family: ${fontFamily.sans};
      background-color: ${colors.darkGray[700]};
      color: ${colors.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${fontSize.xs};
      }
    `,
    dragHandle: u`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${colors.purple[400]}${alpha[90]};
      }
    `,
    firstContainer: u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${colors.gray[700]};
      display: flex;
      flex-direction: column;
    `,
    routerExplorerContainer: u`
      overflow-y: auto;
      flex: 1;
    `,
    routerExplorer: u`
      padding: ${tokens.size[2]};
    `,
    row: u`
      display: flex;
      align-items: center;
      padding: ${tokens.size[2]} ${tokens.size[2.5]};
      gap: ${tokens.size[2.5]};
      border-bottom: ${colors.darkGray[500]} 1px solid;
      align-items: center;
    `,
    detailsHeader: u`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${colors.darkGray[600]};
      padding: 0px ${tokens.size[2]};
      font-weight: ${font.weight.medium};
      font-size: ${font.size.xs};
      min-height: ${tokens.size[8]};
      line-height: ${font.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,
    maskedBadge: u`
      background: ${colors.yellow[900]}${alpha[70]};
      color: ${colors.yellow[300]};
      display: inline-block;
      padding: ${tokens.size[0]} ${tokens.size[2.5]};
      border-radius: ${border.radius.full};
      font-size: ${font.size.xs};
      font-weight: ${font.weight.normal};
      border: 1px solid ${colors.yellow[300]};
    `,
    maskedLocation: u`
      color: ${colors.yellow[300]};
    `,
    detailsContent: u`
      padding: ${tokens.size[1.5]} ${tokens.size[2]};
      display: flex;
      align-items: center;
      font-size: ${font.size.xs};
    `,
    routeMatchesToggle: u`
      display: flex;
      align-items: center;
      border: 1px solid ${colors.gray[500]};
      border-radius: ${border.radius.sm};
      overflow: hidden;
    `,
    routeMatchesToggleBtn: (active, showBorder) => {
      const base = u`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${fontFamily.sans};
        font-weight: ${font.weight.medium};
      `;
      const classes = [base];
      if (active) {
        const activeStyles = u`
          background: ${colors.darkGray[400]};
          color: ${colors.gray[300]};
        `;
        classes.push(activeStyles);
      } else {
        const inactiveStyles = u`
          color: ${colors.gray[500]};
          background: ${colors.darkGray[800]}${alpha[20]};
        `;
        classes.push(inactiveStyles);
      }
      if (showBorder) {
        const border2 = u`
          border-right: 1px solid ${tokens.colors.gray[500]};
        `;
        classes.push(border2);
      }
      return classes;
    },
    detailsHeaderInfo: u`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${font.weight.normal};
      color: ${colors.gray[400]};
    `,
    matchRow: (active) => {
      const base = u`
        display: flex;
        border-bottom: 1px solid ${colors.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${size[1]} ${size[2]};
        gap: ${size[2]};
        font-size: ${fontSize.xs};
        color: ${colors.gray[300]};
      `;
      const classes = [base];
      if (active) {
        const activeStyles = u`
          background: ${colors.darkGray[500]};
        `;
        classes.push(activeStyles);
      }
      return classes;
    },
    matchIndicator: (color) => {
      const base = u`
        flex: 0 0 auto;
        width: ${size[3]};
        height: ${size[3]};
        background: ${colors[color][900]};
        border: 1px solid ${colors[color][500]};
        border-radius: ${border.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `;
      const classes = [base];
      if (color === "gray") {
        const grayStyles = u`
          background: ${colors.gray[700]};
          border-color: ${colors.gray[400]};
        `;
        classes.push(grayStyles);
      }
      return classes;
    },
    matchID: u`
      flex: 1;
      line-height: ${lineHeight["xs"]};
    `,
    ageTicker: (showWarning) => {
      const base = u`
        display: flex;
        gap: ${size[1]};
        font-size: ${fontSize.xs};
        color: ${colors.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${lineHeight["xs"]};
      `;
      const classes = [base];
      if (showWarning) {
        const warningStyles = u`
          color: ${colors.yellow[400]};
        `;
        classes.push(warningStyles);
      }
      return classes;
    },
    secondContainer: u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${colors.gray[700]};
      display: flex;
      flex-direction: column;
    `,
    thirdContainer: u`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${colors.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${colors.gray[700]};
      }
    `,
    fourthContainer: u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,
    routesContainer: u`
      overflow-x: auto;
      overflow-y: visible;
    `,
    routesRowContainer: (active, isMatch) => {
      const base = u`
        display: flex;
        border-bottom: 1px solid ${colors.darkGray[400]};
        align-items: center;
        padding: ${size[1]} ${size[2]};
        gap: ${size[2]};
        font-size: ${fontSize.xs};
        color: ${colors.gray[300]};
        cursor: ${isMatch ? "pointer" : "default"};
        line-height: ${lineHeight["xs"]};
      `;
      const classes = [base];
      if (active) {
        const activeStyles = u`
          background: ${colors.darkGray[500]};
        `;
        classes.push(activeStyles);
      }
      return classes;
    },
    routesRow: (isMatch) => {
      const base = u`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${fontSize.xs};
        line-height: ${lineHeight["xs"]};
      `;
      const classes = [base];
      if (!isMatch) {
        const matchStyles = u`
          color: ${colors.gray[400]};
        `;
        classes.push(matchStyles);
      }
      return classes;
    },
    routeParamInfo: u`
      color: ${colors.gray[400]};
      font-size: ${fontSize.xs};
      line-height: ${lineHeight["xs"]};
    `,
    nestedRouteRow: (isRoot) => {
      const base = u`
        margin-left: ${isRoot ? 0 : size[3.5]};
        border-left: ${isRoot ? "" : `solid 1px ${colors.gray[700]}`};
      `;
      return base;
    },
    code: u`
      font-size: ${fontSize.xs};
      line-height: ${lineHeight["xs"]};
    `,
    matchesContainer: u`
      flex: 1 1 auto;
      overflow-y: auto;
    `,
    cachedMatchesContainer: u`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,
    maskedBadgeContainer: u`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,
    matchDetails: u`
      display: flex;
      flex-direction: column;
      padding: ${tokens.size[2]};
      font-size: ${tokens.font.size.xs};
      color: ${tokens.colors.gray[300]};
      line-height: ${tokens.font.lineHeight.sm};
    `,
    matchStatus: (status, isFetching) => {
      const colorMap = {
        pending: "yellow",
        success: "green",
        error: "red",
        notFound: "purple",
        redirected: "gray"
      };
      const color = isFetching && status === "success" ? "blue" : colorMap[status];
      return u`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${tokens.border.radius.sm};
        font-weight: ${tokens.font.weight.normal};
        background-color: ${tokens.colors[color][900]}${tokens.alpha[90]};
        color: ${tokens.colors[color][300]};
        border: 1px solid ${tokens.colors[color][600]};
        margin-bottom: ${tokens.size[2]};
        transition: all 0.25s ease-out;
      `;
    },
    matchDetailsInfo: u`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,
    matchDetailsInfoLabel: u`
      display: flex;
    `,
    mainCloseBtn: u`
      background: ${colors.darkGray[700]};
      padding: ${size[1]} ${size[2]} ${size[1]} ${size[1.5]};
      border-radius: ${border.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${colors.gray[500]};
      font-size: ${font.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${colors.darkGray[500]};
      }
    `,
    mainCloseBtnPosition: (position) => {
      const base = u`
        ${position === "top-left" ? `top: ${size[2]}; left: ${size[2]};` : ""}
        ${position === "top-right" ? `top: ${size[2]}; right: ${size[2]};` : ""}
        ${position === "bottom-left" ? `bottom: ${size[2]}; left: ${size[2]};` : ""}
        ${position === "bottom-right" ? `bottom: ${size[2]}; right: ${size[2]};` : ""}
      `;
      return base;
    },
    mainCloseBtnAnimation: (isOpen) => {
      if (isOpen) {
        return u`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `;
      }
      return u`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `;
    },
    routerLogoCloseButton: u`
      font-weight: ${font.weight.semibold};
      font-size: ${font.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,
    mainCloseBtnDivider: u`
      width: 1px;
      background: ${tokens.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,
    mainCloseBtnIconContainer: u`
      position: relative;
      width: ${size[5]};
      height: ${size[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,
    mainCloseBtnIconOuter: u`
      width: ${size[5]};
      height: ${size[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,
    mainCloseBtnIconInner: u`
      width: ${size[4]};
      height: ${size[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
    panelCloseBtn: u`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${colors.darkGray[700]};
      &:hover {
        background-color: ${colors.darkGray[500]};
      }

      top: 0;
      right: ${size[2]};
      transform: translate(0, -100%);
      border-right: ${colors.darkGray[300]} 1px solid;
      border-left: ${colors.darkGray[300]} 1px solid;
      border-top: ${colors.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${border.radius.sm} ${border.radius.sm} 0px 0px;
      padding: ${size[1]} ${size[1.5]} ${size[0.5]} ${size[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${size[2.5]};
        height: ${size[1.5]};
        width: calc(100% + ${size[5]});
      }
    `,
    panelCloseBtnIcon: u`
      color: ${colors.gray[400]};
      width: ${size[2]};
      height: ${size[2]};
    `
  };
};
var _styles2 = null;
function getStyles2() {
  if (_styles2)
    return _styles2;
  _styles2 = stylesFactory2();
  return _styles2;
}
export {
  TanStackRouterDevtools,
  TanStackRouterDevtoolsPanel
};
//# sourceMappingURL=@tanstack_router-devtools.js.map
