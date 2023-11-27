# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-01: Verificar o funcionamento dos links na tela Home</td>
  <td>
  <ul>
    <li>RF-007:	A aplicação deve fornecer uma página home em que o usuário poderá ver as informações mais importantes</li>
    </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
   <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
    </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Letícia</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-02: Verificar se os usuários conseguem enviar uma dúvida</td>
  <td>
  <ul>
    <li>RF-008:	A aplicação deve conter dúvidas frequentes na tela Home</li>
    </ul>
  </td>
  <td>Verificar se os usuários conseguem enviar uma pergunta.</td>
  <td>
   <ol>
   <li>Acessar o site.</li>
    <li>Visualizar a página Home.</li>
    <li>Ir para a parte de Dúvidas Frequentes.</li>
    <li>Enviar uma dúvida.</li>
    </ol>
   </td>
  <td>Todas as perguntas que os usuários fazem devem ser enviados com sucesso para os administradores.</td>
  <td>Letícia</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-03: Verificar se os usuários conseguem fazer o cadastro</td>
  <td>
  <ul>
    <li>RF-O2 : A aplicação deve oferecer uma funcionalidade para que o usuário se cadastre</li>
    <li> RF-11: A aplicação deve oferecer uma funcionalidade para que o usuário faça login</li>
    </ul>
  </td>
  <td>Verificar a funcionalidade da página de login/cadastro
 <li>LOGIN
 Alternância de Abas
Verificar se é possível fazer login com credenciais válidas
Testar o login com credenciais inválidas
Mensagem de Confirmação
Mensagem de usuário não encontrado
Mensagem de senha ou E-mail incorretos
Validação de Entrada
Testar o redirecionamento para a página correta após o Login (home)</li>
<li>CADASTRO
Garantir que a validação de campos esteja funcionando
Mensagem de erro ao tentar cadastrar sem preencher todos os campo
Testa o redirecionamento para a página correta após cadastro </li>
<li>TESTE DE USABILIDADE:
Avaliar a facilidade de uso da interface de login e cadastro.
Testar a clareza das mensagens de erro e orientações para o usuário.
Se ao clicar no ícone de olho, a senha fica visível para o usuário</li>
</td>
  <td>
   <ol>
   <li>Acessar a página de Login/Cadastro</li>
    <li>Preencher os campos (Nome, email, senha e confirmação de senha) com credenciais válidas e não válidas</li>
    <li>Enviar o formulário sem preencher todos os campos</li>
    <li>Confirmar cadastro/login</li>
    </ol>
   </td>
  <td>Mensagem de confirmação de login/cadastro ou de erro caso falte algum campo para preencher ou de usuário não existente. Após a confirmação redirecionar para página Home</td>
  <td>Maria Julia</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-04: Verificar se os usuários conseguem visualizar o carrossel e conseguem filtrar os tipos de lixo</td>
  <td>
  <ul>
    <li> | RF-14 |A aplicação deve permitir que os usuários filtrem os pontos de coleta utilizando um campo de busca para inserir o nome de sua cidade e um filtro adicional. </li>
    </ul>
  </td>
  <td>Verificar se o carrossel funciona sozinho e o campo de busca mostra os pontos de coleta e se é possível filtrar por tipo de lixo
 <li>Carrossel:
Funcionamento automático e manual:
Testar se o carrossel avança automaticamente pelos slides.
Verificar se é possível navegar manualmente entre os slides.
Confirmar se todas as 6 imagens estão aparecendo no carrossel.
</li>
<li>Campo de Busca:
Filtro por tipo de lixo:
Testar a funcionalidade de filtrar por diferentes tipos de lixo (reciclável, orgânico, isopor, vidro, hospitalar e eletrônico).
Verificar se os resultados são exibidos corretamente com base no filtro aplicado.
Campo de busca funcional:
Garantir que seja possível buscar por locais de coleta por cidade.
Verificar se as informações dos postos de coleta são exibidas ao buscar pela cidade de Belo Horizonte.
Mensagem de erro para cidade diferente de Belo Horizonte:
Testar ao inserir uma cidade diferente de Belo Horizonte e verificar se uma mensagem de erro é exibida adequadamente.
 </li>
<li>TESTE DE USABILIDADE:
Clareza das mensagens:
Avaliar se as mensagens de erro são claras e informativas para o usuário.
Orientações para o usuário:
Verificar se as instruções fornecidas são suficientes para orientar o usuário sobre como usar o campo de busca e o filtro.
</li>
</td>
  <td>
   <ol>
   <li>Acessar a página de Pontos de Coleta</li>
    <li>Verificar o funcionamento do carrossel.</li>
    <li>Preencher o campo de busca com "Belo Horizonte" e observar os resultados.</li>
    <li>Testar o filtro por diferentes tipos de lixo</li>
    <li>Inserir uma cidade diferente de Belo Horizonte para verificar a mensagem de erro</li>
    </ol>
   </td>
  <td>
   <ol>
    <li>O carrossel avança automaticamente e permite navegação manual.</li>
    <li>Todas as 6 imagens são apresentadas no carrossel.</li>
    <li>O campo de busca permite filtrar por tipos de lixo e por cidade.</li>
    <li>As informações dos postos de coleta são exibidas corretamente com base nos filtros aplicados.</li>
    <li>Mensagens de erro são claras e informativas</li>
    <li>As instruções fornecidas são suficientes para orientar o usuário.</li>
   </td>
  <td>Maria Julia</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-05: Verificar se os usuários conseguem sair de seu perfil e conseguem apertar o botão para receber notificação</td>
  <td>
  <ul>
    <li>RF-12: A aplicação deve oferecer uma funcionalidade para que o usuário saia do seu perfil.</li>
