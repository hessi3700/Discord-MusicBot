module.exports = {
  Admins: ["745141409367195698", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "<", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/FZsWMzK2wu", //Support Server Link
  Token: process.env.Token || "ODE5NjY5NjcxODM3NTY0OTM5.YEp-3g.Ki6bRyNhhS-rpJT1W06JZknwHeM", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "819669671837564939", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "qomcLDi2TS5cbRMUc-2Gyl_nvNGXog6k", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "5c292f7151554f3b931943344db03815", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "7cdbaafa66984ac994e90fb22675a11e", //Spotify Client Secret
  },
};
