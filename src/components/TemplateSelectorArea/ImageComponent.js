import { Image } from "@nextui-org/react";
import React from "react";

export function ImageComponent({
  selectedTemplate,
  setSelectedTemplate,
  dict,
}) {
  let imageName = selectedTemplate;
  let imageSrc = dict[selectedTemplate];

  return <Image isZoomed alt={imageName} src={imageSrc} />;
}
