import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../modals/ConfirmModal';
import Button from '../ui/Button'; 

type Props = {
  backTo?: string;
  title?: string;
};
export default function StudentHeader({ backTo, title }: Props) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBackClick = () => {
    if (backTo) {
      setIsModalOpen(true);
    }
  };

  const handleConfirmExit = () => {
    setIsModalOpen(false);
    if (backTo) {
      navigate(backTo);
    }
  };
  const handleCancelExit = () => {
    setIsModalOpen(false);
  };
  return (
    <header className="student-header">
      <div className="header-left">
        {backTo && (
          <Button onClick={handleBackClick} className="back-button">
            Назад
          </Button>
        )}
        <span className="header-title">{title}</span>
      </div>

      <ConfirmModal
        open={isModalOpen}
        title="Выход из тестирования"
        text="Вы уверены, что хотите выйти из тестирования? Результаты будут не сохранены."
        confirmText="Выйти"
        cancelText="Отмена"
        onConfirm={handleConfirmExit}
        onCancel={handleCancelExit}
      />
    </header>
  );
}
