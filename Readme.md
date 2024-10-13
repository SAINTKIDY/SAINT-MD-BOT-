# SAINT-MD-BOT 

SAINT-MD is a powerful and versatile WhatsApp bot built using Node.js and the Baileys library. This bot offers a wide range of features and capabilities, making it an excellent choice for both personal and commercial use cases.

[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%203.svg)](https://www.digitalocean.com/?refcode=9db4c65bb8ee&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)

Deploy on render https://nikkapair2.onrender.com/pair
 deploy on render 
    <bra>

## Table of Contents

- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Deploy on Any Shell (Including Termux)](#deploy-on-any-shell-including-termux)
- [Usage](#usage)
  - [Creating a Plugin](#creating-a-plugin)
  - [Sending Messages](#sending-messages)
    - [Replying](#replying)
    - [Media](#media)
    - [Sticker](#sticker)
  - [External Plugins](#external-plugins)
- [Community and Support](#community-and-support)
- [Contributing](#contributing)  <!-- Added this new section -->
- [Credits](#credits)
- [License](#license)

## Installation

### Prerequisites

Before installing X-Asena, ensure that you have the following dependencies installed on your system:

- FFmpeg
- Node.js

### Deploy on Any Shell (Including Termux)

To deploy SAINT-MD on any shell, including Termux, follow these steps:

1. Fork the SAINT-MD repository
2. Edit the `config.js` file with your desired configuration details
3. Install the required dependencies by running the following commands:
   - `npm install`
   - `npm install qrcode-terminal`
   - `npm install pm2 -g`
4. To scan the QR code and start the bot, run `npm start`
5. To connect using a pairing code, run `npm run code`. After pairing, run `npm start` again and scan the QR code
6. Country code is required for connecting via a pairing code. If you are from India, you can use `91` as the country code. If you are from any other country, use your respective country code.
7. To stop the bot, press `Ctrl+C`
8. To start the bot, run `npm start` 

## Usage

### Creating a Plugin

X-Asena supports custom plugins, which can be created using the following template:

```javascript
const { command, is published } = require("../../lib/");

command({
  pattern: "ping", // Command pattern
  fromMe: isPrivate, // true: only from sudo numbers, false: from everyone, isPrivate: private mode
  desc: "To check ping", // Description of the command
  type: "user", // Command type
}, async (message, match) => {
  /* PLUGIN CONTENT HERE */
});
```

### Sending Messages

#### Replying

To reply to a message, use the following code:

```javascript
message.reply("Hi");
```

#### Media

To send media (image, audio, or video), use the following code:

```javascript
let content = "https://wallpaperaccess.com/full/5531321.jpg"; // Can also use a buffer
message.sendMessage(jid, content, {} /* options */, "image" /* change to 'audio' or 'video' when sending audio or video */);
```

#### Sticker

To send a sticker, use the following code:

```javascript
message.sendMessage(jid, "url or buffer of image or video (max 10 seconds)", { packname: config.PACKNAME, author: config.AUTHOR }, "sticker");
```

### External Plugins

X-Asena supports external plugins. You can find more information about external plugins in the [Plugins wiki](https://github.com/SAINTKIDY/SAINT-MD-BOT/wiki/Plugins).

## Community and Support

Join the official WhatsApp group for X-Asena to get support, ask questions, and interact with other users:

[![JOIN WHATSAPP GROUP](https://raw.githubusercontent.com/Neeraj-x0/Neeraj-x0/main/photos/suddidina-join-whatsapp.png)](https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L)

:

- Check out issues labeled with `hacktoberfest` or `good first issue` to find a starting point.
- Fork the repository, make your changes, and submit a pull request.
- Follow our [Contributing Guidelines](https://github.com/SAINTKIDY/SAINT-MD-BOT/blob/main/CONTRIBUTING.md) to ensure your contributions are in line with the project.

Your contributions help improve SAINT-MD and make it better for everyone!

## Credits

SAINT-MD was created and is maintained by **SAINTKIDY**.

## License

SAINT-MD is licensed under the [MIT License](https://opensource.org/licenses/Md