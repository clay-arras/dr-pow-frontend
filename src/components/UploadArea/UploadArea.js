import React, { useState } from "react";
import "../../css/BigComponent.css";
import { UploadButtonComponent } from "./UploadButtonComponent";
import { DownloadButtonComponent } from "./DownloadButtonComponent";
import { PromptComponent } from "./PromptComponent";
import { ProgressBarComponent } from "./ProgressBarComponent";

export function UploadArea({ selectedTemplate, setSelectedTemplate }) {
  const [additionalPrompt, setAdditionalPrompt] = useState("");
  const [uploadID, setUploadID] = useState(null);
  const [isPressed, setIsPressed] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const uploadPage = (
    <div className={"rectangle-outer"}>
      <div className={"rectangle-inner upload"}>
        <PromptComponent
          additionalPrompt={additionalPrompt}
          setAdditionalPrompt={setAdditionalPrompt}
        />
        <UploadButtonComponent
          uploadID={uploadID}
          setUploadID={setUploadID}
          isPressed={isPressed}
          setIsPressed={setIsPressed}
          additionalPrompt={additionalPrompt}
          setAdditionalPrompt={setAdditionalPrompt}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
      </div>
    </div>
  );

  let renderedPage = <h1>Error!</h1>;
  if (isPressed === false) {
    renderedPage = uploadPage;
  } else if (isPressed === true && uploadID === null) {
    renderedPage = (
      <div className={"rectangle-outer"}>
        <div className={"rectangle-inner loading"}>
          <p className={"loading-message"}>Loading</p>
          <div className={"loading-container"}>
            <ProgressBarComponent />
          </div>
        </div>
      </div>
    );
  } else {
    renderedPage = (
      <DownloadButtonComponent uploadID={uploadID} setUploadID={setUploadID} />
    );
  }

  return (<>
    <h2>Create Your Powerpoint!</h2>
    {renderedPage}
  </>);
}
