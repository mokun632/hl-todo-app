import { FC } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../dnd/entity/ItemTypes";
import { Card, Todo } from "../domain/entity/todoCard";

type Props = {
  id: string,
  card: Card | Todo,
  moveCard: (id: string, to: number) => void,
  findCard: (id: string) => { index: number },
}

interface Item {
  id: string
  type: string
  originalIndex: string
}

const DraggableTodoCard: FC<Props> = ({
  id, moveCard, findCard, children
}) => {

  const originalIndex = findCard(id).index
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, originalIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (dropResult, monitor) => {
      const { id: droppedId, originalIndex } = monitor.getItem()
      const didDrop = monitor.didDrop()
      if (!didDrop) {
        moveCard(droppedId, originalIndex)
      }
    },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    canDrop: () => false,
    hover({ id: draggedId }: Item) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id)
        moveCard(draggedId, overIndex)
      }
    },
  })

  const opacity = isDragging ? 0.1 : 1
  return (
    <div ref={(node) => drag(drop(node))} style={{cursor: 'move', opacity}}>
      {children}
    </div>
  )

}

export default DraggableTodoCard;
