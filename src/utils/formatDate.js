// utils/formatDate.js

// A função formatDate agora é exportada como uma exportação nomeada
export function formatDate(date) {
    return new Date(date).toLocaleString('pt-BR', {
      month: 'short', // Mês abreviado
      day: '2-digit', // Dia com 2 dígitos
      hour: '2-digit', // Hora com 2 dígitos
      minute: '2-digit' // Minuto com 2 dígitos
    });
  }
  