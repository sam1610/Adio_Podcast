import React, { useEffect } from "react";
import XMLParser from "react-xml-parser";
import { convertXML } from "simple-xml-to-json";

function XmlJsonParser() {
  useEffect(() => {
    fetch("https://feeds.simplecast.com/tOjNXec5")
      .then((res) => res.text())
      .then((data) => {
        var xml = new XMLParser().parseFromString(data);
        const jsData = convertXML(xml);
        console.log(jsData);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div></div>;
}

export default XmlJsonParser;
