import "../css/BigComponent.css"
import {useRef} from 'react';
import {useState} from "react";
import {Button} from "@nextui-org/react";
import {isDisabled} from "@testing-library/user-event/dist/utils";


export function UploadButton({uploadID,
                                 setUploadID,
                                 isPressed,
                                 setIsPressed,
                                 additionalPrompt,
                                 setAdditionalPrompt,
                                 selectedTemplate,
                                 setSelectedTemplate,
                                 selectedFile,
                                 setSelectedFile}) {

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0])
    }

    // Create a reference to the hidden file input element
    const hiddenFileInput = useRef(null);

    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleSubmit = async (event) => {
        console.log()
        event.preventDefault();
        setIsPressed(true);

        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("prompt", additionalPrompt);
        formData.append("template", selectedTemplate);
        formData.append("file_type", "");

        try {
            const endpoint = "http://127.0.0.1:4000/upload?prompt=" + additionalPrompt + "&template=" + selectedTemplate
            const response = await fetch(endpoint, {
                method: "POST",
                body: formData
            }).then((res) => res.json()).then((data) => {
                setUploadID(data['upload_id']);
            })

            if (response.ok) {
                console.log("file uploaded success")
            } else {
                console.error("upload fail");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className={"buttonContainer"}>
                <Button className={"button"} onClick={handleClick}>
                    SELECT FILE
                </Button>
                <input
                    type="file"
                    onChange={handleFileInputChange}
                    ref={hiddenFileInput}
                    style={{display: 'none'}}
                />
                <Button className={"button"} type="submit" onClick={handleSubmit} isDisabled={(selectedFile === null)}>
                    CREATE
                </Button>
            </div>

            {selectedFile && <p>{selectedFile.name}</p>}
        </div>
    );
}