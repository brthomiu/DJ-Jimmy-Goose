import GridItem1 from "./GridItem1";
import GridItem2 from "./GridItem2";
import GridItem3 from "./GridItem3";

type Props = {};

export default function ItemGrid({}: Props) {
  return (
    <div className="snap-mandatory snap-both grid grid-flow-row-dense grid-cols-1 grid-rows-3 justify-items-center gap-[600px]">
      <GridItem2 />
      <GridItem3 />
      <GridItem1 />
    </div>
  );
}
