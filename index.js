const TelegramBot = require('node-telegram-bot-api');
const os = require('os');


const bot = new TelegramBot('636367755:AAEud8iTLD4tDIeYkUdqe3Vx1IDO-m4XkXo', {polling:true});

bot.on('message', msg => {

    bot.sendMessage(msg.chat.id, `Hello from ${os.type()}, This Bot written by Zafar, Bot says Hi to "${msg.from.first_name}"`);
})