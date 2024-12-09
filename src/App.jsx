import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages import
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import AddJobs from "./pages/AddJobs";
import NotFoundpage from "./pages/NotFoundpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <MainLayout />
        </>
      }
    >
      <Route index element={<HomePage />} />
      <Route path="/jobs" index element={<JobsPage />} />
      {/* <Route path="/add-job" index element={<AddJobs />} /> */}
      <Route path="*" index element={<NotFoundpage />} />
    </Route>
  )
);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
