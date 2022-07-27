import { Card } from "./style";

function CharCard({ id, name, image, status }) {
  return (
    <>
      <Card key={id} status={status}>
        <h3>{name}</h3>
        <img src={image} alt={name} />
      </Card>
    </>
  );
}

export default CharCard;
