
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col w-full bg-background">
      <main className="flex-1 overflow-auto w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
