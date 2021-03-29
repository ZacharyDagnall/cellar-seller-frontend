import React, {useEffect, useState} from "react"
import Item from "./Item"

function SaveItemForm({thing, api, user }) {
    const [formShowing, toggleForm] = useState(false)
    const [folderId, setFolderId] = useState(null)
    const [menuFolders, setMenuFolders] = useState([])

    useEffect(()=> {
      fetch(`${api}/users/${user.id}/saveditems`)
        .then(r =>r.json())
        .then(savedFolders => {
          console.log(savedFolders)
          setMenuFolders(savedFolders)
          setFolderId(savedFolders[0].id)
        })
    }, [])

    const handleSaveItem = (event) => {
      console.log(event.target.value)
        event.preventDefault()
        console.log("u saved")
        fetch(`${api}/items`, {
          method: 'POST',
          headers: {
            'Content-Type':'application/json',
            Accept:'application/json'
          }, 
          body: JSON.stringify({...thing, folder_id:folderId })
        })
      .then(r => r.json())
      .then(item => alert(`${item.name} saved!`))
      toggleForm(false)
    }

    return (
      <>
        <button onClick={() => toggleForm(!formShowing)}>
          Save Item?
        </button>
  
        <form className={formShowing ? null :"hidden"} onSubmit={handleSaveItem}>
            <select name="folder" value={folderId} onChange={e=>setFolderId(e.target.value)}>
              {menuFolders.map(folder => <option key={folder.id} value={folder.id}>{folder.name}</option>)}
              {/* <option value="newfolder" onSelect={e => console.log(e.target.value)}>New Folder</option> */}
            </select>
            <button type="submit">Save to Selected Folder</button>
        </form>
        <form>

        </form>
      </>
    );
  }

  export default SaveItemForm;