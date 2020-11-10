export const removeHashes = (str: string | undefined | null): string | undefined => str?.split('#')?.shift()?.trim();
