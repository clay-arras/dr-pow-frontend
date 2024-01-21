import React, {useState} from "react";
import {UploadButton} from "./UploadButton";
import {DownloadButton} from "./DownloadButton";
import {PromptComponent} from "./PromptComponent";
import {ProgressBar} from "./ProgressBar";

export function UploadArea({selectedTemplate, setSelectedTemplate}) {
    const [additionalPrompt, setAdditionalPrompt] = useState("");
    const [uploadID, setUploadID] = useState(null);
    const [isPressed, setIsPressed] = useState(false);

    const uploadPage = (
        <p>
            <PromptComponent
                additionalPrompt={additionalPrompt}
                setAdditionalPrompt={setAdditionalPrompt}
            />
            <UploadButton
                uploadID={uploadID}
                setUploadID={setUploadID}
                isPressed={isPressed}
                setIsPressed={setIsPressed}
            />
        </p>
    );

    let renderedPage = (<h1>Error!</h1>);
    if (isPressed === false) {
        renderedPage = uploadPage;
    } else if (isPressed === true && uploadID === null) {
        renderedPage = (<ProgressBar/>);
    } else {
        renderedPage = (<DownloadButton/>);
    }

    return (
        <p> {renderedPage} </p>
    );
}