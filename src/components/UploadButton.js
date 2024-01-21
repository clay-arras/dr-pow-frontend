import "../css/BigComponent.css"
import {useRef} from 'react';
import {useState} from "react";
// import {Button} from "@nextui-org/react";


export function UploadButton({uploadID,
                                 setUploadID,
                                 isPressed,
                                 setIsPressed,
                                 additionalPrompt,
                                 setAdditionalPrompt,
                                 selectedTemplate,
                                 setSelectedTemplate}) {

    const [file, setFile] = useState(null);
    const handleFileInputChange = (event) => {
        setFile(event.target.files[0])
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
        formData.append("file", file);
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
            <form onSubmit={handleSubmit}>
                <div className={"buttonContainer"}>
                    <button className={"button"} onClick={handleClick}>
                        SELECT FILE
                    </button>
                    <button className={"button"} type="submit">
                        CREATE
                    </button>
                </div>
                <input
                    type="file"
                    onChange={handleFileInputChange}
                    ref={hiddenFileInput}
                    style={{display: 'none'}}
                />
            </form>

            {file && <p>{file.name}</p>}
        </div>
    );
}