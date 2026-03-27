Готовый Mini App V1.

Что уже изменено:
- стартовый экран заменён на утверждённый
- экран контакта убран из маршрута
- после квиза сразу открывается ResultScreen
- ResultScreen оставлен как есть, изменена только нижняя кнопка
- кнопка теперь отправляет payload через Telegram.WebApp.sendData()
- после этого открывает Telegram-бота, а не личку
- payload содержит stopor_code, scores, answers, qualification, result_variant, result_payload, cta_action

Что нужно заменить перед деплоем:
1. В файле src/App.jsx найди константу TG_BOT_LINK
2. Замени https://t.me/YOUR_BOT_USERNAME?start=quiz_result на ссылку своего бота

Важно:
- если Mini App открыт не внутри Telegram, кнопка откроет ссылку на бота в новой вкладке
- для полной логики бот должен уметь принимать web_app_data / payload
