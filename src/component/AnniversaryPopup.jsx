import React, { useEffect, useState } from "react";
import "./AnniversaryPopup.css";

const AnniversaryPopup = () => {
const [show, setShow] = useState(false);

useEffect(() => {
setShow(true); // website open ஆனதும் show
}, []);

if (!show) return null;

return ( <div className="anniversary-overlay"> <div className="anniversary-popup">


    <button
      className="close-btn"
      onClick={() => setShow(false)}
    >
      ✕
    </button>

    <img
      src="/Anniversary_Card.jpg"
      alt="Anniversary"
    />

  </div>
</div>


);
};

export default AnniversaryPopup;
