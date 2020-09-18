## Instructions

* Clone the repo
* Run `npm install`
* Run `npm start`

## Описание решения:

* Настройка Webpack: В модули с правилами подключил js, jsx, css с пакетами "style-loader", "css-loader", "postcss-loader", "babel-loader".

Сборка идет в папку **/dist** от входного js файла **/src/index.js** и преобразуется в **"index.html", "index-bundle.js"**.

* Начало приложения начинается **/src/index.js**. Здесь подключаем:  
  * ReactDOM (для интеграции react c html)
  * Provider, createStore (для запуска Redux store в react)

* Компоненты: 
  **ClockCool** - стрелочные часы. Механизм запуска и обновления с помощью React Hooks (useState, useEffect). Данные рендеряться в реальном времени, отталкиваясь от значения timeZone (часовой пояс по UTC), он меняется с выбором города в компоненте **FormSelectTime** с помощью Redux.

  **FormSelectTime** - форма выбора города. Механизм обновления с помощью React, React-readux Hooks (useState, useDispatch). 

  **ClockDigital** - похожий компонент с **ClockCool**. Только изменена верстка и логика часов.