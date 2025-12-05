// src/pages/UserDetails.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // edit state
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    companyName: "",
    street: "",
    city: "",
    zipcode: "",
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchUser() {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!cancelled) {
          setUser(res.data);
          // hydrate form for edit
          setForm({
            name: res.data.name || "",
            email: res.data.email || "",
            phone: res.data.phone || "",
            website: res.data.website || "",
            companyName: (res.data.company && res.data.company.name) || "",
            street: (res.data.address && res.data.address.street) || "",
            city: (res.data.address && res.data.address.city) || "",
            zipcode: (res.data.address && res.data.address.zipcode) || "",
          });
          setLoading(false);
        }
      } catch (err) {
        console.error("Fetch user error:", err);
        if (!cancelled) {
          setError("Failed to load user");
          setLoading(false);
        }
      }
    }

    fetchUser();

    return () => {
      cancelled = true;
    };
  }, [id]);

  // handle form change
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  // save (PUT) - jsonplaceholder will accept but not persist
  async function handleSave(e) {
    e.preventDefault();
    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        website: form.website,
        company: { name: form.companyName },
        address: { street: form.street, city: form.city, zipcode: form.zipcode },
      };
      const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, payload);
      console.log("Save response:", res.data);
      // update local UI
      setUser(res.data);
      setIsEditing(false);
      alert("Saved (note: jsonplaceholder simulates save; changes are not persisted on the server).");
    } catch (err) {
      console.error("Save error:", err);
      alert("Failed to save user. See console for details.");
    }
  }

  // delete
  async function handleDelete() {
    if (!confirm("Delete this user? (jsonplaceholder simulates delete)")) return;
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      alert("Deleted (simulated). Returning to dashboard.");
      navigate("/dashboard");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete user. See console for details.");
    }
  }

  if (loading) return <p style={{ padding: 24 }}>Loading user...</p>;
  if (error) return <p style={{ padding: 24 }}>{error}</p>;
  if (!user) return <p style={{ padding: 24 }}>No user found.</p>;

  return (
    <div style={{ padding: 24 }}>
      <h2>User Details</h2>

      {!isEditing ? (
        <>
          <div style={{ marginBottom: 12 }}>
            <strong>{user.name}</strong> — <em>{user.email}</em>
          </div>

          <div style={{ marginBottom: 8 }}>
            <div>Phone: {user.phone}</div>
            <div>Website: {user.website}</div>
            <div>
              Address: {user.address?.street}, {user.address?.city} ({user.address?.zipcode})
            </div>
            <div>Company: {user.company?.name}</div>
          </div>

          <div>
            <button onClick={() => setIsEditing(true)} style={{ marginRight: 8 }}>
              Edit
            </button>
            <button onClick={handleDelete} style={{ background: "#f44336", color: "#fff" }}>
              Delete
            </button>
            <button onClick={() => navigate("/dashboard")} style={{ marginLeft: 12 }}>
              Back
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={handleSave} style={{ maxWidth: 560 }}>
          <div style={{ marginBottom: 8 }}>
            <label>Name</label>
            <input name="name" value={form.name} onChange={handleChange} style={{ width: "100%", padding: 8 }} />
          </div>

          <div style={{ marginBottom: 8 }}>
            <label>Email</label>
            <input name="email" value={form.email} onChange={handleChange} style={{ width: "100%", padding: 8 }} />
          </div>

          <div style={{ marginBottom: 8 }}>
            <label>Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} style={{ width: "100%", padding: 8 }} />
          </div>

          <div style={{ marginBottom: 8 }}>
            <label>Website</label>
            <input name="website" value={form.website} onChange={handleChange} style={{ width: "100%", padding: 8 }} />
          </div>

          <div style={{ marginBottom: 8 }}>
            <label>Company</label>
            <input name="companyName" value={form.companyName} onChange={handleChange} style={{ width: "100%", padding: 8 }} />
          </div>

          <div style={{ marginBottom: 8 }}>
            <label>Street</label>
            <input name="street" value={form.street} onChange={handleChange} style={{ width: "100%", padding: 8 }} />
          </div>

          <div style={{ marginBottom: 8 }}>
            <label>City</label>
            <input name="city" value={form.city} onChange={handleChange} style={{ width: "100%", padding: 8 }} />
          </div>

          <div style={{ marginBottom: 8 }}>
            <label>Zipcode</label>
            <input name="zipcode" value={form.zipcode} onChange={handleChange} style={{ width: "100%", padding: 8 }} />
          </div>

          <div>
            <button type="submit" style={{ marginRight: 8 }}>
              Save
            </button>
            <button type="button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
