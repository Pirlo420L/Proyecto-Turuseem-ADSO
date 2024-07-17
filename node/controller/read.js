import fs from "fs";
import csv from "csv";

const result = [];

fs.createReadStream("./sample.csv")
  .pipe(csv.parse({ trim: true, skip_empty_lines: true, columns: true }))
  .on("data", (row) => {
    result.push(row);
  })
  .on("end", () => {
    console.log(result);
    console.log("Csv parsing finished");
  });
