import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import MAINPAGE from "pages/MAINPAGE";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "mainpage",
      element: <MAINPAGE />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
