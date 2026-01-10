<<<<<<< HEAD
"use client";
import Preloader from "@/components/common/Preloader/Preloader";
import { animationCreate } from "@/utils/utils";
import React, { useEffect, useState } from "react";
=======
"use client"
import BacktoTop from '@/components/common/BackToTop/BackToTop';
import Preloader from '@/components/common/Preloader/Preloader';
import { animationCreate } from '@/utils/utils';
import React, { useEffect, useState } from 'react';

>>>>>>> b670095fad2fed299bed38d9073f3af43e8bda4d

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    setTimeout(() => {
<<<<<<< HEAD
      animationCreate();
    }, 1000);
  }, []);
  return <>{isLoading ? <Preloader /> : children}</>;
};

export default Wrapper;
=======
      animationCreate()
    }, 4200);
  }, [])
  return (

    <>
     <BacktoTop />
      {isLoading ? <Preloader /> : children}
    </>
  );
};

export default Wrapper;
>>>>>>> b670095fad2fed299bed38d9073f3af43e8bda4d
