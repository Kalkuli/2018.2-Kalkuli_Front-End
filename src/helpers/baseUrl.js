let baseUrl;

if (process.env.REACT_APP_ENV === 'production') {
    baseUrl = 'https://d5zf8onjaa.execute-api.sa-east-1.amazonaws.com/prod';
}
else {
    baseUrl = 'https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom';
}

export default baseUrl;