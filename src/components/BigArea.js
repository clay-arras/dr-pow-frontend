import React, { useState } from "react";
import "../css/BigComponent.css";
import { TemplateSelectorArea } from "./TemplateSelectorArea/TemplateSelectorArea";
import { UploadArea } from "./UploadArea/UploadArea";
import title from "../images/title-image.png";
import {Parallax} from "react-scroll-parallax";

export function BigArea() {
  const [selectedTemplate, setSelectedTemplate] = useState("Portfolio");

  return (
      <Parallax speed={-30}>
          <div className={"main-container"}>
              <div className={"title-section"}>
                  <img src={title} alt="logo" className={"title-image"}/>

                  <div className={"title"}>
                      <h1>DoC-To-POW!</h1>
                      <h3 className={"sub-header"}>
                          YOUR #1 MULTI-LANGUAGE AI POWERPOINT ASSISTANT
                      </h3>
                  </div>
              </div>
              <div className={"upload-section"}>
                  <h2>Create Your Powerpoint!</h2>
                  <UploadArea
                      selectedTemplate={selectedTemplate}
                      setSelectedTemplate={setSelectedTemplate}
                  />
              </div>
              <div className={"theme-section"}>
                  <TemplateSelectorArea
                      selectedTemplate={selectedTemplate}
                      setSelectedTemplate={setSelectedTemplate}
                  />
              </div>
          </div>
      </Parallax>
  );
}
