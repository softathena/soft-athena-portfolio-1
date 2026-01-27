// import React from 'react';

// const Preloader = () => {
//     return (
//         <>
//             <div id="preloader" className="sk-three-bounce">
//                 <div className="sk-child sk-bounce1"></div>
//                 <div className="sk-child sk-bounce2"></div>
//                 <div className="sk-child sk-bounce3"></div>
//             </div>
//         </>
//     );
// };

// export default Preloader;

import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div id="preloader" className="sk-three-bounce">
      <div className="sk-child sk-bounce1"></div>
      <div className="sk-child sk-bounce2"></div>
      <div className="sk-child sk-bounce3"></div>
    </div>
  );
};

export default Preloader;
