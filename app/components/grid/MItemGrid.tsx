import MGridItem1 from "./MGridItem1";
import GridItem2 from "./GridItem2";
import GridItem3 from "./GridItem3";
import MGridItem2 from "./MGridItem2";
import MGridItem3 from "./MGridItem3";

type Props = {};

export default function MItemGrid({}: Props) {
  return (
    <section className="mt-0 flex flex-col justify-center">
      <div id="m-testimonials" className="-translate-y-16"></div>

      <div className="m-8">
        {/* <h2 className="mb-4 text-2xl font-bold">Testimonials</h2>
        <div className="mb-4 h-[2px] w-[95%] bg-white" /> */}
      </div>
      <div
        className="
          mt-12
          grid snap-both
          snap-mandatory grid-flow-row-dense
          grid-cols-1 grid-rows-3
          justify-items-center 
          gap-[300px]
          "
      >


        <MGridItem2 />
        <MGridItem3 />
        <MGridItem1 />
        
      </div>
    </section>
  );
}
