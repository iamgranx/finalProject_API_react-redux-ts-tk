import React, { lazy, Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";


const MainPage = lazy(() => import("../pages/mainPage"));

const AppRouter = () => {
  return (
    <Suspense fallback="loading component...">
      <Routes>
        <Route path="main">
          <Route index element={<MainPage />} />
        </Route>
        <Route path="*" element={<Navigate to="main" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;