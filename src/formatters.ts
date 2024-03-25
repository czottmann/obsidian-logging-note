import mdtable from "./formatters/mdtable";
import ndjson from "./formatters/ndjson";

export const formatters = [
  mdtable,
  ndjson,
]
  .sort((a, b) => a.title.localeCompare(b.title));

export function findFormatterByID(id: string) {
  return formatters.find((formatter) => formatter.id === id);
}
