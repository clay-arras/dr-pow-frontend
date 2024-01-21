import {Button} from "@nextui-org/react";

export function DownloadButton({uploadID, setUploadID, file}){

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("upload_id", uploadID);

        try {
            const endpoint = "http://127.0.0.1:4000/download?upload_id="
            const response = await fetch(endpoint + uploadID,{
                method: "GET",
                // body: formData
            })
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `powerpoint.pptx`,
                );

                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                link.parentNode.removeChild(link);
            });


            if (response.ok) {
                console.log("file download success")
            } else {
                console.error("download fail");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Button color="primary" onClick={handleSubmit}>
                Download File
            </Button>
        </form>
    );
}