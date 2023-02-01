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
title: `LIST MENU`,
rows: [
      {title: "🥵 CREATOR 🥵", description: 'CONTACT THE CREATER', rowId: `${usedPrefix}creador`},
      {title: "🎁 ALL MENU 🎁", description: 'ALL BOT COMMANDS', rowId: `${usedPrefix}allmenu`},
      {title: "💎 GROUP MENU 💎", description: 'GROUP COMMANDS', rowId: `${usedPrefix}menugrupo`},
      {title: "🎮 JUEGOS/TOP MENU 🎮", description: 'RPG GAMES', rowId: `${usedPrefix}menujuegos`},
      {title: "🔊 AUDIO MENU 🔊", description: 'AUDIO COMMANDS', rowId: `${usedPrefix}menuaudios`},
      {title: "👽 STICKER MENU 👽", description: 'STICKER COMMANDS', rowId: `${usedPrefix}menusticker`},
      {title: "🎤 AUDIO EFFECT MENU 🎤", description: 'AUDIO EFFECT COMMANDS', rowId: `${usedPrefix}menuefectos`},
      {title: "👾 RANDOM MENU 👾", description: 'RANDOM MENU COMMANDS', rowId: `${usedPrefix}menurandom`},
      {title: "🔞 NSFW MENU 🔞", description: 'NSFW COMMANDS', rowId: `${usedPrefix}menunsfw`},
      {title: "📲 DOWNLOADER MENU 📲", description: 'DOWNLOADER COMMANDS', rowId: `${usedPrefix}menudescargas`},
      {title: "🖍️ LOGO MENU 🖍️", description: 'LOGO COMMANDS', rowId: `${usedPrefix}menulogos`},
      {title: "🔍 SEARCHER MENU 🔍", description: 'SEARCHER COMMANDS', rowId: `${usedPrefix}menubusquedas`},
      {title: "⚒️ TOOLS MENU ⚒️", description: 'TOOLS MENU', rowId: `${usedPrefix}menuherramientas`},
      {title: "👑 OWNER MENU 👑", description: 'CREATOR COMMANDS', rowId: `${usedPrefix}menucreador`},
]}, ] 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*ミ💖 HI _${name}_ 💖彡*
THERE... CREATOR COMMANDS
┏━━━━━━━━━━━━━┓
┃ *<OWNER MENU/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 👑 _${usedPrefix}cajafuerte_
┣ 👑 _${usedPrefix}enable *restrict*_
┣ 👑 _${usedPrefix}disable *restrict*_
┣ 👑 _${usedPrefix}enable *autoread*_
┣ 👑 _${usedPrefix}enable *welcome*_
┣ 👑 _${usedPrefix}enable *modohorny*_
┣ 👑 _${usedPrefix}disable *autoread*_
┣ 👑 _${usedPrefix}enable *public*_
┣ 👑 _${usedPrefix}disable *public*_
┣ 👑 _${usedPrefix}enable *pconly*_
┣ 👑 _${usedPrefix}disable *pconly*_
┣ 👑 _${usedPrefix}enable *gconly*_
┣ 👑 _${usedPrefix}disable *gconly*_
┣ 👑 _${usedPrefix}banchat2_
┣ 👑 _${usedPrefix}unbanchat2_
┣ 👑 _${usedPrefix}banuser *<@tag>*_
┣ 👑 _${usedPrefix}unbanuser *<@tag>*_
┣ 👑 _${usedPrefix}banuser *<@tag>*_
┣ 👑 _${usedPrefix}bc *<texto>*_
┣ 👑 _${usedPrefix}bcchats *<texto>*_
┣ 👑 _${usedPrefix}bcgc *<texto>*_
┣ 👑 _${usedPrefix}cleartpm_
┣ 👑 _${usedPrefix}restart_
┣ 👑 _${usedPrefix}update_
┣ 👑 _${usedPrefix}addprem *<@tag>*_
┣ 👑 _${usedPrefix}delprem *<@tag>*_
┣ 👑 _${usedPrefix}listprem_
┣ 👑 _${usedPrefix}añadirdiamantes *<@tag> <cantidad>*_
┣ 👑 _${usedPrefix}añadirxp *<@tag> <cantidad>*_
┣ 👑 _${usedPrefix}resetuser_
┣ 👑 _${usedPrefix}block_
┣ 👑 _${usedPrefix}unblock_
┣ 👑 _${usedPrefix}spamgp *link*_
┣ 👑 _${usedPrefix}banlist_ 
┣ 👑 _${usedPrefix}block *<@tag>*_
┣ 👑 _${usedPrefix}unblock *<@tag>*_
┣ 👑 _${usedPrefix}setprefix *<texto>*
┣ 👑 _${usedPrefix}resetprefix
┣ 👑 _${usedPrefix}autoadmin_
┣ 👑 _${usedPrefix}setppbot *<responder a imagen>*_
┣ 👑 _${usedPrefix}leavegc_
┗━━━━━━━━━━━━━┛`, footer: `${wm}`, pp,
title: null,
buttonText: "LIST MENU", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menucreador|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
