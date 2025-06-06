import { Receipt,  Plus, Package } from "@phosphor-icons/react";

export const NavLinks = [
  {
    id: 1,
    label: 'Pedidos',
    path: 'pedidos',
    icon: <Receipt size={24} />
  },
  {
    id: 2,
    label: 'Produtos',
    path: 'produtos',
    icon: <Package size={24} />  // caixa/embalagem
  },
  {
    id: 3,
    label: 'Adicionar Produto',
    path: 'novo-produto',
    icon: <Plus size={24} />  // sinal de mais
  },
];
