import React, {useState} from "react";
import "../css/BigComponent.css";
import {TemplateSelectorArea} from "./TemplateSelectorArea/TemplateSelectorArea";
import {UploadArea} from "./UploadArea/UploadArea";
import title from "../images/title-image.png";
import {Button, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";

export function BigArea() {
    const [selectedTemplate, setSelectedTemplate] = useState("Portfolio");

    return (
        <div className={"main-container"}>
            <div className={"title-section"}>
                <img src={title} alt="logo" className={"title-image"}/>

                <div className={"title"}>
                    <h1>DoC-To-POW!</h1>
                    <h3 className={"sub-header"}>
                        YOUR #1 MULTI-LANGUAGE AI POWERPOINT ASSISTANT
                    </h3>
                </div>
            </div>
            <div className={"upload-section"}>
                <div className={"title-section"}>
                    <div>
                        <h2>Create Your Powerpoint!</h2>
                    </div>
                    <div className={"choose-template-button"}>
                        <Popover placement="top-end">
                            <PopoverTrigger>
                                <Button isIconOnly>
                                    <QuestionMark/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className="px-1 py-2">
                                    <div className="text-small font-bold">Popover Content</div>
                                    <div className="text-tiny">This is the popover content</div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <UploadArea
                    selectedTemplate={selectedTemplate}
                    setSelectedTemplate={setSelectedTemplate}
                />
            </div>
            <div className={"theme-section"}>
                <TemplateSelectorArea
                    selectedTemplate={selectedTemplate}
                    setSelectedTemplate={setSelectedTemplate}
                />
            </div>
        </div>
    );
}
