import React from "react";
import {Input} from "@nextui-org/react";

export function PromptComponent({additionalPrompt, setAdditionalPrompt}) {
    const handleChange = (e) => {
        setAdditionalPrompt(e.target.value);
    };

    return (
        <Input type="email" label="Prompt" onChange={handleChange}/>
    );
}