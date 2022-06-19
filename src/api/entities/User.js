import ApiCrud from "../ApiCrud"

const User = {
    urlUser: 'user',
    createUser : (data) => ApiCrud('user').create(User.urlUser,data),
    getUsers : () => ApiCrud('user').getAll(User.urlUser),
    getUser : (id) => ApiCrud('user').getById(User.urlUser,id),
    updateUser : (id,data) => ApiCrud('user').update(User.urlUser,data,id),
    deleteUser : (id) => ApiCrud('user').delete(User.urlUser,id)
}