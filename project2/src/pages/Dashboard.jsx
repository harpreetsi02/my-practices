// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchUsers() {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        if (!cancelled) {
          setUsers(res.data);
          setLoading(false);
        }
      } catch (err) {
        console.error("Fetch users error:", err);
        if (!cancelled) {
          setError("Failed to load users");
          setLoading(false);
        }
      }
    }

    fetchUsers();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <p className="p-6">Loading Users...</p>;
  if (error) return <p className="p-6">{error}</p>;

  return (
    <div className="p-6">
      <h2>Dashboard</h2>
      <p>Click a user to view details.</p>

      <ul>
        {users.map((u) => (
          <li key={u.id} className="mb-3">
            {/* Link to details page */}
            <Link to={`/users/${u.id}`} style={{ textDecoration: "none", color: "#0366d6" }}>
              <strong>{u.name}</strong>
            </Link>
            <div style={{ fontSize: 13, color: "#333" }}>
              <span>{u.email}</span> • <span>{u.phone}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
