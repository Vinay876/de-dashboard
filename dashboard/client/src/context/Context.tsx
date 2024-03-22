import React from "react";

export const AppContext = React.createContext<any>({});

export const AppProvider = ({ children }: any) => {
  const [routerPath, setRouterPath] = React.useState<string>("/");

  React.useEffect(() => {
    setRouterPath(window.location.pathname.split("/").pop() || "/");
  }, []);

  return (
    <AppContext.Provider value={{ routerPath, setRouterPath }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;