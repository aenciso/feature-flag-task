type CardDataItem = {
  id: number;
  label: string;
  parentId: number;
  hasChildren: boolean;
  itemType: string;
  checked: boolean;
};

type CardProps = {
  cardData: CardDataItem[];
  parentId?: number;
  level?: number;
};

type CardItemProps = {
  item: CardDataItem;
  level: number;
  children: React.ReactNode;
};
