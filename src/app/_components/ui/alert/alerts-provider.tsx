"use client";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "./alert-template";

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "10px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

export default function AlertsProvider({ children }: IAlertsProvider) {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      {children}
    </AlertProvider>
  );
}

interface IAlertsProvider {
  children: React.ReactNode;
}
