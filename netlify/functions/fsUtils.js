import fs from "node:fs";

export const readFromFile = (filename) => {
    const contents = JSON.parse(fs.readFileSync(`data/${filename}.json`));
    return contents;
};

export const writeToFile = (filename, contents) => {
    fs.writeFileSync(`data/${filename}.json`, JSON.stringify(contents));
};
