import React, { useEffect } from "react";

const LoginForm = () => {
  useEffect(() => {
    const labels = document.querySelectorAll(".form-control label");
    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join("");
    });
  }, []);

  return (
    <div className="container">
      <h1>Please Login</h1>
      <form>
        <div className="form-control">
          <input type="text" required />
          <label>Email</label>
        </div>
        <div className="form-control">
          <input type="password" required />
          <label>Password</label>
        </div>
        <button className="btn">Login</button>
        <p className="text">
          Don't have an account? <a href="#">Register</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
