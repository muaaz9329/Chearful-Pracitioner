const useSessionFilter = (Data: any[]) : any[] => {
  let filterData:any[] =[];
  Data.map((item: {status:string}) => {
    
    if (
      item.status.toLowerCase() === "unattended (both missed)" ||
      item.status.toLowerCase() === "client missed" ||
      item.status.toLowerCase() === "practitioner missed" ||
      item.status.toLowerCase() ===  "completed"
    ) {
    
      
      return filterData.push(item);
    }
  });
  return filterData;
};

export default useSessionFilter;
