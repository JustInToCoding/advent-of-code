import fs from "fs";
import { once } from "events";
import { createInterface } from "readline";

const readByLine = async (file, callback) =>
  await once(
    createInterface({
      input: fs.createReadStream("input.txt"),
      crlfDelay: Infinity,
    }).on("line", callback),
    "close"
  );

readByLine("input.txt", (line) => console.log(JSON.stringify(line))).then(() =>
  console.log("done")
);
