import { NavLink } from "react-router-dom";

const items = [
  { no: "01", label: "Home", path: "/" },
  { no: "02", label: "Question Bank", path: "/question-bank" },
  { no: "03", label: "Worked Solutions", path: "/solutions" },
  { no: "04", label: "Quiz Engine", path: "/quiz" },
  { no: "05", label: "Analytics", path: "/analytics" },
  { no: "06", label: "Content Assets", path: "/assets" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo">D</div>

        <div>
          <h1>DHD PEI</h1>
          <p>Physics Exam Intelligence</p>
        </div>
      </div>

      <nav className="nav">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span>{item.no}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="footer">DHD NEXUS</div>
    </aside>
  );
}
