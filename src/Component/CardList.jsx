import { Component } from "react";
import { Heading} from "@chakra-ui/react";
import "./card-list.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div className="card-container" key={id}>
              <img
                src={`https://robohash.org/${id}?set=set2&Size=180*180`}
                alt={`${name}`}
              />
             <Heading size='1xl'>{name}</Heading>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
