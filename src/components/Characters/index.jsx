import CharCard from "../CharCard";
import { List } from "./style";

function Characters({ characters }) {
  if (characters.length !== 0) {
    return (
      <div>
        <h2>Meus personagens</h2>
        <List>
          {characters.results.map((item) => (
            <CharCard
              id={item.id}
              name={item.name}
              image={item.image}
              status={item.status}
            />
          ))}
        </List>
      </div>
    );
  }
}

export default Characters;
