import React from "react";
type Props = {};

export default function MInfo({}: Props) {
  return (
    <section
      className="
        m-8
        mb-16
        mt-12 
        "
      tabIndex={0}
    >
      <div id="about" className="-translate-y-24 "></div>
      <h2 className="mb-4 text-2xl font-bold">About Jimmy</h2>

      <div className="mb-4 h-[2px] w-[95%] bg-white" />
      <div
        className="

          "
      >
        <p className="break-normal text-justify">
          The premier choice for unforgettable weddings and events. With an
          award-winning flair for creating magical musical landscapes, DJ Jimmy
          Goose turns your wedding into an enchanting symphony of love and joy.
          Dance the night away to his tunes and experience the wedding of your
          dreams.
        </p>
      </div>
    </section>
  );
}
