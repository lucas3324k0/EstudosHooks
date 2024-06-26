import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("Buscando os dados no BD...");

    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>{myItems && myItems.map((items) => <p key={items}>{items}</p>)}</div>
  );
};

export default List;
