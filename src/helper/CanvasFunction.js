

export class RefFunctions{
    CanvesRef
    constructor(ref){
        this.CanvesRef = ref;
    }
   GetPoints(){
        return this.CanvesRef.current.Get_Canvas_Points()
    }
    SetPoint(Points){
        this.CanvesRef.current.Set_Canvas_Points(Points)
    }
    GET_IMG_BASE64(){
        return this.CanvesRef.current.Save_Canvas_toImage().encodeToBase64()
    }
    GET_IMG_SVG(){
        return this.CanvesRef.current.Save_Canvas_Svg()
    }
    Reset_Canvas(){
        return this.CanvesRef.current.Reset_Whole_Canvas();
    }

}




