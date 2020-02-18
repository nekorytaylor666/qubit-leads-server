require('dotenv').config();
const Telegraf = require('telegraf');
const ChannelWizard = require('./Classes/ChannelWizard');

const bot = new Telegraf(process.env.BOT_TOKEN);
const channel = new ChannelWizard(bot);

bot.start(ctx => channel.sendMessage('hello'));
bot.hears('hi', ctx => ctx.reply(ctx.chat.id));

module.exports = bot;
