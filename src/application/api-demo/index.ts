import APIService from "~/infrastructure/controllers/services";

const AppController = async (setMessage: (message: string) => void) => {
  setTimeout(async () => {
    let timer = 0;
    const timeout = setInterval(() => {
      timer = timer + 1;
    });
    const response = await APIService.GET("/");
    clearInterval(timeout);

    if (response.status == 200) {
      // console.log('Api Connectée')
      setMessage(`Connexion à l\'api réussi`);
    } else {
      // console.log('Api Introuvable')
      setMessage("Connexion à l'api échouée");
    }
  }, 3000);
};

export default AppController;
