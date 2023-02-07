import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let datcov = await fetch('https://latam-api.vercel.app/api/covid19?apikey=nekosmic&q=world');
	let CovidApi = await datcov.json();
	var cotext = `┏「 Black-KDX 」┓
┃⍟Black » KD⍟ V5.3
┗─━─━「 🌎 」━─━─┛\n\n`
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == false).length

let pp = './Menu2.jpg'
wm = cotext
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
 
const sections = [
{
title: `LIST MENU`,
rows: [
      {title: "🥵 CREATER 🥵", description: 'CONTACT THE CREATER', rowId: `${usedPrefix}creador`},
      {title: "🎁 ALL MENU 🎁", description: 'ALL BOT COMMANDS', rowId: `${usedPrefix}allmenu`},
      {title: "💎 GROUP MENU 💎", description: 'GROUP COMMANDS', rowId: `${usedPrefix}menugrupo`},
      {title: "🎮 GAME MENU 🎮", description: 'GAMES COMMANDS', rowId: `${usedPrefix}menujuegos`},
      {title: "🔊 AUDIO MENU 🔊", description: 'AUDIO COMMANDS', rowId: `${usedPrefix}menuaudios`},
      {title: "👽 STICKER MENU 👽", description: 'STICKER COMMANDS', rowId: `${usedPrefix}menusticker`},
      {title: "🎤 AUDIO EFFECT MENU 🎤", description: 'AUDIO EFFECT COMMANDS', rowId: `${usedPrefix}menuefectos`},
      {title: "👾 RANDOM MENU 👾", description: 'RANDOM COMMANDS', rowId: `${usedPrefix}menurandom`},
      {title: "🔞 NSFW MENU 🔞", description: 'NSFW COMMANDS🔞', rowId: `${usedPrefix}menunsfw`},
      {title: "📲 DOWNLOADER MENU 📲", description: 'DOWNLOADER COMMANDS', rowId: `${usedPrefix}menudescargas`},
      {title: "🖍️ LOGOS MENU 🖍️", description: 'LOGO COMMANDS', rowId: `${usedPrefix}menulogos`},
      {title: "🔍 SEARCHER MENU 🔍", description: 'SEARCHING COMMANDS', rowId: `${usedPrefix}menubusquedas`},
      {title: "⚒️ TOOLS MENU ⚒️", description: 'TOOL COMMANDS', rowId: `${usedPrefix}menuherramientas`},
      {title: "👑 OWNER MENU 👑", description: 'OWNER COMMANDS', rowId: `${usedPrefix}menucreador`},
      {title: "👑 𝗦𝗘𝗥 𝗕𝗢𝗧 👑", description: 'ABOUT BOT', rowId: `${usedPrefix}menuserbot`},
 	]
    },
    {
        title: "REDES SOCIAL",
	rows: [    
	      {title: "REDES", description: '𝗦𝗜𝗚𝗨𝗘𝗠𝗘 𝗘𝗡 𝗧𝗢𝗗𝗔𝗦 𝗠𝗜𝗦 𝗥𝗘𝗗𝗘𝗦', rowId: `${usedPrefix}redes`},
                ]
	        },
    {
        title: "GROUPS",
	rows: [    
	      {title: "GROUPS", description: 'BOT GROUP LINKS', rowId: `${usedPrefix}linkgc`},
	       	]
                },
	    {
        title: "𝗖𝗢𝗟𝗔𝗕𝗢𝗥𝗔𝗗𝗢𝗥𝗘𝗦",
	rows: [    
	      {title: "𝗖𝗢𝗟𝗔𝗕𝗢𝗥𝗔𝗗𝗢𝗥𝗘𝗦", description: '𝗖𝗢𝗟𝗔𝗕𝗢𝗥𝗔𝗗𝗢𝗥𝗘𝗦 OF THE BOT', rowId: `${usedPrefix}colaboradores`},
	       	]
                },
    {
	title: "OWNER",
	rows: [
                {title: "UPDATE", description: 'BOT SYSTEM UPDATING', rowId: `${usedPrefix}update`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `*╭─────────────────────❊*
*│* *╭────────────────❊*
*│* *│* *Bᴏᴛ Nᴀᴍᴇ :  BLACK - KD*
*│* *│* *Bot creator: Black-KDX* 
*│* *│* *Creater's number:* wa.me/94775207710*
*│* *╰────────────────❊*
*│*    *㊏───ɪɴғᴏ───㊏*
*│* *╭─────────────────❊*
*│* *│* *ɴᴀᴍᴇ :* ${name}
*│* *│* *ʙᴀʟᴀɴᴄᴇ:* ${limit}
*│* *│* *ʀᴜɴɴɪɴɢ ᴏɴ: AcidicNodes*
*│* *│* *ᴍᴏᴅᴇ: Public✅*
*│* *│* *Dᴀᴛᴇ:* ↘️
*│* *│* *${week}, ${date}*
*│* *│* *ᴛɪᴍᴇ: ${uptime}*
*│* *│* *ᴛᴏᴛᴀʟ ᴜsᴇʀ: ${rtotalreg}*
*│* *╰─────────────────❊*
*╰─────────────────────❊*`, footer: `${wm}`, pp,
title: null,
buttonText: "⍟LIST MENU⍟", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menucompleto|menu|menú|memu|memú|help|info|comandos|2help|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
