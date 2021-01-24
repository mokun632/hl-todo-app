import { FC, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import styled from "styled-components";
import { ItemTypes, MoveHandler } from "../domain/Constants";

const TodoCards = styled.div`
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 300px;
  margin-top: 15px;
  border: 4px solid #33322E;
  box-sizing: border-box;
  box-shadow: 12px 12px 0px #33322E;
  background: #F9F3E5;
  border-radius: 24px;

  @media (max-width: 500px) {
    width: 130px;
    height: 180px;
    margin-top: 2px;
  }
`;

type Props = {
  index: number,
  id: number,
  onMove: MoveHandler,
}

interface DragItem {
  index: number
  id: string
  type: string
}

const DraggableTodoCard: FC<Props> = ({
  index, id, onMove, children
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item: DragItem, monitor){
      if(!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      const hoverRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverRect.bottom - hoverRect.top) / 2;
      const hoverMiddleX = (hoverRect.right - hoverRect.left) / 2;
      const mousePosition = monitor.getClientOffset();
      if (!mousePosition) return;
      const hoverClientY = mousePosition.y - hoverRect.top;
      const hoverClientX = mousePosition.x - hoverRect.left;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY * 0.5) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY * 1.5) return;
      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX * 0.5) return;
      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX * 1.5) return;

      onMove(dragIndex, hoverIndex);
      item.index = hoverIndex
    }
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1
  drag(drop(ref));

  return (
    <TodoCards ref={ref} style={{opacity}}>
      {children}
    </TodoCards>
  )

}

export default DraggableTodoCard;
