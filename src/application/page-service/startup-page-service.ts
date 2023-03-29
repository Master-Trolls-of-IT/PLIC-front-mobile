import ApiPing from "~/application/utils/api-ping";

const useStartupPageService = (navigate: (value: string) => void, timeout: number) => {
    const APIPing = async () => {
        const resultAPIPing = await ApiPing();
        if (resultAPIPing) navigate("LoginPage");
    }

    setTimeout(() => void APIPing(), timeout);
}

export default useStartupPageService;
