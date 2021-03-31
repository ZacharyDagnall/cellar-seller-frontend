import React from "react";
import noimg from "./noimg.png";
import SaveItemForm from "./SaveItemForm";
import Card from "react-bootstrap/Card";
import logoc from "./logo-c.png"
import logoe from "./logo-e.png"

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
        <Card.Header style={{padding: "0px 0px 0px 0px"}}><img className="icon" src={thing.url.includes("ebay") ? logoe :logoc }/></Card.Header>
        <Card.Body style={{ justifyContent: "center", alignItems: "center"}}>
          <Card.Title>{thing.name}</Card.Title>
          <Card.Text>${thing.price.toFixed(2)}</Card.Text>
          <a 
          style={{display:"flex"}}
          href={thing.url} target="_blank" rel="noreferrer">
            <div 
              style={{background: `url(${thing.img})`, height:"200px", width:"100%", backgroundRepeat: "no-repeat", backgroundSize:"cover"}}
              variant="top"
              onError={(e) => {console.log("errored")
              (e.target.style={background: `url(${noimg})`, height:"200px", width:"100%", backgroundRepeat: "no-repeat", backgroundSize:"cover"})}
              }
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
