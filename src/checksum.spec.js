import { parse, checksum } from "./checksum.js";
import fs from "fs";

describe("Вычисление контрольной суммы", () => {
  const buffer = fs.readFileSync("./src/КЦ18-36_43433.fo2");
  it("Разбор файла", () => {
    const text = parse(buffer);
    expect(text.length).toEqual(1);
  });
  it("Вычисление", () => {
    const text = parse(buffer);
    const val = checksum(text[0]);
    expect(val).toEqual(62939);
  });
});
