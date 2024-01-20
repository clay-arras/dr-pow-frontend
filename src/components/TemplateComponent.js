import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Image} from "@nextui-org/react";

class TemplateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedOption: "Theme 0",
        };
        this.dict = {
            "Theme 0" : "https://media.slidesgo.com/storage/47634150/responsive-images/cool-homework-infographics1705492791___media_library_original_655_368.jpg",
            "Theme 1" : "https://media.slidesgo.com/storage/47587464/responsive-images/online-karaoke-social-media-strategy1705414268___media_library_original_655_368.jpg",
            "Theme 2" : "https://media.slidesgo.com/storage/47596044/responsive-images/sales-marketing-communication-strategy1705422509___media_library_original_655_368.jpg",
            "Theme 3" : "https://media.slidesgo.com/storage/124629/responsive-images/upload___media_library_original_672_378.jpg",
        };
    }
    render() {
        return (
            <div>
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                        >
                            Choose template
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Action event"
                        onAction={(key) => this.setState({
                            selectedOption: key,
                        })}
                    >
                        <DropdownItem key="Theme 0">Theme 0</DropdownItem>
                        <DropdownItem key="Theme 1">Theme 1</DropdownItem>
                        <DropdownItem key="Theme 2">Theme 2</DropdownItem>
                        <DropdownItem key="Theme 3">Theme 3</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <ImageComponent state={this.state} dict={this.dict}/>
            </div>
        );
    }
}

function ImageComponent({state, dict}) {
    let imageName = state.selectedOption;
    let imageSrc = dict[state.selectedOption];
    return (
        <Image
            isZoomed
            alt={imageName}
            src={imageSrc}
        />
    );
}

export default TemplateComponent;