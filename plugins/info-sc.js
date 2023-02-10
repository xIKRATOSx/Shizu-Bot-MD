let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `*https://github.com*`
let buttonMessage= {
'document': { url: `https://github.com/sandaru07` },
'mimetype': `application/${document}`,
'fileName': `「  Hi I am Xcoco Md 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/sandaru07',
'mediaType': 2,
'previewType': 'pdf',
'title': ' Created By SANDARU⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/channel' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'MENU'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'DONATE'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['sc','script']
export default handler
