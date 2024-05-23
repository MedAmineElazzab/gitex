import React from "react";

interface ProgressProps {
  percentage: number;
  progressColor: string;
  bgColor: string;
}

const Progress: React.FC<ProgressProps> = ({
  percentage,
  progressColor,
  bgColor,
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "14px",
        width: "100%",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          backgroundColor: progressColor,
          height: "14px",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
};

export default Progress;
