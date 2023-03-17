import APIService from "src/infrastructure/repositories/Services"
const AppController = async () => {
    const response = await APIService.GET("/")

    if (response.status == 200) {
        console.log('Api Connectée')
    } else {
        console.log('Api Introuvable')

    }
}

export default AppController