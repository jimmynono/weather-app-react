# Weather React App

Weather forecasting app, built with ReactJs. I used the OpenWeatherMap API for data, and created some logic to give the 5 day forecast. I folded in Redux as a learning tool, Redux may not be needed for this simple of an app, but allowed me an opportunity to improve my knowledge of Redux. Future iterations will include a full testing suite and more features.

<!--
## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license) -->


## Usage

This project was generated using the React CLI. To start the app.

You will need to create your personalized API token at https://openweathermap.org/appid#get

Once API key is created you will need to create a .env file in the project root and add the key to it


```sh
$ touch .env
$ cat .env REACT_APP_SECRET_CODE=APIKEY
```

replace APIKEY with your personalized key.

```sh
$ npm install
$ npm run start
```

## Maintainers

[@jimmynono](https://github.com/jimmynono)

## Contribute

Feel free to dive in! [Open an issue](https://github.com/jimmynono/weather-app-react/issues) or submit PRs.

## License

[MIT](LICENSE) © James Norton
