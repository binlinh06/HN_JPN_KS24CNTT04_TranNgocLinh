import React, { useEffect, useMemo } from "react";
import { Table } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import debounce from "lodash.debounce";
import Badge from "react-bootstrap/Badge";

interface Post {
  id: number;
  title: string;
  image: string;
  date: string;
  status: boolean;
  content?: string;
}
export default function ListPost() {
  const [post, setPost] = useState<Post[]>([]);
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState<string>("all");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [confirmShow, setConfirmShow] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const fetchSearchResults = async (keyword: string) => {
    if (!keyword.trim()) {
      setSearchResults([]);
      return;
    }
    setIsSearching(true);
    try {
      const res = await axios.get(`http://localhost:8080/posts?q=${keyword}`);
      setSearchResults(res.data);
    } catch (error) {
      console.log("Lỗi tìm kiếm:", error);
    } finally {
      setIsSearching(false);
    }
  };
  // Tạo phiên bản debounce (chỉ gọi API sau khi ngừng gõ 500ms)
  const debouncedSearch = useMemo(
    () => debounce((keyword: string) => fetchSearchResults(keyword), 500),
    []
  );

  // Cleanup debounce khi unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleConfirmToggle = (post: Post) => {
    setSelectedPost(post);
    setConfirmShow(true);
  };
  const handleConfirmAction = async () => {
    if (selectedPost) {
      await handleToggleStatus(selectedPost.id, selectedPost.status);
    }
    setConfirmShow(false);
    setSelectedPost(null);
  };

  const [newPost, setNewPost] = useState<Omit<Post, "id" | "date">>({
    title: "",
    image: "",
    content: "",
    status: true,
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  async function getAllPost() {
    try {
      const res = await axios.get("http://localhost:8080/posts");
      setPost(res.data);
    } catch (error) {
      console.log("Lỗi API", error);
    }
  }
  useEffect(() => {
    getAllPost();
  }, []);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/posts/${id}`);
      setPost(post.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Lỗi khi xóa bài viết", error);
    }
  };
  const handleEdit = (post: Post) => {
    setEditingId(post.id);
    setNewPost({
      title: post.title,
      image: post.image,
      content: post.content || "",
      status: post.status,
    });
    setShow(true);
  };
  const handleSave = async () => {
    try {
      if (editingId) {
        // Cập nhật
        const updatedData = {
          ...newPost,
          date: new Date().toISOString().split("T")[0], // cập nhật ngày nếu cần
        };
        await axios.patch(
          `http://localhost:8080/posts/${editingId}`,
          updatedData
        );
        setPost(
          post.map((item) =>
            item.id === editingId ? { ...item, ...updatedData } : item
          )
        );
      } else {
        // Thêm mới
        const newData = {
          ...newPost,
          id: Date.now(),
          date: new Date().toISOString().split("T")[0],
        };
        await axios.post("http://localhost:8080/posts", newData);
        setPost([...post, newData]);
      }

      // Reset modal
      setShow(false);
      setEditingId(null);
      setNewPost({ title: "", image: "", content: "", status: true });
    } catch (error) {
      console.log("Lỗi khi lưu bài viết", error);
    }
  };

  const handleToggleStatus = async (id: number, currentStatus: boolean) => {
    try {
      const updated = { status: !currentStatus };
      await axios.patch(`http://localhost:8080/posts/${id}`, updated);

      setPost(
        post.map((p) => (p.id === id ? { ...p, status: !currentStatus } : p))
      );
    } catch (error) {
      console.log("Lỗi khi cập nhật trạng thái", error);
    }
  };

  return (
    <div>
      <h1> Danh sách bài viết</h1>
      <input
        type="text"
        placeholder="Tìm kiếm bài viết..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          debouncedSearch(e.target.value);
        }}
      />

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Tất cả</option>
        <option value="true">Đã xuất bản</option>
        <option value="false">Chưa xuất bản</option>
      </select>

      <Button variant="primary" onClick={handleShow}>
        Thêm bài viết
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingId ? "Cập nhật bài viết" : "Thêm bài viết mới"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên bài viết</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newPost.title}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Hình ảnh</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={newPost.image}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nội dung bài viết</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="content"
                value={newPost.content}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {editingId ? "Cập nhật" : "Lưu mới"}
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={confirmShow} onHide={() => setConfirmShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPost?.status
            ? "Bạn có chắc chắn muốn ngừng xuất bản bài viết?"
            : "Bạn có chắc chắn muốn xuất bản lại bài viết?"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setConfirmShow(false)}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleConfirmAction}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover>
        <thead>
          <tr className="text-center align-middle">
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Ngày viết</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {(searchTerm ? searchResults : post)

            .filter((item) =>
              filter === "all" ? true : String(item.status) === filter
            )
            .map((item, index) => (
              <tr key={item.id} className="text-center align-middle">
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    width="50px"
                    height="50px"
                    style={{ borderRadius: "50%" }}
                  />
                </td>
                <td>{item.date}</td>
                <td>
                  {item.status ? (
                    <Badge bg="success" className="fw-bold px-3 py-2">Đã xuất bản</Badge>
                  ) : (
                    <Badge bg="danger" className="fw-bold px-3 py-2">Chưa xuất bản</Badge>
                  )}
                </td>

                <td>
                  <Button
                    variant={item.status ? "secondary" : "success"}
                    size="sm"
                    className="me-2"
                    onClick={() => handleConfirmToggle(item)}
                  >
                    {item.status ? "Chặn" : "Mở"}
                  </Button>

                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(item)}
                  >
                    Sửa
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
          {/* Loading khi tìm kiếm */}
          {isSearching && (
            <tr>
              <td colSpan={6} className="text-center text-muted">
                Đang tìm kiếm...
              </td>
            </tr>
          )}
          {/* Nếu không có kết quả */}
          {searchTerm && searchResults.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center text-danger">
                Không có kết quả tìm kiếm
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
