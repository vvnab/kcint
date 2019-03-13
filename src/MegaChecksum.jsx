import React, { useState, useEffect } from "react";
import _ from "lodash";
import { parse, checksum } from "./checksum";
import "./App.scss";

const MegaChecksum = () => {
  const [files, setFiles] = useState([]);
  const [sums, setSums] = useState([]);
  useEffect(() => {
    const sums = [];
    _.forEach(files, (f, k) => {
      const reader = new FileReader();
      reader.readAsBinaryString(f);
      reader.onload = result => {
        const text = parse(reader.result);
        const val = checksum(text[0]);
        sums.push({name: f.name, val });
        setSums([...sums]);
      };
    });
  }, [files]);
  return (
    <div className="checksum-contaier">
      <div>
        <h4>
          КОМИТЕТ ПО ЗЕМЕЛЬНЫМ РЕСУРСАМ И ЗЕМЛЕУСТРОЙСТВУ САНКТ-ПЕТЕРБУРГА
          <br />
          Расчёт контрольных сумм файлов
        </h4>
      </div>
      <label className="simple-label">
        <input
          className="file-upload"
          type="file"
          name="files"
          accept=".fo?"
          multiple
          onChange={e => setFiles(e.target.files)}
        />
        Выберите файл(ы)
      </label>
      {sums && sums.length > 0 ? (
        <ul className="files-list">
          {_.map(sums, i => (
            <li key={i.name}> {i.name} &mdash; {i.val}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default MegaChecksum;
