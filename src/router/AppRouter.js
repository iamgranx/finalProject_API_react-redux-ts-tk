import React, { lazy, Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

// import PostsPage from "../pages/Posts";
// import PostDetailPage from "../pages/PostDetail";

const UserPage = lazy(() => import("../pages/userPage"));


const AppRouter = () => {
  return (
    <Suspense fallback="loading component...">
      <Routes>
        <Route path="posts">
          <Route index element={<UserPage />} />

        </Route>
        <Route path="*" element={<Navigate to="posts" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;