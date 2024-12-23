import React, { useState } from 'react';

function AddItemForm({ addItem }) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Elektronik',
    quantity: 1,
    price: 100,
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.quantity < 1 || formData.price < 100 || new Date(formData.date) > new Date()) {
      alert('Data tidak valid!');
      return;
    }
    addItem({ ...formData, id: Date.now(), total: formData.quantity * formData.price });
    setFormData({
      name: '',
      category: 'Elektronik',
      quantity: 1,
      price: 100,
      date: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-3">
        <div className="col-md-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Nama Barang"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <select
            name="category"
            className="form-select"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Elektronik">Elektronik</option>
            <option value="Pakaian">Pakaian</option>
            <option value="Makanan">Makanan</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <div className="col-md-2">
          <input
            type="number"
            name="quantity"
            className="form-control"
            placeholder="Jumlah"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            name="price"
            className="form-control"
            placeholder="Harga"
            value={formData.price}
            onChange={handleChange}
            min="100"
            required
          />
        </div>
        <div className="col-md-2">
          <input
            type="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-primary">Tambah</button>
        </div>
      </div>
    </form>
  );
}

export default AddItemForm;
