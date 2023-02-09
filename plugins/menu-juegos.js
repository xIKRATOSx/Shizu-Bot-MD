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
title: `Xcoco List
`,
rows: [
      {title: "🥵 CREATER 🥵", description: 'CREATER COMMANDS', rowId: `${usedPrefix}creador`},
      {title: "🎁 ALL MENU 🎁", description: 'All COMMANDS', rowId: `${usedPrefix}allmenu`},
      {title: "💎 GROUP MENU 💎", description: 'GROUP COMMANDS', rowId: `${usedPrefix}menugrupo`},
      {title: "🎮 GAMES MENU  🎮", description: 'GAMES COMMANDS', rowId: `${usedPrefix}menujuegos`},
      {title: "🔊 AUDIO MENU  🔊", description: 'AUDIO COMMANDS', rowId: `${usedPrefix}menuaudios`},
      {title: "👽 STICKER MENU  👽", description: 'STICKER COMMANDS', rowId: `${usedPrefix}menusticker`},
      {title: "🎤 AUDIO EFFECT MENU  🎤", description: 'AUDIO EFFECTS COMMANDS', rowId: `${usedPrefix}menuefectos`},
      {title: "👾 RANDOM MENU  👾", description: 'RANDOM COMMANDS', rowId: `${usedPrefix}menurandom`},
      {title: "🔞 NSFW MENU 🔞", description: 'SEX COMMANDS 🔞', rowId: `${usedPrefix}menunsfw`},
      {title: "📲 DOWNLOAD MENU  📲", description: 'DOWNLOAD COMMANDS ', rowId: `${usedPrefix}menudescargas`},
      {title: "🖍️ LOGO MENU 🖍️", description: 'LOGOES COMMANDS', rowId: `${usedPrefix}menulogos`},
      {title: "🔍 SEARCH MENU  🔍", description: 'SEARCH COMMANDS', rowId: `${usedPrefix}menubusquedas`},
      {title: "⚒️ TOOLS MENU  ⚒️", description: 'TOOLS COMMANDS', rowId: `${usedPrefix}menuherramientas`},
      {title: "👑 OWNER MENU  👑", description: 'OWNER COMMANDS', rowId: `${usedPrefix}menucreador`},
]}, ] 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*ミ💖 HI _${name}_
XCOCO GAMES MENU  💖彡*
┏━━━━━━━━━━━━━┓
┃ *<TOPS GAMES/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🎖️ _${usedPrefix}top *texto*_
┣ 🎖️ _${usedPrefix}topgays_
┣ 🎖️ _${usedPrefix}topguap@s_
┣ 🎖️ _${usedPrefix}topput@s_
┣ 🎖️ _${usedPrefix}toppajer@s_
┣ 🎖️ _${usedPrefix}topotakus_
┣ 🎖️ _${usedPrefix}topfe@s_
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
┃ *<GAMES MENU/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🕹 _${usedPrefix}math *modo*_
┣ 🎮 _${usedPrefix}ttt *nombre del la sala*_
┣ 🕹 _${usedPrefix}delttt *nombre del la sala*_
┣ 🎮 _${usedPrefix}multijuegos_
┣ 🕹️ _${usedPrefix}random *texto*_
┣ 🎮 _${usedPrefix}minovio *@tag*_
┣ 🕹️ _${usedPrefix}2gay *@tag*_
┣ 🎮 _${usedPrefix}gay *@tag / nombre*_
┣ 🕹️ _${usedPrefix}lesbi *@tag / nombre*_
┣ 🎮 _${usedPrefix}pajer@ *@tag / nombre*_
┣ 🕹️ _${usedPrefix}put@ *@tag / nombre*_
┣ 🎮 _${usedPrefix}rata *@tag / nombre*_
┣ 🕹️ _${usedPrefix}manc@ *@tag / nombre*_
┣ 🎮 _${usedPrefix}prostitut@ *@tag / nombre*_
┣ 🕹️ _${usedPrefix}follar *@tag / nombre*_
┣ 🎮 _${usedPrefix}pfollar *@tag / nombre*_
┣ 🕹️ _${usedPrefix}ship(random)_
┣ 🕹️ _${usedPrefix}ship *@tag* *@tag*_
┣ 🎮 _${usedPrefix}bot *texto*_
┣ 🕹️ _${usedPrefix}love *@tag / nombre*_
┣ 🎮 _${usedPrefix}slot *(apuesta de xp)*_
┣ 🕹 _${usedPrefix}ppt *piedra / papel / tijera*_
┣ 🎮 _${usedPrefix}ñengo *suit @user*_ (ppt PvP)
┣ 🕹️ _${usedPrefix}cancion *adivinar cancion*_
┣ 🎮 _${usedPrefix}ñengo *adivinar cancion de ñengo*_
┣ 🕹️ _${usedPrefix}pista *pista del nombre de la canción*_
┣ 🎮 _${usedPrefix}acertijo_
┣ 🕹️ _${usedPrefix}zodiac *AAAA MM DD*_
┣ 🕹️ _${usedPrefix}cuando *texto*_
┗━━━━━━━━━━━━━┛`, footer: `${wm}`, pp,
title: null,
buttonText: "LIST", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menujuegos|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
