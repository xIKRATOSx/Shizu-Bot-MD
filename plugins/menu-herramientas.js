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
      {title: "🥵 CREATER 🥵", description: 'BOT CREATER', rowId: `${usedPrefix}creador`},
      {title: "🎁 ALL MENU 🎁", description: 'ALL COMMANDS', rowId: `${usedPrefix}allmenu`},
      {title: "💎 GROUP MENU 💎", description: 'GROUP COMMANDS', rowId: `${usedPrefix}menugrupo`},
      {title: "🎮 GAMES MENU 🎮", description: 'GAMES COMMANDS', rowId: `${usedPrefix}menujuegos`},
      {title: "🔊 AUDIO MENU 🔊", description: 'AUDIO COMMANDS', rowId: `${usedPrefix}menuaudios`},
      {title: "👽 STICKER MENU 👽", description: 'STICKER COMMANDS', rowId: `${usedPrefix}menusticker`},
      {title: "🎤 AUDIO EFFECTS MENU 🎤", description: 'AUDIO EFFECT COMMANDS', rowId: `${usedPrefix}menuefectos`},
      {title: "👾 RANDOM MENU 👾", description: 'RANDOM COMMANDS', rowId: `${usedPrefix}menurandom`},
      {title: "🔞 NSFW MENU 🔞", description: 'NSFW COMMANDS🔞', rowId: `${usedPrefix}menunsfw`},
      {title: "📲 DOWNLOAD MENU 📲", description: 'DOWNLOAD COMMANDS', rowId: `${usedPrefix}menudescargas`},
      {title: "🖍️ LOGO MENU 🖍️", description: 'LOGO COMMANDS', rowId: `${usedPrefix}menulogos`},
      {title: "🔍 SEARCH MENU 🔍", description: 'SEARCH COMMANDS', rowId: `${usedPrefix}menubusquedas`},
      {title: "⚒️ TOOLS MENU ⚒️", description: 'TOOLS COMMANDS', rowId: `${usedPrefix}menuherramientas`},
      {title: "👑 OWNER MENU 👑", description: 'OWNER COMMANDS', rowId: `${usedPrefix}menucreador`},
]}, ] 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*ミ💖 HI _${name}_ 💖彡*
XCOCO TOOLS COMMANDS
┏━━━━━━━━━━━━━┓
┃ *<TOOLS MENU/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ⚒️ _${usedPrefix}tag *número*_
┣ ⚒️ _${usedPrefix}say *texto*_
┣ ⚒️ _${usedPrefix}tiempo *sitio*_
┣ ⚒️ _${usedPrefix}años *responder a foto*_
┣ ⚒️ _${usedPrefix}qmusicaes *responder audio/video*_
┣ ⚒️ _${usedPrefix}leerimagen *responder imagen*_
┣ ⚒️ _${usedPrefix}repetir *texto*_
┣ ⚒️ _${usedPrefix}repetir2 *texto*_
┣ ⚒️ _${usedPrefix}spamchat *texto*_
┣ ⚒️ _${usedPrefix}spamchat *numero*|*texto*|*n° de veces*_
┣ ⚒️ _${usedPrefix}traducir *texto*/ *responder mensaje*_
┣ ⚒️ _${usedPrefix}reaccionar *emoji* *responder mensaje*_
┣ ⚒️ _${usedPrefix}leermas *texto*|*texto*_
┣ ⚒️ _${usedPrefix}rdvo *responder a viewonce*_
┣ ⚒️ _${usedPrefix}fake *msg del bot* *@user* *msg fake*_
┣ ⚒️ _${usedPrefix}acortar *link*_
┣ ⚒️ _${usedPrefix}calc_
┣ ⚒️ _${usedPrefix}del *borrar mensaje del bot respondiendo*_
┣ ⚒️ _${usedPrefix}qrcode *texto*_
┣ ⚒️ _${usedPrefix}styletext *texto*_
┣ 🛠️ _${usedPrefix}covid *<pais>*_
┣ 🛠️ _${usedPrefix}horario_
┣ 🛠️ _${usedPrefix}clima *<país>* / *<ciudad>*
┣ 🛠️ _${usedPrefix}tamaño *<cantidad> <responde a imagen / video>*_
┗━━━━━━━━━━━━━┛`, footer: `${wm}`, pp,
title: null,
buttonText: "LIST", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menuherramientas|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
