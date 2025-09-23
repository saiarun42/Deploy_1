import React from "react";
import "./Overviewcard.css";

export interface OverviewCardProps {
  id:number;
  orderId:number;
  title: string;
  value: string | number;
  change?: string | number;
  changeType?: "up" | "down";
  subtext?: string;
}

export default function Overviewcard({
  id,
  orderId,
  title,
  value,
  change,
  changeType,
  subtext,
}: OverviewCardProps) {
  return (
    <div className="card overview-card">
      <div className="card-title">{title}</div>
      <div className="card-body">
        <div className="value-wrapper">
          <span className="card-value">{value}</span>
          {change && (
            <span className={`card-change ${changeType}`}>
              {changeType === "up" ? "↑" : "↓"} {change}
            </span>
          )}
        </div>
      </div>
      {subtext && <div className="card-subtext">{subtext}</div>}
    </div>
  );
}
