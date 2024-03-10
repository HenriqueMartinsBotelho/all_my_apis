import { Cliente } from "@/types/all";
import React from "react";
import Modal from "react-modal";

interface ClientesModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  clientes: string[];
}

export const ClientesModal: React.FC<ClientesModalProps> = ({
  isOpen,
  onRequestClose,
  clientes,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Lista de Clientes"
      className="absolute top-1/2 left-1/2 w-1/3 max-h-96 overflow-auto transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg shadow-lg"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <h2 className="text-lg font-bold mb-4">Clientes a Visitar</h2>
      <button
        onClick={onRequestClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        <span>&times;</span>
      </button>
      <ul>
        {clientes.map((cliente, index) => (
          <li key={index} className="border-b last:border-none py-2">
            <p>{`${index + 1}. ${cliente}`}</p>
          </li>
        ))}
      </ul>
    </Modal>
  );
};
