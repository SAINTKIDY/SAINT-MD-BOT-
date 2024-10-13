const { command, ispublic } = require("../../lib");

command(
  {
    pattern: "touch",
    fromMe: true,
    desc: "send a touch message",
    usage: "#button",
    type: "message",
  },
  async (message, match, m) => {
    let data = {
      jid: message.jid,
      button: [
        {
          type: "list",
          params: {
            title: "touch 1",
            sections: [
              {
                title: "touch 1",
                rows: [
                  {
                    header: "title",
                    title: "touch 1",
                    description: "Description 1",
                    id: ".menu",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "reply",
          params: {
            display_text: "MENU",
            id: ".menu",
          },
        },
        {
          type: "url",
          params: {
            display_text: "SAINT-md",
            url: "https://www.neerajx0.xyz/",
            merchant_url: "https://www.neerajx0.xyz/",
          },
        },
        {
          type: "address",
          params: {
            display_text: "Address",
            id: "message",
          },
        },
        {
          type: "location",
          params: {},
        },
        {
          type: "copy",
          params: {
            display_text: "copy",
            id: "123456789",
            copy_code: "message",
          },
        },
        {
          type: "call",
          params: {
            display_text: "Call",
            phone_number: "123456789",
          },
        },
      ],
      header: {
        title: "SAINT-md",
        subtitle: "WhatsApp Bot",
        hasMediaAttachment: false,
      },
      footer: {
        text: "Interactive Native Flow Message",
      },
      body: {
        text: "Interactive Message",
      },
    };
    return await message.sendMessage(message.jid, data, {}, "interactive");
  }
);
