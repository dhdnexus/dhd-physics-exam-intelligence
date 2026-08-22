import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../../App.css";

export default function Layout() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
