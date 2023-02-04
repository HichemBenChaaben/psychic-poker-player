// split input by line carriage
export function getLines(str: string): string[] {
    return str.split(/\r?\n/).map(str => str.trimStart()).filter(i => i);
}