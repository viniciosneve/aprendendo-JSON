const fs = require('fs');  // para conseguir abrir e modificar o arquivo.json
const path = require('path'); //para fazer o caminho ate a pasta e ou o arquivo


//Transformando objeto JS em JSON

//Objeto JS feito para enviar para json
const pessoas= [
    {
      nome: "pessoa 1",
      idade: 15,
      ativo: false,
      notas: ["A+", "A"],
      telefone: {
        residencial: "00 0000-0000",
        celular: "00 0000-0000"
      }
    },
    {
        nome: "pessoa 2",
        idade: 16,
        ativo: false,
        notas: ["A+", "A"],
        telefone: {
          residencial: "00 0000-0000",
          celular: "00 0000-0000"
        }
      },
      {
        nome: "pessoa 3",
        idade: 17,
        ativo: false,
        notas: ["A+", "A"],
        telefone: {
          residencial: "00 0000-0000",
          celular: "00 0000-0000"
        }
      }
  ];


// Convertendo o objeto JS para JSON
const transformando_objeto_JS_para_JSON = JSON.stringify(pessoas, null, 2);
//console.log(transformando_objeto_JS_para_JSON);


// Criando arquivo.json e passando as info para o arquivo

//caminho direto para o arquivo json, para evitar ficar escrevendo o caminho
const arquivo_javascripts_json = path.resolve(__dirname, 'arquivo-javascripts.json');
//fs.writeFileSync(arquivo_javascripts_json, transformando_objeto_JS_para_JSON);





//Acrescentando informações no arquivo.json

//Primeiro, você precisará ler o conteúdo do arquivo JSON existente para poder modificá-lo e adicionar mais informações.

//Em seguida, você pode modificar o objeto lido, adicionando novos dados ou alterando os existentes.

//Depois de modificar o objeto, você pode escrever esse objeto de volta no arquivo JSON.


//ler o arquivo JSON existente
fs.readFile(arquivo_javascripts_json, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error ao ler o arquivo:', err);
    return;
  }
  

  //Converter o conteúdo do arquivo em um objeto JS
  let pessoas_json_para_JS = JSON.parse(data);


  //Criando a novo registro
  const nova_pessoa = {
    nome: "pessoa 5",
    idade: 19,
    ativo: false,
    notas: ["A+", "A"],
    telefone: {
      residencial: "00 0000-0000",
      celular: "00 0000-0000"
      }
    };
  
  
  //Adicionando no json o novo registro
  pessoas_json_para_JS.push(nova_pessoa);

  
  //Agora convertendo para arquivo json de volta
  const pessoas_JS_para_json = JSON.stringify(pessoas_json_para_JS, null, 2);

  fs.writeFile(arquivo_javascripts_json, pessoas_JS_para_json, 'utf8', (err) => {
    if (err) {
      console.error('Erro ao escrever no arquivo', err);
      return;
    }
    console.log('Dado adicionado no arquivo com sucesso!')  
  })

});