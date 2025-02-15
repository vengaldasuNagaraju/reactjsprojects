import { useEffect, useState } from "react";
import image from '../assets/image30.jpg'
const Card = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setData({
        title: "Lorem ipsum dolor sit amet.",
        excerpt: "Loribus nihil is corporis pariatur voluptatibus, earum cupiditate aut laudantium!",
        profileImg: "https://randomuser.me/api/portraits/men/45.jpg",
        name: "John Doe",
        date: "Oct 09, 2023",
      });
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="card">
      <div className="card-header animated-bg">
        {!loading && <img src= {image} alt="Header"/>}
      </div>
      <div className="card-content">
        <h3 className={`${loading ? "animated-bg animated-bg-text" : ""}`}>{!loading && data.title}</h3>
        <p className="card-expert">
          {loading ? (
            <>
              <span className="animated-bg animated-bg-text"></span>
              <span className="animated-bg animated-bg-text"></span>
              <span className="animated-bg animated-bg-text"></span>
            </>
          ) : (
            data.excerpt
          )}
        </p>
        <div className="author">
          <div className="profile-img animated-bg">
            {!loading && <img src={data.profileImg} alt="Profile" className="animated-bg" />}
          </div>
          <div className="author-info">
            <strong className={loading ? "animated-bg animated-bg-text" : ""}>{!loading && data.name}</strong>
            <small className={loading ? "animated-bg animated-bg-text" : "text-gray-500"}>{!loading && data.date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
