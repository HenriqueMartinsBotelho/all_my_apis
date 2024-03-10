import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Cliente } from "@/types/all";
import { useAddCliente } from "@/hooks/useCliente";

interface AdicionarClienteModalProps {
  modalIsOpen: boolean;
  onClose: () => void;
}

const AdicionarClienteModal: React.FC<AdicionarClienteModalProps> = ({
  modalIsOpen,
  onClose,
}) => {
  const { register, handleSubmit, reset } = useForm<Omit<Cliente, "id">>();
  const { mutate: addCliente, error: addClienteError } = useAddCliente();

  const onSubmit = (data: Omit<Cliente, "id">) => {
    addCliente(data, {
      onSuccess: () => {
        onClose();
        reset();
      },
      onError: () => {
        console.error(addClienteError);
      },
    });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onClose}
      contentLabel="Adicionar Novo Cliente"
      className="max-w-xl m-auto bg-white p-4 mt-12"
      overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto"
    >
      <h2 className="text-2xl font-bold mb-4">Adicionar Cliente</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("nome")}
          type="text"
          placeholder="Nome"
          className="w-full px-3 py-2 mb-2 border rounded"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 mb-2 border rounded"
        />
        <input
          {...register("telefone")}
          type="text"
          placeholder="Telefone"
          className="w-full px-3 py-2 mb-2 border rounded"
        />
        <div className="flex space-x-2">
          <input
            {...register("coordenada_x")}
            type="number"
            placeholder="X Coordenada"
            className="w-full px-3 py-2 mb-2 border rounded"
          />
          <input
            {...register("coordenada_y")}
            type="number"
            placeholder="Y Coordenada"
            className="w-full px-3 py-2 mb-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 mt-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Adicionar Cliente
        </button>
      </form>
    </Modal>
  );
};

export default AdicionarClienteModal;
