import { Fonts } from "../constants/Fonts";
export const Nunito = (Weight) => {
  String(Weight);

  return WeightCalc("Nunito", Weight.toString());
};

export const Mulish = (Weight) => {
  return WeightCalc("Mulish", Weight.toString());
};

const WeightCalc = (name, Weight) => {
  switch (Weight) {
    case "100":
    case "200":
      {
        return Fonts[name].ExtraLight;
      }
      break;
    case "300":
      {
        return Fonts[name].light;
      }
      break;
    case "400":
      {
        return Fonts[name].Regular;
      }
      break;
    case "500":
      {
       // return Fonts[name].Medium;
      }
      break;
    case "600":
      {
        //  return Fonts[name].SemiBold
      }
      break;
    case "700":
      {
        return Fonts[name].Bold;
      }
      break;
    case "800":
      {
        return Fonts[name].ExtraBold;
      }
      break;
    case "900":
      {
        return Fonts[name].Black;
      }
      break;
    default: {
      return Fonts[name].Medium;
    }
  }
};
