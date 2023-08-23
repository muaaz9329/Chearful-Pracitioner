import React, { createContext } from "react";
import DeviceInfo from "react-native-device-info";
export type DeviceType = "mobile" | "tablet" | null;

interface DeviceContextType {
  deviceType: DeviceType;
}

export const DeviceContext = createContext<DeviceContextType>({
  deviceType: "mobile",
});

type Props = {
  children: React.ReactNode;
};

const DeviceTypeProvider = ({ children }: Props) => {
  const getDeviceType = (): DeviceType => {
    const deviceType = DeviceInfo.getDeviceType();
    switch (deviceType) {
      case "Handset":
        return "mobile";
      case "Tablet":
        return "tablet";
      default:
        return "mobile";
    }
  };
  const DEVICE_TYPE = { deviceType: getDeviceType() };
  return (
    <DeviceContext.Provider value={DEVICE_TYPE}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceTypeProvider;
