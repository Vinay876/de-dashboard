import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "./components/loader/Loading";
import AppProvider from "./context/Context";
import { SidebarData } from "./constants/Sidebar";
import GlobalLayout from "./components/dashboard/GlobalLayout";

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter basename="/dashboard">
          <GlobalLayout>
            <Suspense fallback={<Loading />}>
              <Routes>
                {SidebarData.map((item, index) => {
                  return (
                    <Route
                      key={index}
                      path={item.shortPath}
                      element={<item.Element />}
                    />
                  );
                })}
              </Routes>
            </Suspense>
          </GlobalLayout>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
