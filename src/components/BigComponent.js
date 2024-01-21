import React, {useState} from "react";
import {TemplateSelectorArea} from "./TemplateSelectorArea";
import {UploadArea} from "./UploadArea";

export function BigComponent() {
    const [selectedTemplate, setSelectedTemplate] = useState("Theme 1");

    return (
        <p>
            <TemplateSelectorArea
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
            />
            <UploadArea
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
            />
        </p>

    );
}