import React from "react";

type Props = {};

export default function SpacerSmall({}: Props) {
  return (
    <div>
      <div className="h-12 2xl:h-24 3xl:h-48 4xl:h-96"></div>
      <div className="h-12 2xl:h-12 3xl:h-24 4xl:h-96"></div>

    </div>
  );
}
