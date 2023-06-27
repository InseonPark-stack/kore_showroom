import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { putVideoList } from "../../../../services/DassApi";

interface InsertValue {
  title: string;
  urlLink: string;
  description: string;
}

function AddonModal(props: any) {
  const { showModal, closeModal } = props;
  const [insertValue, setInsertValue] = useState<InsertValue>({
    title: "",
    urlLink: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInsertValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const callUpdateList = async () => {
    try {
      await putVideoList(insertValue);
      setInsertValue({
        title: "",
        urlLink: "",
        description: "",
      });
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Loom 영상 추가하기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="AddonForm.title">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="제목을 입력해주세요."
              autoFocus
              value={insertValue.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="AddonForm.urlLink">
            <Form.Label>링크</Form.Label>
            <Form.Control
              type="text"
              name="urlLink"
              placeholder="링크"
              value={insertValue.urlLink}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="AddonForm.description">
            <Form.Label>설명</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="간단한 설명"
              value={insertValue.description}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={callUpdateList}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddonModal;
