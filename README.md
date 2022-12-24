# learning-comunication-between-systems

> REST

- Representationalstate of transfer
- Surgiu em 2000por Roy Fielding em uma dissertação de doutorado
- Simplicidade
- Stateless (Não guarda estado) 
- Cacheável

> REST: Níveis de maturidade (Richardson Maturity Model)

> Nível 0: The Swamp of POX 

- Quando não há padrão

> Nível 1: Ultilização de resources 

    Verbo    URI           Operação

    GET      /products/1   Buscar
    POST     /products     Inserir
    PUT      /products/1   Alterar
    DELETE   /products/1   Remover

> Nível 2: Verbos HTTP

    Verbo    Utilização           

    GET      Recuperar Informação
    POST     Inserir
    PUT      Alterar
    DELETE   Remover

> Nível 3: HATEOAS (Hypermedia as he Engine of Application State)

HTTP/1.1 200 OK
Content-Type: application/vnd.acme.account+json
Content-Length:...

```json
{
    "account": {
        "account_number": 1234,
        "balance": {
            "currency": "usd",
            "value": 100.00
        },
        "links": {
            "deposit": "/accounts/1234/deposit",
            "withdraw": "/accounts/1234/withdraw",
            "transfer": "/accounts/1234/transfer",
            "close": "/accounts/1234/close",
        }
    }
}
```

> REST: Uma boa API REST

- Ultiliza URIs únicas para serviços eitens que expostos para esses serviços
- Ultiliza todos os verbos HTTP para realizar as operações em seus recursos, incluindo caching
- Provê links relacionais para os recursos exemplificando o que pode ser feito

> REST: HAL, Collection+JSON e Siren

>HAL

Media type = application/hal+json

```json
{
    "_links": {
        "self": {
            "href": "http://fullcycle.com.br/api/user/anderson"
        }
    },
    "id": "anderson",
    "name": "Anderson Santos",
    "_embedded": {
        "family": [
            {
                "_links": {
                    "self": {
                        "href": "http://fullcycle.com.br/api/user/beatriz"
                    }
                },
                "id": "beatriz",
                "name": "Maria Beatriz",
            }
        ]
    }
}
```


> gRPC (Remote Procedure Call)

- gRPC é um framework desenvolvido pela google que tem o objetivo facilitar o processo de comunicação entre sistemas 
de uma forma extremamente rápida, leve, independente de linguagem.

- Faz parte da CNCF (Cloud Native Computing Foundation)

> Em quais casos podemos ultilizar ?

- Ideal para microsserviços 
- Mobile, Browsers e Backend
- Geração das bibliotecas de forma automática 
- Streaming bidirecional ultilizando HTTP/2

> Linguagens (Suporte oficial)

- gRPC-GO
- gRPC-JAVA
- gRPC-C
    - C++
    - Python
    - Ruby
    - Objective C
    - PHP
    - C#
    - Node.js
    - Dart
    - Kotlin / JVM

> Protocol Buffers

- Protocol buffers are Google's language-neutral, plataform-neural, extensible mechanism for serializing structured daa -think XML, but smaller, faster, and
simpler.

> Proocol Buffers vs JSON

- Arquivos binários < JSON
- Processo de serialização é mais leve (CPU) do que JSON
- Gasta menos recurso de rede
- Processo é mais veloz

> Protocol Buffers : fileFormated 

```proto
syntax = "proto3";

message SearchRequest {
    string query = 1;
    int32 page_number = 2;
    int32 result_per_page = 3;
}
```

> HTTP/2

- Nome original criado pela Google era SPDY
- Lançado em 2015
- Dados trafegados são binários e não texto como no HTTP 1.1
- Ultiliza a mesma conexão TCP para enviar e receber dados do cliente e do servidor (Multiplex)
- Server Push
- Headers são comprimidos
- Gasta menos recursos de rede 
- Processo é mais veloz

> Formatos de comunicação gRPC (HTTP/2)

- gRPC - API "unary" (cliente -> servidor)
o cliente manda uma requisição e o servidor retorna uma response.

- gRPC - API "Server streaming" 
o cliente manda uma requisição e o servidor retorna uma response ou várias response
ao invéz do servidor retornar uma única response com o resultado completo do processamento
a medida que ele vai processando as informações ele vai mandando o response para o client e
já ir processando isso torna o processo mais rápido.

- gRPC - API "Client streaming" 
o cliente manda uma requisição ou várias requisições ou seja a medida que o cliente vai processando 
as informações ele vai enviando para o servidor quando o servidor finalizar todo o processamento das informações
que o cliente enviou ele manda uma única response com todo o processameno realizado.

- gRPC - API "Bi directional streaming" 
A medida que o cliente manda as informações o server recebe, processa e envia novamente
o cliente pode enviar uma ou mais requests e o server pode retornar uma ou várias responses
isso em apenas uma conexão, essa comunicação é uma mesclagem do (API "Server streaming") com (API "Client streaming").

> REST vs gRPC

- Rest
    - Texto / JSON
    - Unidirecional
    - Alta latência
    - Sem contrato (maior chance de erros)
    - Sem suporte a streaming (Request / Response)
    - Design pré-definido
    - Blibiotecas de terceiro

- gRPC
    - Protocol Buffers
    - Bidirecional e Assíncrono
    - Baixa latÊncia
    - Contrato definido (.proto)
    - Suporte a streaming
    - Design é livre
    - Geração de código