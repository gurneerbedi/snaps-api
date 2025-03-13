import fs from "node:fs";

export const readFromFile = (filename) => {
    const contents = JSON.parse(
        fs.readFileSync(`snaps-api/data/${filename}.json`)
    );
    return contents;
};

export const writeToFile = (filename, contents) => {
    fs.writeFileSync(
        `snaps-api/data/${filename}.json`,
        JSON.stringify(contents)
    );
};
