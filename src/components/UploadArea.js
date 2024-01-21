import React, {useState} from "react";
import "../css/BigComponent.css";
import {UploadButton} from "./UploadButton";
import {DownloadButton} from "./DownloadButton";
import {PromptComponent} from "./PromptComponent";
import {ProgressBar} from "./ProgressBar";

export function UploadArea({selectedTemplate, setSelectedTemplate}) {
    const [additionalPrompt, setAdditionalPrompt] = useState("");
    const [uploadID, setUploadID] = useState(null);
    const [isPressed, setIsPressed] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const uploadPage = (
        <div className={"rectangle-outer"}>
            <div className={"rectangle-inner"}>
                <PromptComponent
                    additionalPrompt={additionalPrompt}
                    setAdditionalPrompt={setAdditionalPrompt}
                />
                <UploadButton
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

    let renderedPage = (<h1>Error!</h1>);
    if (isPressed === false) {
        renderedPage = uploadPage;
    } else if (isPressed === true && uploadID === null) {
        renderedPage = (
            <div className={"rectangle-outer"}>
                <div className={"rectangle-inner"}>
                    <p className={"loading-message"}>Loading</p>
                    <div className={"loading-container"}>
                        <ProgressBar/>
                    </div>
                </div>
            </div>);
    } else {
        renderedPage = (
            <DownloadButton
                uploadID={uploadID}
                setUploadID={setUploadID}
            />
        );
    }

    return (
        <>{renderedPage}</>
    );
}