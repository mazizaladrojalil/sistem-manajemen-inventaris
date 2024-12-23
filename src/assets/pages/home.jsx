import React, { useState } from "react";
import AddItemForm from "../components/AddItemForm";
import InventoryTable from "../components/InventoryTable";
import EditItemModal from "../components/EditModal";

export default function Home(params) {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const addItem = (item) => setItems([...items, item]);

  const updateItem = (updatedItem) => {
    setItems(
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const deleteItem = (id) => setItems(items.filter((item) => item.id !== id));
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <h1 className="m-3">Sistem Manajemen Inventaris</h1>
      </nav>
      <div className="main-container">
        <div className="card container">
          <AddItemForm addItem={addItem} />
          <InventoryTable
            items={items}
            setEditItem={setEditItem}
            deleteItem={deleteItem}
          />
          {editItem && (
            <EditItemModal
              show={!!editItem}
              onClose={() => setEditItem(null)}
              itemToEdit={editItem}
              updateItem={updateItem}
            />
          )}
        </div>
      </div>
    </>
  );
}
