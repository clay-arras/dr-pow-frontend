import {useRef} from 'react';
import {Button} from "@nextui-org/react";
import {useState} from "react";

export function UploadButton({uploadID, setUploadID, isPressed, setIsPressed}) {
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
        event.preventDefault();
        setIsPressed(true);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("prompt", "");
        formData.append("template", "");
        formData.append("file_type", "");

        try {
            const endpoint = "http://127.0.0.1:4000/upload"
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
                <Button color="primary" onClick={handleClick}>
                    Select File
                </Button>

                <input
                    type="file"
                    onChange={handleFileInputChange}
                    ref={hiddenFileInput}
                    style={{display: 'none'}}
                />

                <Button type="submit" color="primary">
                    Upload
                </Button>
            </form>

            {file && <p>{file.name}</p>}
        </div>
    );
}