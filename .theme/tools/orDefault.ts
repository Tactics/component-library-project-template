export function orDefault(json: any, standard: any, keys: string[]): any {
    let currentValue = json;

    for (const key of keys) {
        // Check if the current value is null or undefined, and fallback to the standard value
        currentValue = currentValue?.[key] ?? standard;

        // If the current value is null or undefined, break the loop
        if (currentValue === null || currentValue === undefined) {
            break;
        }
    }

    return currentValue;
}