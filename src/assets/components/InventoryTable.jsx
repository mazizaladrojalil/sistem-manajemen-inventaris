import React, { useState } from 'react';

function InventoryTable({ items, setEditItem, deleteItem }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterCategory === '' || item.category === filterCategory)
    );
  });

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50 m-2"
          placeholder="Cari barang..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="form-select m-2"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">Semua Kategori</option>
          <option value="Elektronik">Elektronik</option>
          <option value="Pakaian">Pakaian</option>
          <option value="Makanan">Makanan</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      <table className="table table-responsive table-bordered text-center">
        <thead>
          <tr className='align-top'>
            <th>Nama Barang</th>
            <th>Kategori</th>
            <th>Jumlah</th>
            <th>Harga Total</th>
            <th>Tanggal Masuk</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>Rp{item.total}</td>
                <td>{item.date}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2 mb-2"
                    onClick={() => setEditItem(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm mb-2"
                    onClick={() => deleteItem(item.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                Tidak ada data barang
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;
