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

    const uploadPage = (
        <div className={"rectangle-outer-upload"}>
            <div className={"rectangle-inner-upload"}>
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
                />
            </div>
        </div>
    );

    let renderedPage = (<h1>Error!</h1>);
    if (isPressed === false) {
        renderedPage = uploadPage;
    } else if (isPressed === true && uploadID === null) {
        renderedPage = (
            <div className={"rectangle-outer-loading"}>
                <div className={"rectangle-inner-loading"}>
                    <p className={"loading-message"}>Loading</p>
                    <ProgressBar/>
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
        <p>{renderedPage}</p>
    );
}