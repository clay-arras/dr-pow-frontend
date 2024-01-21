import React from "react";
import {DropdownComponent} from "./DropdownComponent";
import {ImageComponent} from "./ImageComponent";

export function TemplateComponent({selectedTemplate, setSelectedTemplate}) {
    const dict = {
        "Theme 0" : "https://media.slidesgo.com/storage/47634150/responsive-images/cool-homework-infographics1705492791___media_library_original_655_368.jpg",
        "Theme 1" : "https://media.slidesgo.com/storage/47587464/responsive-images/online-karaoke-social-media-strategy1705414268___media_library_original_655_368.jpg",
        "Theme 2" : "https://media.slidesgo.com/storage/47596044/responsive-images/sales-marketing-communication-strategy1705422509___media_library_original_655_368.jpg",
        "Theme 3" : "https://media.slidesgo.com/storage/124629/responsive-images/upload___media_library_original_672_378.jpg",
    };

    return (
        <p>
            <DropdownComponent
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
                dict={dict}
            />
            <ImageComponent
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
                dict={dict}
            />
        </p>
    );
}