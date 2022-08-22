//Parent component
import React from "react";
import Albums from "./components/Album/index.album";
import MainLayout from "./components/Layout/main.layout";
import Home from "./components/Home/home";
import Navigation from "./components/Layout/navigation.layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/Posts/index.post";

const App = () => {
  return (
    <>
      <MainLayout>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<Post />} />
            <Route path="*" element={<h1 className="text-center  text-danger">404 NOT FOUND</h1>} />
          </Routes>
        </Router>
      </MainLayout>
    </>
  );
};

export default App;
