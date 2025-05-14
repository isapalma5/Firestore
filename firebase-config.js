// Importa a função para inicializar o app do Firebase
import { initializeApp } from 'firebase/app';

// Importa a função para obter a instância do Firestore
import { getFirestore } from 'firebase/firestore';

// Configuração do Firebase com as credenciais do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyB9m3obI0igBi9guyQzErV8-i-8BtHXoww", // Chave de API para autenticar seu app no Firebase
  authDomain: "teste-51c5a.firebaseapp.com", // Domínio de autenticação
  projectId: "teste-51c5a", // ID do projeto no Firebase
  storageBucket: "teste-51c5a.firebasestorage.app", // Bucket de armazenamento para arquivos
  messagingSenderId: "970441138037", // ID do remetente para mensagens
  appId: "1:970441138037:web:d5bbc9af3e46a53fc97d3c" // ID único do app
};

// Inicializa o app do Firebase com a configuração fornecida
const app = initializeApp(firebaseConfig);

// Obtém a instância do Firestore a partir do app inicializado
const db = getFirestore(app);

// Exporta a instância do Firestore para que possa ser utilizada em outras partes do código
export { db };