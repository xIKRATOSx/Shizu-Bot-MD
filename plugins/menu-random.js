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
      {title: "🥵 CREATER 🥵", description: 'CREATER COMMANDS', rowId: `${usedPrefix}creador`},
      {title: "🎁 ALL MENU  🎁", description: 'ALL COMMANDS', rowId: `${usedPrefix}allmenu`},
      {title: "💎 GROUP MENU 💎", description: 'GROUP COMMANDS ', rowId: `${usedPrefix}menugrupo`},
      {title: "🎮 GAMES MENU  🎮", description: 'GAMES COMMANDS ', rowId: `${usedPrefix}menujuegos`},
      {title: "🔊 AUDIO MENU  🔊", description: 'AUDIO MENU', rowId: `${usedPrefix}menuaudios`},
      {title: "👽 STICKER MENU  👽", description: 'STICKER MENU', rowId: `${usedPrefix}menusticker`},
      {title: "🎤 AUDIO EFFECT MENU  🎤", description: 'AUDIO EFFECTS COMMANDS', rowId: `${usedPrefix}menuefectos`},
      {title: "👾 RANDOM MENU 👾", description: 'RANDOM COMMANDS', rowId: `${usedPrefix}menurandom`},
      {title: "🔞 NSFW MENU 🔞", description: 'SEX COMMANDS 🔞', rowId: `${usedPrefix}menunsfw`},
      {title: "📲 DOWNLOAD MENU  📲", description: 'DOWNLOAD COMMANDS', rowId: `${usedPrefix}menudescargas`},
      {title: "🖍️ LOGO MENU 🖍️", description: 'LOGO COMMANDS', rowId: `${usedPrefix}menulogos`},
      {title: "🔍 SEARCH MENU 🔍", description: 'SEARCH COMMANDS', rowId: `${usedPrefix}menubusquedas`},
      {title: "⚒️ TOOLS MENU ⚒️", description: 'TOOLS COMMANDS', rowId: `${usedPrefix}menuherramientas`},
      {title: "👑 OWNER MENU 👑", description: 'OWNER MENU', rowId: `${usedPrefix}menucreador`},
]}, ] 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*ミ💖 HI _${name}_ 💖彡*
RANDOM MENU
┏━━━━━━━━━━━━━┓
┃ *<RANDOM/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 👾 _${usedPrefix}cristianoronaldo_
┣ 👾 _${usedPrefix}messi_
┣ 👾 _${usedPrefix}meme_
┣ 👾 _${usedPrefix}itzy_
┣ 👾 _${usedPrefix}blackpink_
┣ 👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
┣ 👾 _${usedPrefix}lolivid_
┣ 👾 _${usedPrefix}loli_
┣ 👾 _${usedPrefix}navidad_
┣ 👾 _${usedPrefix}ppcouple_
┣ 👾 _${usedPrefix}neko_
┣ 👾 _${usedPrefix}waifu_
┣ 👾 _${usedPrefix}akira_
┣ 👾 _${usedPrefix}akiyama_
┣ 👾 _${usedPrefix}anna_
┣ 👾 _${usedPrefix}asuna_
┣ 👾 _${usedPrefix}ayuzawa_
┣ 👾 _${usedPrefix}boruto_
┣ 👾 _${usedPrefix}chiho_
┣ 👾 _${usedPrefix}chitoge_
┣ 👾 _${usedPrefix}deidara_
┣ 👾 _${usedPrefix}erza_
┣ 👾 _${usedPrefix}elaina_
┣ 👾 _${usedPrefix}eba_
┣ 👾 _${usedPrefix}emilia_
┣ 👾 _${usedPrefix}hestia_
┣ 👾 _${usedPrefix}hinata_
┣ 👾 _${usedPrefix}inori_
┣ 👾 _${usedPrefix}isuzu_
┣ 👾 _${usedPrefix}itachi_
┣ 👾 _${usedPrefix}itori_
┣ 👾 _${usedPrefix}kaga_
┣ 👾 _${usedPrefix}kagura_
┣ 👾 _${usedPrefix}kaori_
┣ 👾 _${usedPrefix}keneki_
┣ 👾 _${usedPrefix}kotori_
┣ 👾 _${usedPrefix}kurumi_
┣ 👾 _${usedPrefix}madara_
┣ 👾 _${usedPrefix}mikasa_
┣ 👾 _${usedPrefix}miku_
┣ 👾 _${usedPrefix}minato_
┣ 👾 _${usedPrefix}naruto_
┣ 👾 _${usedPrefix}nezuko_
┣ 👾 _${usedPrefix}sagiri_
┣ 👾 _${usedPrefix}sasuke_
┣ 👾 _${usedPrefix}sakura_
┣ 👾 _${usedPrefix}cosplay_
┗━━━━━━━━━━━━━┛`, footer: `${wm}`, pp,
title: null,
buttonText: "LIST", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menurandom|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
