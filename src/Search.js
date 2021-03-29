import React, { useEffect, useState } from "react";

function Search({ results, setResults, api, user, setFolders }) {
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  useEffect(() => {
    setResults([])
  }, [submittedSearch])

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedSearch(search);
    
    fetch(`${api}/search/collectors/${search}`)
      .then((r) => r.text())
      .then((html) => {
        const itemList = parseCollectorsData(html)
        setResults((results) => [...results, ...itemList]);
      });

    fetch(`${api}/search/ebay/${search}`)
    .then((r) => r.text())
    .then((html) => {
      const itemList = parseEbayData(html)
      setResults(results => [...results, ...itemList]);
    });

    // fetch(`${api}/search/${search}`)
    //   .then((r) => r.json())
    //   .then((itemList) => {
    //     setSubmittedSearch(search);
    //     setResults(itemList);
    //   });
  }

  //Parse item info out of collectors.com scr*pe
  const parseCollectorsData = (html) => {
    const parser = new DOMParser()
    const dom = parser.parseFromString(html, 'text/html')
    const items= Array.from(dom.querySelectorAll('div.searchresultitem'))

    const itemList =  items.map( (item, index) => {
      //Collectors.com code
      //pic
      const img = item.querySelector('img').src

      //price
      let price = item.querySelector('.itemsaleprice')
      if(!price) {
        return null
      } else { 
        price = parseFloat(price.innerText.substring(6).replace(',', '')) 
      }
      
      //name of item
      const name = item.querySelector('.itemdescr').firstElementChild.innerText
      
      //link to collectors.com
      const url = "https://www.collectors.com" + item.querySelector('a').pathname
      
      const id = index+100
      return {name, img, price, url, id}
    })
    return itemList.filter(item => item)
  }

  const parseEbayData = (html) => {
    const parser = new DOMParser()
    const dom = parser.parseFromString(html, 'text/html')
    const items= Array.from(dom.querySelectorAll('.s-item.s-item--watch-at-corner'))
    
    const itemList = items.map((item, index) => {
      //img
      const img = item.querySelector('.s-item__image-img').src
      //price
      const price = parseFloat(item.querySelector('span.s-item__price').innerText.substring(1))
      //name
      const name = item.querySelector('.s-item__title').innerText
      //link
      const url = item.querySelector('a').href
      const id = index
      return {img, price, name, url, id}
    })
  
    return itemList
  }

  function handleTrack(e) {
    fetch(`${api}/users/${user.id}/trackedsearches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ name: submittedSearch, items: results }),
    })
      .then((r) => r.json())
      .then((newFolder) => setFolders((folders) => [...folders, newFolder]));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      {results.length !== 0 ? (
        <button className="button" onClick={handleTrack}>
          Save this search!
        </button>
      ) : null}
    </>
  );
}

export default Search;
