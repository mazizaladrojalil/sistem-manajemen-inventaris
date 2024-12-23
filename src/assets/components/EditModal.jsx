import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditItemModal({ show, onClose, itemToEdit, updateItem }) {
  const [formData, setFormData] = useState(itemToEdit || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (
      formData.name &&
      formData.quantity > 0 &&
      formData.price >= 100 &&
      new Date(formData.date) <= new Date()
    ) {
      updateItem({ ...formData, total: formData.quantity * formData.price });
      onClose();
    } else {
      alert("Data tidak valid!");
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Barang</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nama Barang</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Kategori</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={formData.category || ""}
              onChange={handleChange}
            >
              <option value="Elektronik">Elektronik</option>
              <option value="Pakaian">Pakaian</option>
              <option value="Makanan">Makanan</option>
              <option value="Lainnya">Lainnya</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Jumlah</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              value={formData.quantity || ""}
              onChange={handleChange}
              min="1"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Harga per Unit</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price || ""}
              onChange={handleChange}
              min="100"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tanggal Masuk</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date || ""}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Batal
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Simpan Perubahan
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditItemModal;
