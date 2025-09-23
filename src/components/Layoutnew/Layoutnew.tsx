
import Navbarnew from "../Navbarnew/Navbarnew";
import Sidebarnew from "../Sidebarnew/Sidebarnew";
import "./Layoutnew.css";

import { ReactNode } from "react";

export default function Layoutnew({ children }: { children: ReactNode }) {
  return (
    <div className="layout-root">
      <Navbarnew />
      <div className="layout-body">
        <Sidebarnew />
        <div className="layout-content">
          {children}
        </div>
      </div> 
    </div>
  );
}
