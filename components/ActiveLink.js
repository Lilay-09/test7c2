import Link from "next/link";
import { withRouter } from "next/router";
import React, { Children, use } from "react";

const ActiveLink = ({ router, href, children, color }) => {
  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  const isCurrentPath = router.pathname === href || router.asPath === href;
  return (
    <div>
      <Link
        href={href}
        onClick={handleClick}
        style={{
          textDecoration: "none",
          margin: 0,
          padding: "0.2rem 0rem",
          fontWeight: 900,
          color: "#8C471D",
          borderBottom: isCurrentPath ? "3px solid #EF7832" : "white",
        }}
      >
        {children}
      </Link>
    </div>
  );
};

export default withRouter(ActiveLink);
