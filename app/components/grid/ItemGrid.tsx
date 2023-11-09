import GridHeader from "./GridHeader";
import GridItem1 from "./GridItem1";
import GridItem2 from "./GridItem2";
import GridItem3 from "./GridItem3";

type Props = {};

export default function ItemGrid({}: Props) {
  return (
    <section id="testimonials" className="flex flex-col justify-center ">
      <GridHeader />
      <div
        className="
          mt-48
          grid snap-both
          snap-mandatory grid-flow-row-dense
          grid-cols-1 grid-rows-3
          justify-items-center 
          gap-[300px]
          "
      >
        <GridItem2 />
        <GridItem3 />
        <GridItem1 />
      </div>
    </section>
  );
}
