// apiRequests.js

import axios from 'axios';

const baseUrl = 'https://minhaapi.com';

// Função GET para buscar dados do usuário
const fetchUser = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/users/1`);
    console.log('Dados do usuário:', response.data);
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
  }
};

// Função POST para enviar dados de um novo usuário
const sendUser = async (fullName, email) => {
  try {
    const response = await axios.post(`${baseUrl}/api/users`, { fullName, email });
    if (response.status === 201) {
      console.log('Usuário criado:', response.data);
    } else {
      console.error('Erro ao criar usuário.');
    }
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
  }
};

// Executar as funções para testar
fetchUser(); // Teste da requisição GET
sendUser('John Doe', 'john.doe@example.com'); // Teste da requisição POST
