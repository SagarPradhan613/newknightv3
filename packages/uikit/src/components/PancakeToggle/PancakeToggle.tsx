import React from "react";
import { PancakeStack, PancakeInput, PancakeLabel } from "./StyledPancakeToggle";
import { PancakeToggleProps, scales } from "./types";

const PancakeToggle: React.FC<React.PropsWithChildren<PancakeToggleProps>> = ({
  checked,
  scale = scales.LG,
  ...props
}) => (
  <PancakeStack scale={scale}>
    <PancakeInput id={props.id || "pancake-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <PancakeLabel scale={scale} checked={checked} htmlFor={props.id || "pancake-toggle"}>
      <div className="pancakes">
        <div style={{ boxShadow: "0 1.5px 0 1.5px #1e2b45", backgroundColor: "#1e2b45" }} className="pancake" />
        {/* <div className="pancake" />
        <div className="pancake" />
        <div className="butter" /> */}
      </div>
    </PancakeLabel>
  </PancakeStack>
);

export default PancakeToggle;
