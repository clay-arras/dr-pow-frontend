import React, {useState} from "react";
import "../css/BigComponent.css";
import {TemplateSelectorArea} from "./TemplateSelectorArea";
import {UploadArea} from "./UploadArea";
import title from "../images/title-image.png"

export function BigComponent() {
    const [selectedTemplate, setSelectedTemplate] = useState("Minimalistic");

    return (
        <div className={"main-container"}>
            <div className={"title-section"}>
                <img src={title} alt="logo" className={"title-image"}/>
                <div className={"title"}>
                    <h1>DoC-To-POW!</h1>
                    <h3 className={"sub-header"}>YOUR #1 AI POWERPOINT ASSISTANT</h3>
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
                <h2>Choose A Template!</h2>
                <TemplateSelectorArea
                    selectedTemplate={selectedTemplate}
                    setSelectedTemplate={setSelectedTemplate}
                />
            </div>
        </div>

    );
}