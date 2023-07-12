import { convertFileToBase64 } from "@app/helper/customFunction";

interface IFileUploadObj {
  size: number;
  fileCopyUri: null;
  name: string;
  uri: string;
  type: string;
}

const FileUploadObj = async (singleFile: IFileUploadObj) => {
  const [documentName, extension] = splitFilename(singleFile.name);

 
    const base64 = await convertFileToBase64(singleFile.uri);
    let obj = {
      fileName: documentName,
      fileType: singleFile.type,
      base64: base64,
      fileExtension: extension,
    };
    return obj;
  
};
function splitFilename(filename:string) {
  // Get the index of the last dot.
  const dotIndex = filename.lastIndexOf(".");

  // If there is no dot, return the filename and an empty string.
  if (dotIndex == -1) {
    return [filename, ""];
  }

  // Otherwise, return the filename up to the dot and the extension after the dot.
  return [filename.slice(0, dotIndex), filename.slice(dotIndex + 1)];
}

export default FileUploadObj;
