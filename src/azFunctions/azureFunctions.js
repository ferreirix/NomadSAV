const getAzureEndopoint = () => {
    if (__DEV__) {
        return "http://192.168.1.17";
    }
    return "https://nomadsav.azurewebsites.net";
}


export default getAzureEndopoint;
