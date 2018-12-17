import xml2js from 'xml2js';

function processXml(xmlString) {
  return new Promise((resolve, reject) => {
    const parser = new xml2js.Parser();

    parser.parseString(xmlString, (error, xml) => {
      if (error) {
        reject(error);
      } else {
        resolve(xml);
      }
    });
  });
}

export default processXml;
