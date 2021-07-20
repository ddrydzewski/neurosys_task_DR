import React from "react";
import { Route } from "react-router-dom";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import VideoComp from "../VideosComp/VideoComp";

export const Routes = () => {
    return (
      <div>
        <Route path="/Omnie" component={About} />
        <Route path="/Wideo" component={VideoComp} />
        <Route path="/Galeria" component={Gallery} />
      </div>
    );
  };
   