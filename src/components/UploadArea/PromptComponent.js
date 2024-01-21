import React from "react";
import "../../css/BigComponent.css"

import {Input} from "@nextui-org/react";

export function PromptComponent({additionalPrompt, setAdditionalPrompt}) {
    const handleChange = (e) => {
        setAdditionalPrompt(e.target.value);
    };

    return (
        <div className={"prompt-container"}>
            <Input className={"prompt"} type="email" label="Prompt" placeholder={"Prompt..."} onChange={handleChange}/>
        </div>
    );
}