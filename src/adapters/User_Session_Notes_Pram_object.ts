/**
 * @class for making paremater objec for User_Session_Notes_Editor to pass
 * @param ClientData:object that consist of client data
 * @param Data:object that consist of data of Session Notes
 * @param type:string that consist of type of data like pdf or text
 * @param Mode:string that consist of mode of data like view or edit
 * @returns object of User_Session_Notes_Editor_Pram_object
 */


class User_Session_Notes_Editor_Pram_object {
  public mode: string='';
  public content: any;
  public ClientData: any;
  private Data: any;
  constructor(ClientData: any, Data: any , type: string , Mode: string) {
    this.Data = Data;
    console.log('type',type);
    
    this.ClientData = ClientData;
    if (type === 'pdf'|| "docx" || "img") {
      this.SetForFile(Mode);
    }
    if (type == 'text') {
        this.SetForText(Mode);
        console.log('content',this.Data.content);
    }
    if (type =='canvas') {
        this.SetForCanvas(Mode);
    }


  }
  private SetForFile(Mode: string): void {
    this.mode = Mode;
    this.content = this.Data.file_url;
  }
  private SetForText(Mode: string): void {
    this.mode = Mode;
    this.content = this.Data.content;
  }
  private SetForCanvas(Mode: string): void {
    this.mode = Mode;
    this.content = this.Data.canvas;
  }
}

export default User_Session_Notes_Editor_Pram_object;
