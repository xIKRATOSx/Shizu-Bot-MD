import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*Please enter a song name*\n\n*—◉ Example:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙽𝙾 𝙿𝚄𝙳𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾/𝚅𝙸𝙳𝙴𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙲𝙾𝙽 𝙾𝚃𝚁𝙾 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3doc ${url}`, buttonText: { displayText: '🎵 AUDIODOC 🎵' }, type: 1 },
{ buttonId: `#ytmp4doc ${url}`, buttonText: { displayText: '🎥 VIDEODOC 🎥' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: '📋 MORE RESULTS 📋' }, type: 1 }, ]    
let texto1 = `*◉—⌈🔊 PLAY DOCUMENT 🔊⌋—◉*\n
❏ 📌 *TITLE:* ${title}
❏ 📆 *PUBLISHED:* ${publishedTime}
❏ ⌚ *DURATION:* ${durationH}
❏ 👀 *VIEWS:* ${viewH}
❏ 📇 *DESCRIPTION:* ${description}`.trim()
let buttonMessage = {
"document": { url: "https://wa.me/34623442554" }, 
"fileName": '❏ 🌿 ʀᴇᴘʀᴏᴅᴜᴄᴛᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ', 
"mimetype": 'application/vnd.ms-excel',
"caption": texto1,
"fileLength": '99999999999999',
"mentions": [m.sender],
"footer": wm,
"buttons": buttons,
"headerType": 4,   
contextInfo: {
"mentionedJid": [m.sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `${title}`,
"mediaType": 2, 
"previewType": "VIDEO",
"thumbnail": await (await fetch(thumbnail)).buffer(),
"mediaUrl": `${url}`,
"sourceUrl": `https://github.com/Shizu-Hub/Shizu-Bot-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
m.reply('*[❗INFO❗] ERROR, When Uploding*')}}
handler.command = /^play3|playdoc?$/i
export default handler
