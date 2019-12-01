import React from "react";

function Layout({ children }) {
  return (
    <>
      <main className="z-50 flex flex-col justify-center flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:h-screen md:justify-center md:p-8">
        <div className="absolute inset-0 -z-99 grain-bg"></div>
        {children}
      </main>
    </>
  );
}

export default Layout;
