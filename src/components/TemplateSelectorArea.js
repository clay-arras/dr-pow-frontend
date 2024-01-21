import React from "react";
import {DropdownComponent} from "./DropdownComponent";
import {ImageComponent} from "./ImageComponent";
import image1 from "../template_examples/Minimalistic.jpg"
import image2 from "../template_examples/History.jpg"
import image3 from "../template_examples/Pastel.jpg"
import image4 from "../template_examples/Portfolio.jpg"
import image5 from "../template_examples/School.jpg"

export function TemplateSelectorArea({selectedTemplate, setSelectedTemplate}) {
    const dict = {
        "Minimalistic" : image1,
        "History" : image2,
        "Pastel" : image3,
        "Portfolio" : image4,
        "School" : image5,
    };

    return (
        <>
            <div className={"choose-template-button"}>
                <DropdownComponent
                    selectedTemplate={selectedTemplate}
                    setSelectedTemplate={setSelectedTemplate}
                    dict={dict}
                />
            </div>
            <ImageComponent
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
                dict={dict}
            />
        </>
    );
}