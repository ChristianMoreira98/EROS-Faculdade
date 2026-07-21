//Seleciona o body da página HTML
const body = document.querySelector('body');

//Seleciona o ícone dentro do botão de tema
const iconeTema = document.querySelector('#icone-tema');

//Função para alternar o tema
function alternarTema(){
    //Adiciona ou remove a class dark
    body.classList.toggle('dark');  
};



function processarInscricao(){
const nome = document.querySelector('#nomeAluno').value;
const curso = document.querySelector('#curso').value;
const turno = document.querySelector('#turno').value ;


const resultado = document.querySelector("#resultado");

if(nome.trim() ==='' || curso === '' || turno ===''){
    resultado.innerText = "Por favor, preencha todos os campos para continuar!"
     resultado.style.color = "red"
        return; 
}

resultado.innerHTML = `Olá, ${nome}, tudo bem?
Sua pré-inscrição no curso de ${curso}, no turno da ${turno}, foi registrada com sucesso! Em breve, nossa equipe entrará em contato com você ${nome}, para dar continuidade ao processo seletivo`;
resultado.style.color = "green";
};