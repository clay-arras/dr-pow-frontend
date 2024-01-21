import "../../css/BigComponent.css"
import {useRef} from 'react';
import {Button, ButtonGroup} from "@nextui-org/react";

export function UploadButtonComponent({
                                          uploadID,
                                          setUploadID,
                                          isPressed,
                                          setIsPressed,
                                          additionalPrompt,
                                          setAdditionalPrompt,
                                          selectedTemplate,
                                          setSelectedTemplate,
                                          selectedFile,
                                          setSelectedFile
                                      }) {

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
        <div className={"buttonContainer"}>
            <div className={"select-button-container"}>
                <ButtonGroup>
                    <Button className={"button"} onClick={handleClick}>
                        SELECT FILE
                    </Button>
                    <Button className={"button"} type="submit" onClick={handleSubmit}
                            isDisabled={(selectedFile === null)}>
                        UPLOAD
                    </Button>
                </ButtonGroup>
                <input
                    type="file"
                    onChange={handleFileInputChange}
                    ref={hiddenFileInput}
                    style={{display: 'none'}}
                />
                {selectedFile && <p>File selected: {selectedFile.name}</p>}
            </div>
        </div>

        // <div className={"buttonContainer"}>
        //     <div className={"select-button-container"}>
        //         <Button className={"button"} onClick={handleClick}>
        //             SELECT FILE
        //         </Button>
        //         {selectedFile && <p>{selectedFile.name}</p>}
        //     </div>
        //     <input
        //         type="file"
        //         onChange={handleFileInputChange}
        //         ref={hiddenFileInput}
        //         style={{display: 'none'}}
        //     />
        //     <Button className={"button"} type="submit" onClick={handleSubmit} isDisabled={(selectedFile === null)}>
        //         CREATE
        //     </Button>
        // </div>
    );
}