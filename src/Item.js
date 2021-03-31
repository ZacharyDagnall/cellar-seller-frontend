import React from "react";
import noimg from "./noimg.png";
import SaveItemForm from "./SaveItemForm";
import Card from "react-bootstrap/Card";

function Item({ thing, type, setThings, api, user }) {
  function handleDeleteItem(e) {
    let item_id = parseInt(e.target.dataset.id);
    fetch(`${api}/items/${item_id}`, {
      method: "DELETE",
    }).then(() => {
      setThings((things) => things.filter((t) => t.id !== item_id));
    });
  }

  return (
    <>
      <Card style={{ 
        margin: "15px 15px 15px 15px",
        // display: "flex",
        
        // width: "18rem", 
        }}>
        <Card.Body style={{ justifyContent: "center", alignItems: "center"}}>
          <Card.Title>{thing.name}</Card.Title>
          <Card.Text>${thing.price.toFixed(2)}</Card.Text>
          <a 
          style={{display:"flex"}}
          href={thing.url} target="_blank" rel="noreferrer">
          <Card.Img
            variant="top"
            src={thing.img}
            alt={thing.name}
            onError={(e) => (e.target.src = noimg)}
            // style={{display:"flex"}}
          />
        </a>
        </Card.Body>
        
        <Card.Footer>
          {type === "trackedsearches" ? (
            <SaveItemForm api={api} thing={thing} user={user} />
          ) : (
            <button data-id={thing.id} onClick={handleDeleteItem} role="img">
              ❌
            </button>
          )}
        </Card.Footer>
      </Card>
    </>
  );
}

export default Item;

// <Card>
// <a href={thing.url} target="_blank" rel="noreferrer">
//   <h1>{thing.name}</h1>
//   <img
//     src={thing.img}
//     alt={thing.name}
//     onError={(e) => (e.target.src = noimg)}
//   ></img>
//   <p>${thing.price.toFixed(2)}</p>
// </a>
// {type === "trackedsearches" ? (
//   <SaveItemForm api={api} thing={thing} user={user} />
// ) : (
//   <button data-id={thing.id} onClick={handleDeleteItem} role="img">
//     ❌
//   </button>
// )}
// </Card>
