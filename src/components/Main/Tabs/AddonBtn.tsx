import "./Tabs.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import AddonModal from "./AddonModal/AddonModal";
import DeleteModal from "./AddonModal/DeleteModal";
import "./Tabs.css";

function AddonBtn() {
  const [showAddonModal, setShowAddonModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openAddonModal = () => {
    setShowAddonModal(true);
  };

  const closeAddonModal = () => {
    setShowAddonModal(false);
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="btnPkg">
      <Button variant="success" onClick={openAddonModal}>
        추가하기
      </Button>
      <Button variant="danger" onClick={openDeleteModal}>
        삭제
      </Button>

      <AddonModal showModal={showAddonModal} closeModal={closeAddonModal} />
      <DeleteModal showModal={showDeleteModal} closeModal={closeDeleteModal} />
    </div>
  );
}

export default AddonBtn;
