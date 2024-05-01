import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "../ShadcnComponent/ui/toaster";

type Props = {};

function Layout({}: Props) {
  return (
    <>
      <main>
        <section>
          <div className="container">
            <Suspense fallback={<h1>Loading</h1>}>
              <Outlet />
            </Suspense>
          </div>
        </section>
      </main>
      <Toaster />
    </>
  );
}

export default Layout;
