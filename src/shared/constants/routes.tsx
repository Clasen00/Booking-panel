export interface RouteConfig {
  path: string;
  label: string;
  protected?: boolean;
  showInNav?: boolean;
  exact?: boolean;
  order?: number;
  description?: string;
}

const routes: RouteConfig[] = [
  {
    path: "/movies",
    label: "Фильмы",
    showInNav: true,
    order: 1,
    description: "Список доступных фильмов",
  },
  {
    path: "/cinemas",
    label: "Кинотеатры",
    showInNav: true,
    order: 2,
    description: "Наши кинотеатры и залы",
  },
  {
    path: "/tickets",
    label: "Мои билеты",
    protected: true,
    showInNav: true,
    order: 3,
    description: "История и активные билеты",
  },
  {
    path: "/login",
    label: "Вход",
    showInNav: true,
    order: 4,
    description: "Войдите в свой аккаунт",
  },
];

export const getNavRoutes = () =>
  routes
    .filter((route) => route.showInNav)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

export const getRouteByPath = (path: string) =>
  routes.find((route) => route.path === path);

export const isRouteProtected = (path: string) =>
  getRouteByPath(path)?.protected || false;

export const getPublicRoutes = () => routes.filter((route) => !route.protected);

export const getProtectedRoutes = () =>
  routes.filter((route) => route.protected);
