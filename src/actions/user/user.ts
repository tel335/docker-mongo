import User from "../../model/UserModel"

export const getUsers = async () => {
    return await User.find()
}

export const addUser = async (userData: any) => {
    const user = {
        name: userData.name,
        rol: userData.rol
    }
    await User.create(user)
}

export const removeUserAction = async (userRol: string) => {
    await User.remove({ rol: userRol })
}
