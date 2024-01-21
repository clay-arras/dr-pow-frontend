import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image} from "@nextui-org/react";
import React from "react";

export function DropdownComponent({selectedTemplate, setSelectedTemplate, dict}) {
    let dictItems = [];
    for (const [key, value] of Object.entries(dict)) {
        dictItems.push(<DropdownItem key={key}>{key}</DropdownItem>)
    }

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="bordered">
                    Choose template
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Action event"
                onAction={(key) => setSelectedTemplate(key)}
            >
                {dictItems}
            </DropdownMenu>
        </Dropdown>
    );
}
