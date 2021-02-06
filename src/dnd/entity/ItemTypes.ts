export const ItemTypes = {
  CARD: "card",
  TODO: "todo"
}
type ItemType = keyof typeof ItemTypes;

export type Item = {
  index: number;
  id: number;
  type: ItemType;
};
