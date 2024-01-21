import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import {RiQuestionMark} from "react-icons/ri";
import React from "react";

export function TooltipComponent() {
    return (
        <div className={"choose-template-button"}>
            <Popover placement="top-end">
                <PopoverTrigger>
                    <Button isIconOnly radius={"full"} variant="bordered">
                        <RiQuestionMark/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                        <b className="text-small font-bold">Instructions</b>
                        <div className="text-tiny">
                            <ul>
                                <li> 1. Upload file or picture</li>
                                <li> 2. Select template</li>
                                <li> 3. (Optional) Enter additional prompt in the text box</li>
                                <li> 4. Hit upload!</li>
                            </ul>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}