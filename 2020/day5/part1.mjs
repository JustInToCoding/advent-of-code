import fs from "fs";
import { once } from "events";
import { createInterface } from "readline";

const readByLine = async (file, callback, onFinish = () => {}) => {
  const readline = createInterface({
    input: fs.createReadStream("input.txt"),
    crlfDelay: Infinity,
  });

  readline.on("line", callback);

  await once(readline, "close");

  onFinish();
};

readByLine(
  "input.txt",
  (line) => console.log(JSON.stringify(line)),
  () => console.log("done")
);