<li>RF-13: A aplicação deve oferecer uma funcionalidade em que o usuário pode clicar no botão e ser notificado quanto ao dia de coleta.</li>
 </li>
    </ul>
  </td>
  <td>Verificar a funcionalidade da página de login/cadastro para sair 
 <li>SAIR:
Alternância de Abas
●	Verificar se é possível deslogar do perfil nas outras Abas
●	Testar o redirecionamento para a página correta após sair (home)
</li>
 <li>ALERTA NOTIFICAÇÃO
 ●	Garantir que quando clicar no botão a mensagem de alerta vai aparecer</li>
<li>TESTE DE USABILIDADE:
●	Avaliar a facilidade de uso da interface de saída do site
●	Se ao clicar no ícone de notificação a mensagem de alerta vai aparecer</li>
</td>
  <td>
   <ol>
   <li>Acessar a página de Login/Cadastro</li>
    <li>Preencher os campos (Nome, email, senha e confirmação de senha) com credenciais válidas e não válidas</li>
    <li>Confirmar cadastro/login</li>
    <li>Após a confirmação dos dados vai mudar o campo “Olá” para “Olá Bem-vindo(a) nome”
e logo embaixo vai ter o botão sair</li>
    <li>Na imagem ao lado vai ter o botão de mensagem para aparecer o alerta</li>
    </ol>
  </td>
  <td>Mensagem de confirmação de login/cadastro ou de erro caso falte algum campo para preencher ou de usuário não existente. Após a confirmação redirecionar para página Home</td>
  <td>Luiza</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-06: Verificar se os usuários conseguem visualizar o carrossel e conseguem filtrar os tipos de lixo</td>
  <td>
   <ul>
    <li>RF-01: A aplicação deve disponibilizar informações a forma correta de fazer a coleta seletiva (por cores/categoria)</li>
<li>RF-04: A aplicação deve fornecer dicas de como ensacar e embalar o lixo a diminuir a chance de rasgar</li>
<li>RF-06: A aplicação deve informar como fazer o descarte correto de vidro</li>
    </ul>
  </td>
  <td>Verificar se o carrossel funciona sozinho (em um processo automático de ir trocando as imagens) e manualmente.
 <li>Carrossel:
Funcionamento automático e manual:
Testar se o carrossel avança automaticamente pelos slides.
Verificar se é possível navegar manualmente entre os slides.
Confirmar se todas as 5 imagens estão aparecendo no carrossel.
</li>
 </li>
</td>
  <td>
   <ol>
   <li>Acessar a página coleta seletiva</li>
    <li>Verificar o funcionamento do carrossel automático (a troca das imagens automaticamente).</li>
    <li>Verificar o funcionamento do carrossel de forma manual.</li>
    </ol>
   </td>
  <td>
   <ol>
    <li>O carrossel avança automaticamente e permite navegação manual.</li>
    <li>Todas as 5 imagens são apresentadas no carrossel.</li>
   </td>
  <td>Israel Diniz</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-07: Verificar se os usuários conseguem inserir o endereço e o mapa localizar se aquele ponto possui ou não a coleta seletiva, e o horário que o agente de coleta passa no local.</td>
  <td>
  <ul>
    <li>RF-10	A aplicação deve ter uma página com um mapa para que o usuário pesquise o seu endereço e veja a localização do agente de coleta </li>
    </ul>
  </td>
  <td>Verificar se o usuário é informado se o endereço informado possui coleta seletiva domiciliar e o horário que o agente de coleta passa naquele local.
</td>
  <td>
   <ol>
   <li>Acessar a página do mapa</li>
    <li>Inserir o endereço que deseja informação sobre a coleta</li>
    <li>Verificar o funcionamento do mapa no sentido de mostrar o endereço inserido</li>
    <li>Verificar a funcionalidade de informar o horário do agente de coleta</li>
    </ol>
   </td>
  <td>
   <ol>
    <li>O mapa mostra o endereço exato inserido pelo usuário.</li>
    <li>O resultado mostra o horário do agente de coleta para aquele local e se há ou não a coleta seletiva a domicilio ali.</li>
   </td>
  <td>Israel Diniz</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-08: Verificar que os usuários conseguem salvar alterações no seu perfil e que conseguem excluir sua conta.</td>
  <td>
  <ul>
    <li>RF-09	A aplicação deve ter uma página de perfil do usuário (com os dados) e configurações. </li>
    </ul>
  </td>
  <td>Verificar se as alteraçoes estao sendo salvas ou excluidas do localstorage.
</td>
  <td>
   <ol>
   <li>Estar logado no site</li>
    <li>Clicar no icone de Perfil</li>
    <li>Fazer suas alteracoes</li>
    <li>Clicar em Salvar ( Em caso de excluir conta clicar em excluir)</li>
    <li>Clicar nas checkbox se deseja ou nao receber notificacoes</li>
    </ol>
   </td>
  <td>
   <ol>
    <li>Todas as funcionalidades de salvar e excluir estão funcionando corretamente.</li>
   </td>
  <td>Felipe Dantas</td>
 </tr>
</table>

