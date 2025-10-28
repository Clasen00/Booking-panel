"use client";

import styles from "./styles.module.scss";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getNavRoutes } from "@/shared/constants/routes";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/shared/hooks/useAuth";

export const AsideMenu = () => {
  const pathname = usePathname();
  const [activeRoute, setActiveRoute] = useState<string>("");
  const router = useRouter();
  const routes = getNavRoutes();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    routes.forEach((route) => {
      if (pathname === route.path) {
        setActiveRoute(route.path);
      }
    });
  }, [pathname]);

  const handleProtectedRoute = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    isProtected?: boolean,
  ) => {
    if (isProtected && !isAuthenticated) {
      event.preventDefault();
      event.stopPropagation();
      router.push("/login");
    }
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>КИНОТЕАТР</div>

      <ul className={styles.navMenu}>
        {getNavRoutes().map((route) => (
          <li
            className={classNames(styles.navItem, {
              [styles.active]: activeRoute === route.path,
            })}
            key={route.path}
          >
            <Link
              href={route.path}
              className={classNames(styles.navLink)}
              onClick={(event) => handleProtectedRoute(event, route.protected)}
            >
              <span className={styles.navLabel}>{route.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
