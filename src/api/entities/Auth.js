import ApiConfig from "../ApiConfig"
import ApiCrud from "../ApiCrud"

const Auth = {
    endPoint : 'auth',
    login : (data) => ApiCrud(Auth.endPoint).create(Auth.endPoint,data),
    authenticate : () => ApiConfig.withAutenticate.get(Auth.endPoint)
}

export default Auth;