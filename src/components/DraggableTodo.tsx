import { FC, useRef } from "react";
import { DropTargetMonitor, useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../dnd/entity/ItemTypes";
import { XYCoord } from 'dnd-core'

type Props = {
  id: string
  todoIndex: number
  moveTodo: (dragIndex: number, hoverIndex: number) => void
}

interface Item {
  index: number
  id: string
  type: string
}

const DraggableTodo: FC<Props> = ({ 
  id, todoIndex, moveTodo, children
}) => {

  const ref = useRef<HTMLDivElement>(null)
  const [, drop] = useDrop({
    accept: ItemTypes.TODO,
    hover(item: Item, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = todoIndex
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveTodo(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  });

  const [, drag] = useDrag({item: { type: ItemTypes.TODO, id, todoIndex }});

  drag(drop(ref))

  return (
    <div ref={ref} style={{cursor: 'move'}}>
      {children}
    </div>
  )

}

export default DraggableTodo;
