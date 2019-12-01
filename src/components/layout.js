import React from "react";

function Layout({ children }) {
  return (
    <>
      <main className="z-50 flex flex-col justify-center flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:h-screen md:justify-center md:p-8">
        <div className="absolute inset-0 -z-99 grain-bg"></div>
        {children}
      </main>
      <span className="absolute inset-x-0 bottom-0 mb-2 text-gray-500 text-xxs md:text-xs md:mb-6">
        Created in the <a href="https://scrimba.com/g/greact">React Bootcamp</a>{" "}
        on <a href="https://scrimba.com/">Scrimba</a>
      </span>
    </>
  );
}

export default Layout;
