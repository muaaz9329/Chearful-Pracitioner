import { useState, useEffect } from "react";
import React from "react";
const useSessionNote = (newObj) => {

  console.log("newObj",newObj[1].type)
  const FilterObj = newObj.map((item)=>{
   
    return {
      ...item,
      Apptype:null
    }
  })



  for(let i=0;i<FilterObj.length;i++){
    if (FilterObj[i].type === "file") {
      if (FilterObj[i].filename.includes("pdf")) {
        FilterObj[i].Apptype = "pdf";
        
      
      } else if (FilterObj[i].filename.includes("docx")) {
        FilterObj[i].Apptype = "docx";
       

      } else {
        FilterObj[i].Apptype = "img";
      

      }
    } else if (FilterObj[i].type === "text" && FilterObj[i].canvas === null) {
      FilterObj[i].Apptype = "text";
  
      
    } else if (FilterObj[i].type === "drawing"){
      FilterObj[i].Apptype = "canvas";
      console.log(FilterObj[i])

      
     

    }


  }
  

  



  return FilterObj;
    
  
};
export default useSessionNote;

