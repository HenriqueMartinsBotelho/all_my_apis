"use client";
import {
  useClientes,
  useFilteredClientes,
  useGetRotas,
} from "@/hooks/useCliente";
import { useState } from "react";
import ClientesTable from "@/components/ClientesTable";
import AdicionarClienteModal from "@/components/AdicionarClientesModal";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { Container } from "@/components/ui/Container";
import { FlexContainer } from "@/components/ui/FlexContainer";
import { Section } from "@/components/ui/Section";
import { ClientesModal } from "@/components/ClientesModal";

export default function Home() {
  const { data: clientes, isLoading, error } = useClientes();
  const { data: rotas } = useGetRotas();
  const { filter, setFilter, filteredClientes } = useFilteredClientes(
    clientes || []
  );

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [clientesModalIsOpen, setClientesModalIsOpen] = useState(false);

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Ocorreu um erro ao buscar os clientes.</div>;

  return (
    <Container>
      <FlexContainer>
        <Input
          type="text"
          placeholder="Filtrar por nome, email ou telefone"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <Button onClick={() => setModalIsOpen(true)}>
          Adicionar Novo Cliente
        </Button>

        <Button onClick={() => setClientesModalIsOpen(true)}>
          Ver Clientes a Visitar
        </Button>
      </FlexContainer>

      <Section>
        <ClientesTable clientes={filteredClientes || []} />
      </Section>

      <ClientesModal
        isOpen={clientesModalIsOpen}
        onRequestClose={() => setClientesModalIsOpen(false)}
        clientes={rotas || []}
      />

      <AdicionarClienteModal
        modalIsOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
    </Container>
  );
}
