# Insomnia GBTYPE

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=GBTYPE&uri=https%3A%2F%2Fraw.githubusercontent.com%2FRodrigoSenna88%2FGBTYPE%2Fmaster%2Fexport.json)




# Recuperação de senha

**RF (Requisítos funcionais)**

- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF (Requisítos não-funcionais)**

- Utilizar Mailtrap para testar envios em desenvolvimento;
- Utilizar o Amazon SES para envio em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN (Regra de Negócio)**

- O link enviado por e-mail para resetar a senha deve expirar em 2h;
- O usuário precisa confirmar a senha nova após resetar a antiga;

# Atualização do perfil

**RF**

-O usuário deve poder atualizar seu perfil (nome, email senha);

**RN**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que hover um novo agendamento;
- O prestador deve poder visualizar as notificações não-lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no mongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket-io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deverá durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro horário às 8h, últimi horário às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
