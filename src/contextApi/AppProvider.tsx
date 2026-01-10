"use client";

import React, { createContext, useState, useEffect } from "react";
import { AppContextType } from "@/interFace/type";
import { usePathname } from "next/navigation";

export const AppContext = createContext<AppContextType | undefined>(undefined);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const [scrollDirection, setScrollDirection] = useState("up");
<<<<<<< HEAD
=======
  const [filterType, setFilterType] = useState<string>("");
  const [dynamicId, setDynamicId] = useState<number>(1);
  const [modalId, setModalId] = useState<number>(0);
>>>>>>> b670095fad2fed299bed38d9073f3af43e8bda4d
  const [niceSelectData, setNiceSelectData] = useState<string>("no-data");

  useEffect(() => {
    setNiceSelectData("no-data");
  }, [pathName]);

  const contextValue: AppContextType = {
    scrollDirection,
    setScrollDirection,
<<<<<<< HEAD
    niceSelectData,
=======
    filterType,
    setFilterType,
    dynamicId,
    setDynamicId,
    niceSelectData,
    modalId,
    setModalId,
>>>>>>> b670095fad2fed299bed38d9073f3af43e8bda4d
    setNiceSelectData,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
