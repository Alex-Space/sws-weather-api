# Командная утилита для вывода погоды в консоль

Данные о погоде берутся с сайта https://openweathermap.org/ и выводятся в консоль. Можно получать данные как об одном городе, так и о нескольких.

# Установка

1. Устанавливаем утилиту глобально:

```
npm i -g sws-weather-api
```

2. Для использования приложения вам понадобится токен, который генерируется в личном кабинете, после регистрации на сайте https://openweathermap.org/. Созданный токен вводим после флага -t через пробел. Указываем нужный город, или города после флага -s через пробел.

```
weather -t <token> -s <city> [city2 city3 ...]
```

Получение прогноза погоды для одного города: `weather -t 1234sdS36f0c3fa005022a2d82ccebc56a -s moscow`
Получение прогноза погоды для нескольких городов: `weather -t 1234sdS36f0c3fa005022a2d82ccebc56a -s moscow perm tomsk`

**_Данные о городах и токен сохраняется в файле weather-data.json, который расположен в папке пользователя вашей ОС.
(Пример: "C:\Users\VasyaPupkin\weather-data.json")
Если нужен сброс всех данных, файл можно удалить._**

3. После сохранения токена и указания требуемого города, или городов, запускаем утилиту без всяких параметров, просто командой:

```
weather
```

# Посмотреть справочную информацию по утилите:

```
weather -h
```
