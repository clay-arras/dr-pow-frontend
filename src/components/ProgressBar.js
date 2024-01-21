import { Progress } from "@nextui-org/react";

export function ProgressBar() {
    return (
        <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w-md"
        />
    );
}
