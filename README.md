# google-apps-script-telegram-bot
Simple bot to reply to /commands on Telegram

### How to setup

1. TELEGRAM - Talk to @BotFather on Telegram to create a bot and get your bot's API key
2. APPS SCRIPTS - Go to https://www.google.com/script/start/ and create a new project with a .gs file, setup your code, deploy and get your script's URL
3. SET APP SCRIPT KEY - By going to Project Settings with your .gs file open on Google Apps script, scroll down to script properties and create a property 'key' with your Telegram bot's API key as value, this is needed to make the following code work `scriptProperties.getProperty('key').toString()`
4. WEBHOOK - Setup your webhook at https://api.telegram.org/bot{my_bot_token}/setWebhook?url={url_to_send_updates_to} with your API key and your script's URL (note: do remove curly brackets)
