import CardItem from "../CardItem/CardItem";

const Card = ({ cardData, parentId, level = 0 }: CardProps) => {
  const items = cardData
    .filter((item) => item.parentId === parentId);
  if (!items.length) return null;
  return (
    <>
      {items.map((item) => (
        <CardItem key={item.id} item={item} level={level}>
          <Card cardData={cardData} parentId={item.id} level={level + 1} />
        </CardItem>
      ))}
    </>
  );
};

export default Card;
