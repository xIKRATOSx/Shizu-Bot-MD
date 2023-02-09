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
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = './Menu2.jpg'
wm = global.wm
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
title: `LIST`,
rows: [
      {title: "🥵 CREATER 🥵", description: 'CREATER MENU', rowId: `${usedPrefix}creador`},
      {title: "🎁 ALL MENU 🎁", description: 'ALL COMMANDS', rowId: `${usedPrefix}allmenu`},
      {title: "💎 GROUP MENU 💎", description: 'GROUP COMMANDS', rowId: `${usedPrefix}menugrupo`},
      {title: "🎮 GAME MENU 🎮", description: 'GAMES COMMANDS', rowId: `${usedPrefix}menujuegos`},
      {title: "🔊 AUDIO MENU 🔊", description: 'AUDIO COMMANDS', rowId: `${usedPrefix}menuaudios`},
      {title: "👽 STICKER MENU 👽", description: 'STICKER COMMANDS', rowId: `${usedPrefix}menusticker`},
      {title: "🎤 AUDIO EFFECTS MENU 🎤", description: 'AUDIO EFFECT COMMANDS', rowId: `${usedPrefix}menuefectos`},
      {title: "👾 RANDOM MENU 👾", description: 'RANDOM COMMANDS', rowId: `${usedPrefix}menurandom`},
      {title: "🔞 NSFW MENU 🔞", description: 'SEX COMMANDS🔞', rowId: `${usedPrefix}menunsfw`},
      {title: "📲 DOWNLOAD MENU 📲", description: 'DOWNLOAD COMMANDS', rowId: `${usedPrefix}menudescargas`},
      {title: "🖍️ LOGO MENU 🖍️", description: 'LOGO COMMANDS', rowId: `${usedPrefix}menulogos`},
      {title: "🔍 SEARCH MENU 🔍", description: 'SEARCH COMMANDS', rowId: `${usedPrefix}menubusquedas`},
      {title: "⚒️ TOOLS MENU ⚒️", description: 'TOOLS COMMANDS', rowId: `${usedPrefix}menuherramientas`},
      {title: "👑 OWNER MENU 👑", description: 'OWNER COMMANDS', rowId: `${usedPrefix}menucreador`},
      {title: "👑 ABOUT XCOCO 👑", description: 'ABOUT BOT', rowId: `${usedPrefix}menuserbot`},
 	]
    },
    {
        title: "SOCIAL NETWORKS",
	rows: [    
	      {title: "NETWORKS", description: '𝗦𝗜𝗚𝗨𝗘𝗠𝗘 𝗘𝗡 𝗧𝗢𝗗𝗔𝗦 𝗠𝗜𝗦 𝗥𝗘𝗗𝗘𝗦', rowId: `${usedPrefix}redes`},
                ]
	        },
    {
        title: "GROUPS",
	rows: [    
	      {title: "GROUPS BOT", description: 'GROUPS OF THE BOT', rowId: `${usedPrefix}linkgc`},
	       	]
                },
	    {
        title: "𝗖𝗢𝗟𝗔𝗕𝗢𝗥𝗔𝗗𝗢𝗥𝗘𝗦",
	rows: [    
	      {title: "𝗖𝗢𝗟𝗔𝗕𝗢𝗥𝗔𝗗𝗢𝗥𝗘𝗦", description: '𝗖𝗢𝗟𝗔𝗕𝗢𝗥𝗔𝗗𝗢𝗥𝗘𝗦 𝗗𝗘𝗟 𝗕𝗢𝗧', rowId: `${usedPrefix}colaboradores`},
	       	]
                },
    {
	title: "OWNER",
	rows: [
                {title: "UPDATE", description: 'UPDATE YOUR BOT', rowId: `${usedPrefix}update`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `┏━━━━━━━━━━━━━┓
┃ *< 𝕊𝔼ℝ𝔹𝕆𝕋 - 𝕁𝔸𝔻𝕀𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ 🤖 _${usedPrefix}serbot_
┣ ඬ⃟ 🤖 _${usedPrefix}stop_
┣ ඬ⃟ 🤖 _${usedPrefix}bots_
┗━━━━━━━━━━━━━┛ 
${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}`, footer: `${wm}`, pp,
title: null,
buttonText: "LIST", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menuserbot|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
