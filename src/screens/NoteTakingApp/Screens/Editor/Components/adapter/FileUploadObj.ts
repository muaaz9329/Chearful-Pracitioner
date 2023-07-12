import { convertFileToBase64 } from "@app/helper/customFunction";

interface IFileUploadObj {
  size: number;
  fileCopyUri: null;
  name: string;
  uri: string;
  type: string;
}

const FileUploadObj = async (singleFile: IFileUploadObj) => {
    console.log("singleFile uri :",singleFile.uri);
 
    const base64 = await convertFileToBase64(singleFile.uri);
    let obj = {
      fileName: singleFile.name,
      fileType: singleFile.type,
      base64: base64,
    };
    return obj;
  
};

export default FileUploadObj;
