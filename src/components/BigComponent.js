import React, {useState} from "react";
import {TemplateSelectorArea} from "./TemplateSelectorArea";

export function BigComponent() {
    const [selectedTemplate, setSelectedTemplate] = useState("Theme 1");
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFiletype, setSelectedFiletype] = useState(null);
    const [additionalPrompt, setAdditionalPrompt] = useState(null);
    const [uploadID, setUploadID] = useState(null);

    return (
      <TemplateSelectorArea
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
      />
    );
}