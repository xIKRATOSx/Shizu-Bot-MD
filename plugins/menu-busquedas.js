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
      {title: "🥵 CREATER 🥵", description: 'CREATE MENU', rowId: `${usedPrefix}creador`},
      {title: "🎁 ALL MENU 🎁", description: 'ALL COMMANDS', rowId: `${usedPrefix}allmenu`},
      {title: "💎 GROUP MENU 💎", description: 'GROUP COMMANDS', rowId: `${usedPrefix}menugrupo`},
      {title: "🎮 GAMES MENU 🎮", description: 'GAMES COMMANDS', rowId: `${usedPrefix}menujuegos`},
      {title: "🔊 AUDIO MENU 🔊", description: 'AUDIO COMMANDD', rowId: `${usedPrefix}menuaudios`},
      {title: "👽 STICKER MENU👽", description: 'STICKER COMMANDS', rowId: `${usedPrefix}menusticker`},
      {title: "🎤 AUDIO EFFECT MENU 🎤", description: 'AUDIO EFFECTS MENU', rowId: `${usedPrefix}menuefectos`},
      {title: "👾 RANDOM MENU 👾", description: 'RANDIM COMMANDS', rowId: `${usedPrefix}menurandom`},
      {title: "🔞 NSFW MENU 🔞", description: 'SEX COMMANDS 🔞', rowId: `${usedPrefix}menunsfw`},
      {title: "📲 DOWNLOAD MENU 📲", description: 'DOWNLOAD COMMANDS', rowId: `${usedPrefix}menudescargas`},
      {title: "🖍️ LOGO MENU 🖍️", description: 'LOGO COMMANDS', rowId: `${usedPrefix}menulogos`},
      {title: "🔍 SEARCH MENU 🔍", description: 'SEARCH COMMANDS', rowId: `${usedPrefix}menubusquedas`},
      {title: "⚒️ TOOLS MENU ⚒️", description: 'TOOLS COMMANDS', rowId: `${usedPrefix}menuherramientas`},
      {title: "👑 OWNER MENU 👑", description: 'OWNER COMMANDS', rowId: `${usedPrefix}menucreador`},
]}, ] 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*ミ💖 𝗛I _${name}_ 💖彡*
XCOCO SEARCH MENU 
┏━━━━━━━━━━━━━┓
┃ *<SEARCH COMMANDS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣° ඬ⃟🔍 _${usedPrefix}stickersearch *<texto>*_
┣° ඬ⃟🔍 _${usedPrefix}xnxxsearch *<texto>*_
┣° ඬ⃟🔍 _${usedPrefix}animeinfo *<texto>*_
┣° ඬ⃟🔍 _${usedPrefix}google *<texto>*_
┣° ඬ⃟🔍 _${usedPrefix}letra *<texto>*_
┣° ඬ⃟🔍 _${usedPrefix}wikipedia *<texto>*_
┣° ඬ⃟🔍 _${usedPrefix}ytsearch *<texto>*_
┣° ඬ⃟🔍 _${usedPrefix}apkdone *<texto>*_
┣° ඬ⃟🔍 _${usedPrefix}apkgoogle *<texto>*_
┣° ඬ⃟🔍 _${usedPrefix}apkmody *<texto>*_
┣° ඬ⃟🔍 _${usedPrefix}apkshub *<texto>*_
┣° ඬ⃟🔍 _${usedPrefix}happymod *<texto>*_
┣° ඬ⃟🔍 _${usedPrefix}hostapk *<texto>*_
┣° ඬ⃟🔍 _${usedPrefix}revdl *<texto>*_
┣° ඬ⃟🔍 _${usedPrefix}toraccino *<texto>*_
┣° ඬ⃟🔍 _${usedPrefix}uapkpro *<texto>*_
┣° ඬ⃟🔍 _${usedPrefix}playstore *<texto>*_
┗━━━━━━━━━━━━━┛`, footer: `${wm}`, pp,
title: null,
buttonText: "LIST", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menubusquedas|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
