let nomes = [];
let idades = [];
let candidatos = [];

function exibirDataEHora(){
    //console.log("Ola Mundo, este é meu codigo");
    
    document.getElementById("dataEHora").innerHTML = Date();
}

function contabilizarVoto(){

    /*let variavel;
    var variavel2;
    const variavel3 = 3; //não muda
    */


    
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let candidato = document.getElementById("candidato").value;

    //console.log("Teste do nome: "+ nome);

    

    //console.log(nome.length);

    if(nome == "" || idade == "" || candidato == ""){
        alert("Digite os dados.");
    }else{

        if(idade < 16){
            alert("Você é menor e não pode votar");
        }else{
            //console.log("nome "+nome);
            
            
            nomes[nomes.length] = nome;
            idades[idades.length] = idade;
            candidatos[candidatos.length] = candidato;
            
            alert("Votado com sucesso!")

        }
    }

}

function validarVotos(){
    for(let i = 0; i<nomes.length; i++){
        console.log("Nome: "+nomes[i]+", Idade: "+idades[i]+", Candidato: "+candidatos[i])
    }
}

function qtdVotos(){
    /*
    let count = 0;
    for(let i = 0; i<nomes.length; i++){
        count++;
    }  

    alert("Numero de Votos até o momento: "+count);*/

    alert("Numero de Votos até o momento: "+nomes.length);
}

function finalizarVotacao(){
    
    let countVotes = [];

    countVotes[0] = 0;
    countVotes[1] = 0;
    countVotes[2] = 0;
    
    for(let i = 0; i<nomes.length; i++){
        if(candidatos[i]=="cand1"){
            countVotes[0]+=1;
        }else if(candidatos[i]=="cand2"){
            countVotes[1]+=1;
        }else{
            countVotes[2]+=1;
        }
    }

    

    if(countVotes[0] > countVotes[1] && countVotes[0] > countVotes[2]){
        let porcent = (countVotes[0]/nomes.length)*100;
        alert("Candidato 1 é o mais votado, com "+countVotes[0]+" votos, representando: "+porcent+"% da população.");
        limparVotos();
    }else if(countVotes[1] > countVotes[0] && countVotes[1] > countVotes[2]){
        let porcent = (countVotes[1]/nomes.length)*100;
        alert("Candidato 2 é o mais votado, com "+countVotes[1]+" votos, representando: "+porcent+"% da população.");
        limparVotos();
    }else if(countVotes[2] > countVotes[1] && countVotes[2] > countVotes[0]){
        let porcent = (countVotes[2]/nomes.length)*100;
        alert("Candidato 3 é o mais votado, com "+countVotes[2]+" votos, representando: "+porcent+"% da população.");
        limparVotos();
    }else{
        alert("Erro na contagem votação")
    }

    
}

function limparVotos(){
    nomes = [];
    idades = [];
    candidatos = [];
    console.log("Dados limpados com sucesso")
}