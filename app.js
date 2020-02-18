const bot = require('./bot');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ChannelWizard = require('./Classes/ChannelWizard');
const app = express();
const channel = new ChannelWizard(bot);
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.post('/send', function(req, res) {
  const { fullname, phone, email, problem, selected } = req.body;
  const { HH, mm } = req.body.time;
  console.log(req.body);
  const text = `Имя: ${fullname}\nНомер: ${phone}\nEmail: ${email}\nПроблема: ${problem}\nПотребность: ${selected}\nУдобное время: ${HH}:${mm}`;
  if (text) {
    channel.sendMessage(text);
    return res.send(`Bot have sent message to channel with message: ${text}`);
  }
  res.send(`There is no text`);
});

app.get('/', function(req, res) {
  res.send('it works');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
bot.launch();
