import React from "react";

type Props = {};

export default function Spacer({}: Props) {
  return (
    <div>
      <div className="h-48 xl:h-96"></div>
      <div className="h-48 xl:h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
    </div>
  );
}
