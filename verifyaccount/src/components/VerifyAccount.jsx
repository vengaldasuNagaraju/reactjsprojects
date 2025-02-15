import { useRef } from "react";

const VerifyAccount = () => {
  const codeRefs = Array.from({ length: 6 }, () => useRef(null));

  const handleKeyDown = (e, idx) => {
    if (e.key >= 0 && e.key <= 9) {
      codeRefs[idx].current.value = "";
      setTimeout(() => {
        if (idx < 5) codeRefs[idx + 1].current.focus();
      }, 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => {
        if (idx > 0) codeRefs[idx - 1].current.focus();
      }, 10);
    }
  };

  return (
    <div className="container">
      <h2>Verify Your Account</h2>
      <p>
        We emailed the six-digit code to cool_guy@email.com <br /> Enter the
        code below to confirm your email address.
      </p>
      <div className="code-container">
        {codeRefs.map((ref, idx) => (
          <input
            key={idx}
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
            ref={ref}
            onKeyDown={(e) => handleKeyDown(e, idx)}
          />
        ))}
      </div>
      <small className="info">
        This is a design-only example. We didn’t actually send you an email,
        since we don’t have your email, right?
      </small>
    </div>
  );
};

export default VerifyAccount;
