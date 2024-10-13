const plugins = require("../../lib/plugins");
const { command, isPrivate, clockString, pm2Uptime } = require("../../lib");
const { OWNER_NAME, BOT_NAME } = require("../../config");
const { hostname } = require("os");


command(
  {
    pattern: "menu",
    fromMe: isPrivate,
    desc: "Show All Commands",
    dontAddCommandList: true,
    type: "user",
  },
  async (message, match) => {
    let { prefix, jid } = message;
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");

    // Menu layout
    let menu = `╭━━━━━━━ ᆫ *${BOT_NAME}* ᆫ━━━━━━━╮
┃ ⎆ *OWNER*: ${OWNER_NAME}
┃ ⎆ *PREFIX*: ${prefix}
┃ ⎆ *HOST*: ${hostname().split("-")[0]}
┃ ⎆ *DATE*: ${date}
┃ ⎆ *TIME*: ${time}
┃ ⎆ *COMMANDS*: ${plugins.commands.length}
┃ ⎆ *UPTIME*: ${clockString(process.uptime())}
╰━━━━━━━━━━━━━━━━━━━━╯\n`;

    // Sorting commands by category
    let cmnd = [];
    let category = [];
    plugins.commands.map((command) => {
      if (command.pattern instanceof RegExp) {
        let cmd = command.pattern.toString().split(/\W+/)[1];
        if (!command.dontAddCommandList && cmd) {
          let type = command.type ? command.type.toLowerCase() : "misc";
          cmnd.push({ cmd, type });
          if (!category.includes(type)) category.push(type);
        }
      }
    });

    // Organizing the commands into categories
    cmnd.sort();
    category.sort().forEach((cmmd) => {
      menu += `\n⦿---- *${cmmd.toUpperCase()}* ----⦿\n`;
      let comad = cmnd.filter(({ type }) => type == cmmd);
      comad.forEach(({ cmd }) => {
        menu += `⛥  _${cmd.trim()}_\n`;
      });
    });

    // Final instructions in the menu
    menu += `_🔖 Send ${prefix}menu <command name> for details._\n`;
    menu += `*📍 Example:* _${prefix}menu plugin_\n`;

    // Sending image along with the menu
    let content = "https://files.catbox.moe/bh2fpj.jpg"; // Image URL or Buffer
    await message.sendMessage(jid, content, { caption: menu }, "image");
  }
);

