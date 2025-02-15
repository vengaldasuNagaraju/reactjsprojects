import { useState } from "react";
const SplitPage = () => {
  const [hover, setHover] = useState("");

  return (
    <div className={`container ${hover}`}>
      <div
        className="split left"
        onMouseEnter={() => setHover("hover-left")}
        onMouseLeave={() => setHover("")}
        style={{ backgroundImage: `url(/assets/image1.jpg)` }} // Direct URL
      >
        <h1>PlayStation 5</h1>
        <a href="#" className="btn">Buy Now</a>
      </div>

      <div
        className="split right"
        onMouseEnter={() => setHover("hover-right")}
        onMouseLeave={() => setHover("")}
        style={{ backgroundImage: `url(/assets/image2.jpg)` }} // Direct URL
      >
        <h1>Xbox Series X</h1>
        <a href="#" className="btn">Buy Now</a>
      </div>
    </div>
  );
};

export default SplitPage;
