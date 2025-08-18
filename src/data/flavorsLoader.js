import Papa from "papaparse";
import rawCsv from "./flavors.csv?raw"; 

const LS_KEY = "nlu_flavors_v1";

export function parseFlavorsCsv() {
  const { data } = Papa.parse(rawCsv, {
    header: false,
    skipEmptyLines: true,
    quoteChar: '"',
    delimiter: ",",
    dynamicTyping: false,
  });

  const byCategory = {};
  for (const row of data) {
    const [, categoryRaw, nameRaw] = row;
    const category = (categoryRaw || "").trim();
    const name = (nameRaw || "").trim();
    if (!category || !name) continue;

    const key = category; 
    (byCategory[key] ??= []).push({ name });
  }

  const categories = Object.keys(byCategory).sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );

  return { categories, byCategory };
}

export function loadFlavors() {
  const cached = localStorage.getItem(LS_KEY);
  if (cached) return JSON.parse(cached);

  const payload = parseFlavorsCsv();
  localStorage.setItem(LS_KEY, JSON.stringify(payload));
  return payload;
}
