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
title: `HELPERS`,
rows: [
      {title: "SANDARU NETHSARA", description: '𝗖𝗢𝗡𝗧𝗔𝗖𝗧𝗢 𝗗𝗘𝗟 𝗖𝗥𝗘𝗔𝗗𝗢𝗥', rowId: `${usedPrefix}donar`},
      {title: "NIMESH OFFICIAL", description: '𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝗼', rowId: `${usedPrefix}hiro`},
      {title: "FACEBOOK OFFICIAL", description: '𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝗼', rowId: `${usedPrefix}damian`},
      {title: "SALITHA DEVITH", description: '𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝗼', rowId: `${usedPrefix}xd`},
]}, ] 
let name = await conn.getName(m.sender)
const listMessage = {
text: `*ミ💖 HI _${name}_ 💖彡*
┏━━━━━━━━━━━━━┓
┃ ```XCOCO CREATERS``` 
┃    

┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ʜᴇʟᴘᴇʀꜱ
┣ ꨄ︎SANDARU NETHSARAꨄ︎
┣CONTACT ME
┣ ✪NIMESH OFICIAL✪ 
┣ CONTACT•2
┣ ✪FACEBOOK OFICIAL✪
┣ CONTACT•3
┣ ✪BLACK-BAT✪
┣ CONTACT•4
┣ <SALITHA DEVITH>
┣ CONTACT•5
┣ ~₆₆₆⸸𝕭𝖔ͥ𝖘𝖘𝕯𝖊ͣ𝖛ͫ𝖎𝖑♔ꦿ꙰⸙
┗━━━━━━━━━━━━━┛`, footer: `${wm}`, pp,
title: null,
buttonText: "XCOCO", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(colaboradores|\?)$/i
handler.exp = 50
handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
