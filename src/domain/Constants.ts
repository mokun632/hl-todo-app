export const ItemTypes = {
  CARD: 'card',
}
type ItemType = keyof typeof ItemTypes;

export type Item = {
  index: number;
  id: number;
  type: ItemType;
  group?: string;
};
export type MoveHandler = (dragIndex: number, hoverIndex: number, groupType?: string) => void;
