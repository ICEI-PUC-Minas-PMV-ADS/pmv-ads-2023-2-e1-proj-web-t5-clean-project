# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01: Morador de um bairro </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Morador dos bairros das cidades, indiferente de classe, sexo ou idade</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
  <td>- Informação do horário aproximado que o agente recolhe o lixo na sua rua
  <br>- Informação sobre uma localização aproximada do agente coletor (caminhão)
  <br>- Guia sobre como fazer a separação de forma correta do lixo residencial
  <br>- Descobrir pontos de coleta seletiva próximos a região que ele/ela reside </td> 
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=centerAgentes de coleta </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Agente, indiferente de sexo ou idade </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
  <td>- Entendimento por parte do usuário/cliente sobre como fazer uma separação correta (principalmente na questão do vidro)
  <br>- Informação sobre uma localização aproximada do agente coletor (caminhão)</td> 
</tr>
</tbody>
</table>


## Histórias de Usuários

|      EU COMO... `QUEM`      |                                                 QUERO/PRECISO ... `O QUE`                   |                       PARA ... `PORQUE`                                      |
|-----------------------------|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| Eu como morador             | Desejo saber o dia e horário da coleta                                                                 | Para evitar acúmulo de lixo em minha casa                         |
| Eu como morador             | Quero descartar e separar o lixo em categorias                                                         | Para organizar e descartar o lixo de forma correta                |
| Eu como morador             | Quero saber onde fica o ponto de coleta mais próximo da minha região                                   | Para ter uma segunda opção, caso o agente não passa na rua        |
| Eu como agente de coleta    | Quero informar os horários que o caminhão passará nos bairros                                          | Para a otimização do serviço e evitar sobrecarga em dia de coleta |
| Eu como agente de coleta    | Preciso que o lixo seja separado em categorias                                                         | Para facilitar o tratamento                                       |
| Eu como agente de coleta    | Preciso que o lixo seja embalado em sacolas resistentes, bem fechadas e de tamanho adequado            | Para evitar que a sacola se abra e espalhe o lixo pelas ruas      |
| Eu como agente de coleta    | Gostaria preciso que o morador descarte o vidro e materiais perfurocortantes da forma correta          | Para evitar que os agentes se cortem                              |
| Eu como agente de coleta    | Gostaria de saber quais cores de sacola devo usar no meu descarte                                      | Para que possa facilitar a coleta do agente                       |
| Eu como agente de coleta    | Gostaria da colaboração dos outros motoristas no trânsito                                              | Para trabalharmos com segurança                                   |
| Eu como agente de coleta    | Gostaria de receber uma atualização sobre a localização do caminhão de lixo                            | Para colocar o lixo para que ele seja recolhido                   |
| Eu como agente de coleta    | Gostaria de saber como descartar materiais especiais                                                   | Para facilitar a separação do lixo                                |


## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                                                                                                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  A aplicação deve informar para o usuário o dia e horário da coleta do bairro da região                 | ALTA   | 
| RF-02 |  A aplicação deve disponibilizar informações a forma correta de fazer a coleta seletiva (por cores)                  | ALTA   |
| RF-03  |  A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para facilitar a interação do usuário com o si      | MÉDIO   |
| RF-04  | A aplicação deve notificar o usuário sobre a localização do agente de coleta                | ALTA   |
| RF-05  |  A aplicação deve oferecer uma funcionalidade para que o usuário cadastre seu e-mail                 | ALTA   |
| RF-06  |  A aplicação deve informar sobre os pontos de coleta seletiva próximos ao bairro do morador                 | MÉDIO   |
| RF-07  |  A aplicação deve fornecer dicas de como ensacar e embalar o lixo a diminuir a chance de rasgar                  | MÉDIO   |
| RF-08  |  A aplicação deve fornecer informações sobre descartes especiais (medicamentos, produtos eletrônicos, pneus, resíduos sólidos especiais)                  | ALTA   |
| RF-09  | A aplicação deve informar como fazer o descarte correto de vidro                  | ALTA   |
| RF-10  |  A aplicação deve fornecer uma página home em que o usuário poderá ver as informações mais importantes        | ALTA   |
| RF-11  |   A aplicação deve informar os bairros em que é realizada a coleta seletiva porta a porta         | MÉDIO   |
| RF-12  |   A aplicação deve ter uma página de perguntas frequentes         | BAIXA   |


**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  ...                    | ...   | 
| ...    |  ...                    | ...   | 

**Prioridade: Alta / Média / Baixa. 

