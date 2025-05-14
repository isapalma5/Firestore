
import { db } from './firebase-config.js'; // Importa a configuração do Firestore (instância do db)
import { onSnapshot, collection } from 'firebase/firestore'; // Importa as funções necessárias para escutar dados e acessar coleções

// Função para limpar o terminal antes de exibir novas informações
function limparTerminal() {
  process.stdout.write('\x1Bc'); 
}

// Função para escutar mudanças em tempo real na coleção "usuarios" do Firestore
function escutarUsuariosTempoReal() {
  // Cria uma referência para a coleção "usuarios" no Firestore
  const usuariosRef = collection(db, "usuarios");

  // Função onSnapshot escuta em tempo real as mudanças na coleção "usuarios"
  onSnapshot(usuariosRef, (snapshot) => {
    limparTerminal(); // Limpa o terminal sempre que uma nova atualização for detectada

    console.log("🔄 FIRESTORE - ESCUTA EM TEMPO REAL"); // Mensagem indicando que estamos escutando mudanças em tempo real
    console.log("📡 Atualização detectada:\n"); // Mensagem indicando que uma atualização foi detectada

    // Verifica se não há documentos na coleção
    if (snapshot.empty) {
      console.log("Nenhum documento encontrado!"); 
    } else {
      // Caso contrário, exibe os documentos encontrados na coleção
      snapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data()); // Exibe o ID e os dados de cada documento encontrado
      });
    }

    console.log("\n👂 Aguardando novas alterações..."); // Mensagem indicando que o sistema está aguardando novas alterações
  }, (error) => {
    // Caso ocorra um erro na escuta, exibe a mensagem de erro
    console.error("❌ Erro ao escutar dados:", error); // Mensagem de erro ao escutar dados em tempo real
  });
}

// Chama a função para começar a escutar os dados da coleção "usuarios"
escutarUsuariosTempoReal();
