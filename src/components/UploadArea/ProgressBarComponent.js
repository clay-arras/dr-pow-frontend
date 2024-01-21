import { Progress } from "@nextui-org/react";

export function ProgressBarComponent() {
    return (
        <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w-md"
            color={"secondary"}
        />
    );
}
