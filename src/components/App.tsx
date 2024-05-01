import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import CardList from "./CardList";

const CardRadixUiPage = lazy(() => import("../pages/CardRadixUiPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CardList />} />
          <Route path="/cardRadixUi" element={<CardRadixUiPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
