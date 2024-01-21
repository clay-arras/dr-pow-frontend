import React from "react";
import {Input} from "@nextui-org/react";

export function PromptComponent({additionalPrompt, setAdditionalPrompt}) {
    const keyPress = (e) => {
        if (e.key === "Enter"){
            setAdditionalPrompt(e.target.value);
        }
    };

    return (
        <Input type="email" label="Prompt" onKeyDown={keyPress}/>
    );
}