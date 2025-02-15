import React, { useState, useEffect } from "react";

const KeyBox = () => {
  const [keyInfo, setKeyInfo] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeyInfo({
        key: event.key === " " ? "Space" : event.key,
        keyCode: event.keyCode,
        code: event.code,
      });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="insert">
        {keyInfo ? (
            <>
                <div className="key">
                    {keyInfo.key}
                    <small>Key</small>
                </div>
                <div className="key">
                    {keyInfo.keyCode}
                    <small>KeyCode</small>
                </div>
                <div className="key">
                    {keyInfo.code}
                    <small>Code</small>
                </div>
            </>
        ):(
            
        <div className="key">Press any key to get the keyCode</div>
        
        )}
    </div>
  );
};
export default KeyBox;
