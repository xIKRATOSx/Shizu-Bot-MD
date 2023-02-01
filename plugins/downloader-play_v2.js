import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `*Please enter a song name*\n\n*—◉ Example:\n#play.1 Good Feeling - Flo Rida*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'play.1') {
conn.reply(m.chat, `*_⏳Please wait processing your Audio...⏳_*`, m)  
let json = await res.json()
conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_⏳Please wait processing your Video...⏳_*`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `_Aqui esta tu video_`, m)}
} catch (e) {
m.reply('*[❗INFO❗] ERORR, When Uploading*')
}}
handler.help = ['play.1' , 'play.2', 'song'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2', 'song']
export default handler
