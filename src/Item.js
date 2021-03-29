import React from "react";
import noimg from "./noimg.png"
import SaveItemForm from "./SaveItemForm"

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
    <span>
      <a
        className="ui-eight-wide-column"
        href={thing.url}
        target="_blank"
        rel="noreferrer"
      >
        <h1>{thing.name}</h1>
        <img src={thing.img} alt={thing.name} onError={e => e.target.src=noimg}></img>
        <p>${thing.price.toFixed(2)}</p>
      </a>
      {type === "trackedsearches" ? <SaveItemForm api={api} thing={thing} user={user} /> : (
        <button data-id={thing.id} onClick={handleDeleteItem} role="img">
          ❌
        </button>
      )}
    </span>
  );
}

export default Item;
