
import React, { useEffect, useState } from 'react'

/**
 * 
 * @param DATA is the constant data that will be filtered
 * @returns filtered data , function to set title and function to set tag
 */


const useSoundBitesFilter = (DATA:any[]) => {
    const [selectedTag, setSelectedTag] = React.useState<string>("All");

  const [data, setData] = useState<any[]>(); //TODO: Api data will be saved here

  const [searchTitle , setSearchTitle] = useState<string>("");

  useEffect(() => {
    const filterTag = ()=>{
        if (selectedTag === "All") {
            setData(DATA); 
        } else {
            setData(
            DATA.filter((item) => {
                return item.tags.includes(selectedTag);
            })
            );
        }
    }
    filterTag();
  },[selectedTag]);


  useEffect(() => {
    const filterTitle = ()=>{
        if (searchTitle === "") {
            setData(DATA); 
        } else {
            setData(
            DATA.filter((item) => {
                return item.title.toLowerCase().includes(searchTitle.toLowerCase());
            })
            );
        }
    }
    filterTitle();
  }, [searchTitle])

  return {setSearchTitle , setSelectedTag , data}
}

export default useSoundBitesFilter
