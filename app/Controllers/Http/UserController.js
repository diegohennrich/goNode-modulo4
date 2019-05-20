'use strict'
// usando o método USE, tenho acesso aos métodos do adonis
const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    // método only para pegar os dados da request com adonis. Poderia usar request.all para pegar todos sem especificar.
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    // não é preciso usar o response. Ao retornar algo do controller, ele já coloca em json a resposta (pq foi configurado api-only quando criei o projeto do adonis)
    return user
  }
}

module.exports = UserController
