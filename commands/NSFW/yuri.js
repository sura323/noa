module.exports = class command extends require('../../base/models/Command.js') {
  constructor(client) {
    super(client, {
      name: 'yuri',
      description: 'Mira a hermosas chicas o///o',
      usage: prefix => `\`${prefix}yuri\``,
      examples: prefix => `\`${prefix}\``,
      enabled: true,
      nsfwOnly: true,
      voteOnly: true,
      cooldown: 3,
      aliases: ['lesbian'],
      botPermissions: [],
      memberPermissions: [],
      dirname: __dirname
    });
  }
  async run(message, args, data, embed) {
    let client = this.client;
    try {
      let msg = await message.channel.send(client.replies.reply('generating', message)),
        img = await require('node-superfetch').get(`https://nekos.life/api/v2/img/les`);
      embed
        .setColor(client.functions.selectColor('lightcolors'))
        .setDescription('...')
        .setImage(img.body.url);
      msg.delete();
      message.channel.send({ embed });
    } catch (e) {
      message.channel.send(message.error(e));
      client.err({
        type: 'command',
        name: this.help.name,
        error: e
      });
    }
  }
};
