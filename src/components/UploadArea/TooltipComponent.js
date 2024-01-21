import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
import { RiQuestionMark } from "react-icons/ri";

export function TooltipComponent() {
    return (
        <Popover key="top-end" placement="top-end">
            <PopoverTrigger>
                <Button variant="flat" className="capitalize">
                    Dummy content
                </Button>
            </PopoverTrigger>
            <RiQuestionMark />
        </Popover>
    );
}