import { Progress } from "@nextui-org/react";

export function ProgressBar() {
    <p>Loading...</p>
    return (
        <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w-md"
        />
    );
}
