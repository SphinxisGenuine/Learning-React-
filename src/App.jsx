import { useEffect, useState } from "react";

function App() {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchUsers() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal }
        );
        const json = await res.json();
        setusers(json);
      } catch (err) {
        if (err.name === "AbortError") {
          return;
        }
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {loading && <h1>Loading....</h1>}
      {error && <h1>Error in Loading the UI</h1>}

      {users.map(user => (
        <div key={user.id}>
          {user.name}
          <br />
          {user.email}
        </div>
      ))}
    </>
  );
}

export default App;


