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
title: `LIST`
rows: [
      {title: "🥵 CREATER 🥵", description: 'CONTACT XCOCO CREATER', rowId: `${usedPrefix}creador`},
      {title: "🎁 ALL MENU 🎁", description: 'ALL COMMANDS', rowId: `${usedPrefix}allmenu`},
      {title: "💎 GROUP MENU 💎", description: 'GROUPS COMMANDS', rowId: `${usedPrefix}menugrupo`},
      {title: "🎮 GAME MENU 🎮", description: 'GAMES COMMANDS', rowId: `${usedPrefix}menujuegos`},
      {title: "🔊 AUDIO MENU 🔊", description: 'AUDIO COMMANDS', rowId: `${usedPrefix}menuaudios`},
      {title: "👽 STICKER MENU 👽", description: 'STICKER COMMANDS', rowId: `${usedPrefix}menusticker`},
      {title: "🎤 AUDIO EFFECT MENU 🎤", description: 'AUDIO EFFECT MENU', rowId: `${usedPrefix}menuefectos`},
      {title: "👾 RANDOM MENU 👾", description: 'RANDOM MENU', rowId: `${usedPrefix}menurandom`},
      {title: "🔞 NSFW MENU 🔞", description: 'NSFW COMMANDS [SEX]🔞', rowId: `${usedPrefix}menunsfw`},
      {title: "📲 DOWNLOAD MENU 📲", description: 'DOWNLOAD COMMANDS', rowId: `${usedPrefix}menudescargas`},
      {title: "🖍️ LOGO MENU 🖍️", description: 'LOGO COMMANDS', rowId: `${usedPrefix}menulogos`},
      {title: "🔍 SEARCH MENU 🔍", description: 'SEARCH COMMANDS', rowId: `${usedPrefix}menubusquedas`},
      {title: "⚒️ TOOLS MENU ⚒️", description: 'TOOLS MENU', rowId: `${usedPrefix}menuherramientas`},
      {title: "👑 OWNER MENU 👑", description: 'OWNER COMMANDS', rowId: `${usedPrefix}menucreador`},
]}, ] 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*ミ💖 HI _${name}_ 💖彡*
XCOCO GROUP COMMANDS
┏━━━━━━━━━━━━━┓
┃ *<GROUP MENU>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣° ඬ⃟💎 _${usedPrefix}add *<numero>*_
┣° ඬ⃟💎 _${usedPrefix}kick *<@tag>*_
┣° ඬ⃟💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┣° ඬ⃟💎 _${usedPrefix}promote *<@tag>*_
┣° ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
┣° ඬ⃟💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣° ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
┣° ඬ⃟💎 _${usedPrefix}infogroup_
┣° ඬ⃟💎 _${usedPrefix}link_
┣° ඬ⃟💎 _${usedPrefix}setname *<texto>*_
┣° ඬ⃟💎 _${usedPrefix}setdesc *<texto>*_
┣° ඬ⃟💎 _${usedPrefix}invocar *<texto>*_
┣° ඬ⃟💎 _${usedPrefix}setwelcome *<texto>*_
┣° ඬ⃟💎 _${usedPrefix}setbye *<texto>*_
┣° ඬ⃟💎 _${usedPrefix}hidetag *<texto>*_
┣° ඬ⃟💎 _${usedPrefix}fantasmas_
┣° ඬ⃟💎 _${usedPrefix}destraba_
┣° ඬ⃟💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣° ඬ⃟💎 _${usedPrefix}warn <@tag>_
┣° ඬ⃟💎 _${usedPrefix}unwarn <@tag>_
┣° ඬ⃟💎 _${usedPrefix}listwarn_
┣° ඬ⃟💎 _${usedPrefix}resetlink_
┗━━━━━━━━━━━━━┛`, footer: `${wm}`, pp,
title: null,
buttonText: "LIST MENU", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menugrupo|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
