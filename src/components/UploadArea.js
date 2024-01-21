import React, {useState} from "react";
import {UploadButton} from "./UploadButton";
import {DownloadButton} from "./DownloadButton";
import {PromptComponent} from "./PromptComponent";
export function UploadArea({selectedTemplate, setSelectedTemplate}) {
    const [additionalPrompt, setAdditionalPrompt] = useState("");
    const [uploadID, setUploadID] = useState(null);
    const [isPressed, setIsPressed] = useState(false);

    return (
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
            <DownloadButton/>
        </p>
    );
}