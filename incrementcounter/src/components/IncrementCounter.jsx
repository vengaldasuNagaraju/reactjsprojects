import React, { useEffect, useState } from 'react';

import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';

const IncrementCounter = () => {
    const counters = [
        { icon: FaTwitter, target: 12000, label: "Twitter Followers" },
        { icon: FaYoutube, target: 5000, label: "YouTube Subscribers" },
        { icon: FaFacebook, target: 7500, label: "Facebook Fans" }
    ];

    return (
        <div className="app-container">
            {counters.map((counter, index) => {
                const [count, setCount] = useState(0);

                useEffect(() => {
                    let start = 0;
                    const increment = counter.target / 200;

                    const updateCounter = () => {
                        start += increment;
                        if (start < counter.target) {
                            setCount(Math.ceil(start));
                            setTimeout(updateCounter, 1);
                        } else {
                            setCount(counter.target);
                        }
                    };
                    updateCounter();
                }, [counter.target]);

                return (
                    <div className="counter-container" key={index}>
                        <counter.icon className="icon" size={60} />
                        <div className="counter">{count}</div>
                        <span>{counter.label}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default IncrementCounter;
