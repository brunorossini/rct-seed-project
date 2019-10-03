import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    document.title = `Total: ${count}`;
  }, [count]);

  function signOut() {
    localStorage.removeItem("token");
    props.history.push("/auth/login");
  }

  return (
    <>
      <h1>Home</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>ola</button>
      <button onClick={() => signOut()} type="button">
        Sair
      </button>
      <Link to="/auth">Auth</Link>
    </>
  );
}

export default Home;
