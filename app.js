const bot = require('./bot');
const express = require('express');
const bodyParser = require('body-parser');
const ChannelWizard = require('./Classes/ChannelWizard');
const app = express();
const channel = new ChannelWizard(bot);
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send', function(req, res) {
  const { text } = req.body;
  if (text) {
    channel.sendMessage(text);
    return res.send(`Bot have sent message to channel with message: ${text}`);
  }
  res.send(`There is no text`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
bot.launch();
