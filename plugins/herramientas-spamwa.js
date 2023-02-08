let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*[ ⚠️ ] PLEASE ENTER THE NUMBER TO WHICH THE MESSAGES WILL BE SPAMED!*\n*USE CORRECT:*\n*—◉ #spamwa number|text|amount*\n*EXAMPLE:*\n*—◉ #spamwa 94999999999|responde :v|25*'
if (!pesan) throw '*[ ⚠️ ] PLEASE ENTER THE MESSAGE TO DO THE SPAM!*\n*USE CORRECT:*\n*—◉ #spamwa number|text|amount*\n*EXAMPLE:*\n*—◉ #spamwa 94999999999|responde :v|25*'
if (jumlah && isNaN(jumlah)) throw '*[ ⚠️ ] AMOUNT MUST BE A NUMBER!*\n*USE CORRECT:*\n*—◉ #spamwa number|text|amount*\n*EXAMPLE:*\n*—◉ #spamwa 94999999999|responde :v|25*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '*[ ⚠️ ] TOO MANY MESSAGES! THE AMOUNT MUST BE LESS THAN 50 MESSAGES*️'
await m.reply(`*[❗] THE SPAM OF MESSAGES TO THE NUMBER ${nomor} IT WAS DONE SUCCESSFULLY*\n*AMOUNT SENT:*\n*—◉ ${fixedJumlah} times!*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
handler.limit = true
export default handler
