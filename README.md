# Ambiente de Design FHIR (ADF)

## Como usar

Ambiente de Design FHIR (ADF) é um software que oferece funcionalidades para o design de soluções FHIR. O objetivo é propor uma interface para os usuários do ADF, aqui denominados de projetistas.

Install it and run:

```sh
yarn 
yarn dev
```

## User flow (criação de ValueSet)

Uma instância de [ValueSet](https://www.hl7.org/fhir/r4/valueset.html) é empregada para reunir conceitos de uma ou mais instâncias de
CodeSystem para uso em um contexto específico.

- Ao projetista está disponível a criação de instância de CodeSystem.
- O projetista requisita a criação.
- A criação pode ser de dois tipos: (a) para suplementar um CodeSystem existente ou (b) criar um novo.
- Opção (a). Ao criar um CodeSystem para suplementar um existente (_supplements_) é preciso identificar o CodeSystem para o qual o suplemento será criado. O suplemento inclui a definição de uma ou mais propriedades. Cada propriedade é definida por um código (nome da propriedade), uma uri, uma descrição e um tipo. O tipo está restrito a: _code_, _Coding_, _string_, _integer_, _boolean_, _dateTime_ ou _decimal_. Observe que o código e o tipo são obrigatórios, ao contrário dos demais. Quando se define um suplemento, além de definir as propriedades é necessário fornecer os valores correspondentes para cada conceito definido no CodeSystem para o qual o suplemento é criado. Observe que não é permitido acrescentar conceitos, mas valores para as propriedades definidas para cada um dos conceitos existentes.
- Opção (b). Na criação de um novo CodeSystem o projetista vê os campos principais pertinentes a um CodeSystem: identificador, título e descrição, dentre outros. Há muitos outros conforme a documentação do [recurso](http://hl7.org/fhir/r4/codesystem) e fornece os valores correspondentes.
- Convém observar que extensões podem ser acrescentadas ao CodeSystem ou a qualquer um dos atributos do CodeSystem. Ou seja, é preciso estar disponível ao projetista a seleção das extensões que deseja acrescentar, seja à instância como um todo ou a um atributo específico juntamente com o valor correspondente.

## Captura de tela do ADF

![Screenshot_20230809_192538](https://github.com/ArthurFariaPeixoto/FhirHub/assets/102395421/d1f6745f-6718-446b-9583-65ce5523db24)

![Screenshot_20230809_192618](https://github.com/ArthurFariaPeixoto/FhirHub/assets/102395421/b2ad1eba-3400-4ed9-bab3-798e175c0d69)

![Screenshot_20230809_192557](https://github.com/ArthurFariaPeixoto/FhirHub/assets/102395421/0d237b28-803e-4f6c-9787-f9f5dbdbf1eb)
