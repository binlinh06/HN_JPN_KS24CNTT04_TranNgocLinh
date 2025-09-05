import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, Select, DatePicker, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";

type Student = {
  id: string;
  name: string;
  age: number;
  gender: "Nam" | "Nữ";
  dob?: string;
  birthplace?: string;
  address?: string;
};
type StudentFormValues = {
  id: string;
  name: string;
  age: number;
  gender: "Nam" | "Nữ";
  dob?: dayjs.Dayjs;
  birthplace?: string;
  address?: string;
};

const { Option } = Select;

export default function Bai10_SS12() {
  const [students, setStudents] = useState<Student[]>([
    { id: "SV001", name: "Nguyễn Văn A", age: 20, gender: "Nam", dob: "2005-01-01", birthplace: "Hà Nội", address: "Hà Đông" },
    { id: "SV002", name: "Nguyễn Văn B", age: 21, gender: "Nữ", dob: "2004-02-15", birthplace: "Hải Phòng", address: "Cầu Giấy" },
    { id: "SV003", name: "Nguyễn Văn C", age: 19, gender: "Nam", dob: "2006-03-20", birthplace: "Đà Nẵng", address: "Thanh Xuân" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const [form] = Form.useForm();

  // Xử lý thêm/sửa
  const handleSubmit = (values: StudentFormValues) => {
    const studentData: Student = {
      id: values.id,
      name: values.name,
      age: values.age,
      gender: values.gender,
      dob: values.dob ? values.dob.format("YYYY-MM-DD") : undefined,
      birthplace: values.birthplace,
      address: values.address,
    };

    if (editingStudent) {
      // update
      setStudents((prev) =>
        prev.map((s) => (s.id === editingStudent.id ? studentData : s))
      );
      message.success("Cập nhật thành công!");
    } else {
      // add
      if (students.some((s) => s.id === studentData.id)) {
        message.error("Mã sinh viên đã tồn tại!");
        return;
      }
      setStudents((prev) => [...prev, studentData]);
      message.success("Thêm mới thành công!");
    }

    setModalOpen(false);
    form.resetFields();
    setEditingStudent(null);
  };

  // Xem chi tiết
  const handleView = (student: Student) => {
    setViewMode(true);
    setEditingStudent(student);
    form.setFieldsValue({
      ...student,
      dob: student.dob ? dayjs(student.dob) : null,
    });
    setModalOpen(true);
  };

  // Sửa
  const handleEdit = (student: Student) => {
    setViewMode(false);
    setEditingStudent(student);
    form.setFieldsValue({
      ...student,
      dob: student.dob ? dayjs(student.dob) : null,
    });
    setModalOpen(true);
  };

  // Xóa
  const handleDelete = (id: string) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
    message.success("Xóa thành công!");
  };

  // Thêm mới
  const handleAdd = () => {
    setViewMode(false);
    setEditingStudent(null);
    form.resetFields();
    setModalOpen(true);
  };

  const columns: ColumnsType<Student> = [
    {
      title: "#",
      render: (_, __, index) => index + 1,
    },
    { title: "Mã sinh viên", dataIndex: "id" },
    { title: "Tên sinh viên", dataIndex: "name" },
    { title: "Tuổi", dataIndex: "age" },
    { title: "Giới tính", dataIndex: "gender" },
    {
      title: "Hành động",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button type="primary" danger onClick={() => handleView(record)}>
            Xem
          </Button>
          <Button type="default" onClick={() => handleEdit(record)}>
            Sửa
          </Button>
          <Button type="dashed" danger onClick={() => handleDelete(record.id)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4 grid grid-cols-12 gap-4">
      <div className="col-span-7">
        <div className="flex items-center gap-2 mb-4">
          <Button type="primary" onClick={handleAdd}>
            Thêm mới sinh viên
          </Button>
          <Input.Search
            placeholder="Search Here"
            onSearch={(value) => {
              if (value) {
                setStudents((prev) =>
                  prev.filter((s) =>
                    s.name.toLowerCase().includes(value.toLowerCase())
                  )
                );
              } else {
                message.info("Nhập tên để tìm kiếm!");
              }
            }}
            style={{ width: 200 }}
          />
        </div>
        <Table
          dataSource={students}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      </div>

      {/* Modal Form */}
      <Modal
        open={modalOpen}
        title={viewMode ? "Xem thông tin sinh viên" : editingStudent ? "Sửa sinh viên" : "Thêm sinh viên"}
        onCancel={() => setModalOpen(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ gender: "Nam", birthplace: "Hà Nội" }}
        >
          <Form.Item label="Mã sinh viên" name="id" rules={[{ required: true, message: "Nhập mã sinh viên" }]}>
            <Input disabled={!!editingStudent} />
          </Form.Item>
          <Form.Item label="Tên sinh viên" name="name" rules={[{ required: true, message: "Nhập tên sinh viên" }]}>
            <Input disabled={viewMode} />
          </Form.Item>
          <Form.Item label="Tuổi" name="age" rules={[{ required: true, message: "Nhập tuổi" }]}>
            <Input type="number" disabled={viewMode} />
          </Form.Item>
          <Form.Item label="Giới tính" name="gender">
            <Select disabled={viewMode}>
              <Option value="Nam">Nam</Option>
              <Option value="Nữ">Nữ</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Ngày sinh" name="dob">
            <DatePicker format="DD/MM/YYYY" className="w-full" disabled={viewMode} />
          </Form.Item>
          <Form.Item label="Nơi sinh" name="birthplace">
            <Input disabled={viewMode} />
          </Form.Item>
          <Form.Item label="Địa chỉ" name="address">
            <Input disabled={viewMode} />
          </Form.Item>

          {!viewMode && (
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
}
