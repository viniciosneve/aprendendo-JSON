import json
import os


'''pessoas= [
    {
        "nome" : "pessoa 1",
        "idade" : 15,
        "ativo" : False,
        "notas" : ["A+", "A"],
        "telefone" : {
            "residencial" : "00 0000-0000",
            "celular" : "00 0000-0000"
        }
    },

    {
        "nome" : "pessoa 2",
        "idade" : 16,
        "ativo" : False,
        "notas" : ["A+", "A"],
        "telefone" : {
            "residencial" : "00 0000-0000",
            "celular" : "00 0000-0000"
        }
    },

    {
        "nome" : "pessoa 3",
        "idade" : 17,
        "ativo" : False,
        "notas" : ["A+", "A"],
        "telefone" : {
            "residencial" : "00 0000-0000",
            "celular" : "00 0000-0000"
        }
    }
]


#criando caminho direto aonde eu estou
BASE_DIR = os.path.dirname(__file__) 

#criando uma arquivo chamado 'arquivo-python.json' na pasta que eu estou, usando o caminho fornecido pelo BASE_DIR.
SAVE_TO = os.path.join(BASE_DIR, 'arquivo-python.json') 


#Aqui vamos usar a forma de manipular arquivo de "texto" para passar os dados para o arquivo.json
with open(SAVE_TO, 'w') as file:
    

    #dumps= Que seria para fazer o dump de uma string
    #dump= Para fazer o dump em um arquivo

    #json.dump(
    #    nome da variavel que vai para o arquivo.js, 

    #    arquivo.js que esta como 'file',

    #    indent serve para deixar ceparado do jeito certo
    #    )
    
    
    #print(json.dumps(
    #    nome da variavel que tem as info que vai ou que ja foi para o aquirvo,

    #    indent serve para deixar ceparado do jeito certo
    #))
    
    
    json.dump(pessoas, file, indent= 2)


print(json.dumps(pessoas, indent=2))'''



'''BASE_DIR = os.path.dirname(__file__)
JSON_FILE = os.path.join(BASE_DIR, 'arquivo-python.json')

with open(JSON_FILE, 'r') as file:
    #Load= vai carregar as informações dentro do arquivo
    #Loads= vai transformar as informações que venho em string em json
    pessoas = json.load(file)
    for pessoa in pessoas:
        print(pessoa['nome'], '')'''


json_string= '''[{"nome": "pessoa 1","idade": 15,"ativo": false,"notas": ["A+","A"],"telefone": {"residencial": "00 0000-0000","celular": "00 0000-0000"}},{"nome": "pessoa 2","idade": 16,"ativo": false,"notas": ["A+","A"],"telefone": {"residencial": "00 0000-0000","celular": "00 0000-0000"}},{"nome": "pessoa 3","idade": 17,"ativo": false,"notas": ["A+","A"],"telefone": {"residencial": "00 0000-0000","celular": "00 0000-0000"}}]'''

pessoas= json.loads(json_string)

for pessoa in pessoas:
    print(pessoa)