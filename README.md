# _Front-end_  

<div style="text-align: center"> 

<a href="https://travis-ci.com/Kalkuli/2018.2-Kalkuli_Front-End"><img src="https://travis-ci.com/Kalkuli/2018.2-Kalkuli_Front-End.svg?branch=master" /></a>
<a href="https://codeclimate.com/github/Kalkuli/2018.2-Kalkuli_Front-End/test_coverage"><img src="https://api.codeclimate.com/v1/badges/2a9aa6cb147af153a8c7/test_coverage" /></a>
<a href="https://codeclimate.com/github/Kalkuli/2018.2-Kalkuli_Front-End/maintainability"><img src="https://api.codeclimate.com/v1/badges/2a9aa6cb147af153a8c7/maintainability" /></a>
<a href="https://opensource.org/licenses/GPL-3.0"><img src="https://img.shields.io/badge/license-GPL-%235DA8C1.svg"/></a>

</div> 

<br>

# Configurando o ambiente
Abaixo temos instruções de como configurar o ambiente de forma rápida.   


## Instalando o _Docker_  

#### 1. Desinstale versões antigas

```sudo apt-get remove docker docker-engine docker.io```


#### 2. Atualize o gerenciador de pacotes

```sudo apt-get update```

#### 3. Adicione pacotes necessários

```sudo apt-get install \apt-transport-https \ca-certificates \curl \software-properties-common```

#### 4. Adicione a GPG Key

```curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -```

 Verifique se você tem o fingerprint

```sudo apt-key fingerprint 0EBFCD88```

#### 5. Crie um repositório estável

##### No caso de estar usando o **Ubuntu**, utilize o seguinte comando:
```sudo add-apt-repository \"deb [arch=amd64] https://download.docker.com/linux/ubuntu \$(lsb_release -cs) \table"```

**OBS:** Em algumas distribuições do linux pode ser necessário mudar o "(lsb_release -cs)" de acordo com a distribuição do Ubuntu que o SO é derivado.

##### No caso de estar usando o **Linux Mint** ou **Depping**, utilize o seguinte comando:
```sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu xenial stable```

#### 6. Atualize novamente o gerenciador de pacotes e instale

```sudo apt-get update```

e então

```sudo apt-get install docker-ce```


#### 7. Agora é só dar um Hello World'!

```sudo docker run hello-world```


<br>


## Instalando o _Docker-Compose_   

#### 1. Baixe-o

```sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose```

#### 2. Dê permissões de leitura

```sudo chmod +x /usr/local/bin/docker-compose```

#### 3. Cheque a versão

```docker-compose --version```



<br>

## Colocando no ar
Agora ficou fácil, basta apenas utilizar o _Docker Compose_ para colocar a aplicação no ar! Utilize os comandos:

```sudo docker-compose -f docker-compose-dev.yml build```

e

```sudo docker-compose -f docker-compose-dev.yml up```

Acesse o servidor local no endereço apresentado abaixo:

http://localhost:3000/


Agora você já pode começar a contribuir!


## Testando

Para rodar os testes utilize:

```sudo docker-compose -f docker-compose-dev.yml run front-end npm test```

E para saber a cobertura de testes utilize:

```sudo docker-compose -f docker-compose-dev.yml run front-end npm test -- --coverage```
