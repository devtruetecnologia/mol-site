import { useState } from "react"
import { SquarePagination } from "./styles"

interface CountPaginationProps {
  counts: Array<boolean>,
  enabledIndex: number,
}

export function CountPagination({ counts, enabledIndex }:CountPaginationProps) {
  const [index, setIndex] = useState(-1);
  
  return (
      <>
        {/* {counts.map(count => {
          return <SquarePagination enabled={index === enabledIndex} />
        })} */}
      </>
    )
}