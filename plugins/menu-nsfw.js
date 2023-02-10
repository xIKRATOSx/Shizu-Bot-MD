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
      {title: "🥵 CREATER 🥵", description: 'CREATER NUMBER', rowId: `${usedPrefix}creador`},
      {title: "🎁 ALL MENU 🎁", description: 'ALL COMMANDS', rowId: `${usedPrefix}allmenu`},
      {title: "💎 GROUP MENU 💎", description: 'GROUP COMMANDS', rowId: `${usedPrefix}menugrupo`},
      {title: "🎮 GAMES MENU 🎮", description: 'GAMES COMMMANDS', rowId: `${usedPrefix}menujuegos`},
      {title: "🔊 AUDIO MENU 🔊", description: 'AUDIO COMMANDS', rowId: `${usedPrefix}menuaudios`},
      {title: "👽 STICKER MENU 👽", description: 'STICKER COMMANDS', rowId: `${usedPrefix}menusticker`},
      {title: "🎤 AUDIO EFFECT MENU 🎤", description: 'AUDIO EFFECTS COMMANDS', rowId: `${usedPrefix}menuefectos`},
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
SEX COMMANDS
┏━━━━━━━━━━━━━┓
┃ *<🔞COMMANDS +18🔞/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ 🔞 _${usedPrefix}pack_
┣ 🔞 _${usedPrefix}pack2_
┣ 🔞 _${usedPrefix}pack3_
┣ 🔞 _${usedPrefix}videox_
┣ 🔞 _${usedPrefix}tetas_
┣ 🔞 _${usedPrefix}booty_
┣ 🔞 _${usedPrefix}ecchi_
┣ 🔞 _${usedPrefix}furro_
┣ 🔞 _${usedPrefix}imagenlesbians_
┣ 🔞 _${usedPrefix}panties_
┣ 🔞 _${usedPrefix}pene_
┣ 🔞 _${usedPrefix}porno_
┣ 🔞 _${usedPrefix}porno2_
┣ 🔞 _${usedPrefix}randomxxx_
┣ 🔞 _${usedPrefix}pechos_
┣ 🔞 _${usedPrefix}yaoi_
┣ 🔞 _${usedPrefix}yaoi2_
┣ 🔞 _${usedPrefix}yuri_
┣ 🔞 _${usedPrefix}yuri2_
┣ 🔞 _${usedPrefix}trapito_
┣ 🔞 _${usedPrefix}hentai_
┣ 🔞 _${usedPrefix}pies_
┣ 🔞 _${usedPrefix}nsfwloli_
┣ 🔞 _${usedPrefix}nsfworgy_
┣ 🔞 _${usedPrefix}nsfwfoot_
┣ 🔞 _${usedPrefix}nsfwass_
┣ 🔞 _${usedPrefix}nsfwbdsm_
┣ 🔞 _${usedPrefix}nsfwcum_
┣ 🔞 _${usedPrefix}nsfwero_
┣ 🔞 _${usedPrefix}nsfwfemdom_
┣ 🔞 _${usedPrefix}nsfwglass_
┣ 🔞 _${usedPrefix}xnxxsearch_
┣ 🔞 _${usedPrefix}videolesbixxx_
┗━━━━━━━━━━━━━┛`, footer: `${wm}`, pp,
title: null,
buttonText: "LIST", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menunsfw|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
