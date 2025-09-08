import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, Select, Tag, Pagination } from "antd";
import { v4 as uuid } from "uuid";

type Warehouse = {
  id: string;
  name: string;
  address: string;
  status: "active" | "inactive";
};

type WarehouseFormValues = {
  name: string;
  address: string;
  status: "active" | "inactive";
};

const STATUS_OPTIONS = [
  { label: "Hoạt động", value: "active" },
  { label: "Ngừng hoạt động", value: "inactive" },
];

export default function BT5() {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [form] = Form.useForm();
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [editId, setEditId] = useState<string | null>(null); // lưu ID đang sửa

  useEffect(() => {
    const saved = localStorage.getItem("warehouses");
    if (saved) {
      setWarehouses(JSON.parse(saved));
    }
  }, []);

  const saveToStorage = (data: Warehouse[]) => {
    localStorage.setItem("warehouses", JSON.stringify(data));
  };

  const handleAddOrUpdate = (values: WarehouseFormValues) => {
    if (editId) {
      // Cập nhật
      const updated = warehouses.map((w) =>
        w.id === editId ? { ...w, ...values } : w
      );
      setWarehouses(updated);
      saveToStorage(updated);
      setEditId(null);
    } else {
      // Thêm mới
      const newWarehouse: Warehouse = {
        id: uuid(),
        ...values,
      };
      const updated = [...warehouses, newWarehouse];
      setWarehouses(updated);
      saveToStorage(updated);
    }
    form.resetFields();
  };

  const handleDelete = () => {
    if (deleteId) {
      const updated = warehouses.filter((w) => w.id !== deleteId);
      setWarehouses(updated);
      saveToStorage(updated);
    }
    setIsModalVisible(false);
    setDeleteId(null);
  };

  const handleEdit = (record: Warehouse) => {
    form.setFieldsValue(record); // điền dữ liệu vào form
    setEditId(record.id);
  };

  const columns = [
    {
      title: "Tên kho",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (status: Warehouse["status"]) =>
        status === "active" ? (
          <Tag color="green">Hoạt động</Tag>
        ) : (
          <Tag color="red">Ngừng hoạt động</Tag>
        ),
    },
    {
      title: "Hành động",
      render: (_: unknown, record: Warehouse) => (
        <div className="flex gap-2">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Sửa
          </Button>
          <Button
            danger
            onClick={() => {
              setDeleteId(record.id);
              setIsModalVisible(true);
            }}
          >
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Quản Lý Kho</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <Form form={form} layout="inline" onFinish={handleAddOrUpdate}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Tên kho không được để trống" }]}
          >
            <Input placeholder="Tên kho" />
          </Form.Item>
          <Form.Item name="address">
            <Input placeholder="Địa chỉ" />
          </Form.Item>
          <Form.Item name="status" initialValue="active">
            <Select style={{ width: 150 }} options={STATUS_OPTIONS} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editId ? "Cập nhật" : "Thêm"}
            </Button>
          </Form.Item>
          {editId && (
            <Form.Item>
              <Button
                onClick={() => {
                  form.resetFields();
                  setEditId(null);
                }}
              >
                Hủy
              </Button>
            </Form.Item>
          )}
        </Form>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <Table
          rowKey="id"
          columns={columns}
          dataSource={warehouses}
          pagination={false}
        />
        <div className="flex justify-end mt-4">
          <Pagination defaultCurrent={1} total={warehouses.length} />
        </div>
      </div>

      <Modal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleDelete}
        okText="Xóa"
        cancelText="Hủy"
        title="Xác nhận"
      >
        <p>Bạn có chắc chắn muốn xóa kho này không?</p>
      </Modal>
    </div>
  );
}
