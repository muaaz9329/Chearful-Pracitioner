import { DocIcon } from "@app/screens/NoteTakingApp/Images/Doc-Icons"
const FileIconGenrator = (type) => {
    if(type == "pdf"){
        return DocIcon.pdf
    }
    else if(type == "docx"){
        return DocIcon.docx
    }
    else if(type == "img"){
        return DocIcon.img
    }
    else if(type == "text"){
        return DocIcon.text
    }
    else if(type == "canvas"){
        return DocIcon.canvas
    }

}

export default FileIconGenrator

