import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { getVideoList, deleteVideoList } from "../../../../services/DassApi";

interface VideoData {
  title: string;
  urlLink: string;
  description: string;
}

interface DeleteModalProps {
  showModal: boolean;
  closeModal: () => void;
}

function DeleteModal({ showModal, closeModal }: DeleteModalProps) {
  const [videoList, setVideoList] = useState<VideoData[]>([]);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  useEffect(() => {
    async function fetchVideoList() {
      try {
        const response = await getVideoList();
        if (response?.status === 200) {
          setVideoList(response.data);
        } else {
          throw new Error("Failed to fetch video list");
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchVideoList();
  }, [videoList]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTitle(event.target.value);
  };

  const handleSaveChanges = () => {
    // Call deleteVideoList method with selectedTitle
    deleteVideoList(selectedTitle)
      .then(() => {
        closeModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>영상 삭제하기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Select
          aria-label="Default select example"
          onChange={handleTitleChange}
          value={selectedTitle}
        >
          <option value="">삭제할 영상 선택</option>
          {videoList.map((video) => (
            <option key={video.title} value={video.title}>
              {video.title}
            </option>
          ))}
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
