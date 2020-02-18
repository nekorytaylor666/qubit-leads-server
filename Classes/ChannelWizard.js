const Markup = require('telegraf/markup');

class ChannelWizard {
  channelId = '';
  telegram = null;

  constructor(bot) {
    this.channelId = process.env.LEAD_CHANNEL_ID;
    this.telegram = bot.telegram;
  }

  sendMessage(text) {
    // this.telegram.sendMessage(
    //   this.channelId,
    //   text,
    //   Markup.inlineKeyboard(
    //     [Markup.callbackButton(`Откликнуться - 100тг`, 'hello')],
    //     {
    //       columns: 1,
    //     }
    //   ).extra()
    // );
    console.log(this.channelId);
    this.telegram.sendMessage(this.channelId, text);
  }
}

module.exports = ChannelWizard;
