import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "SELECT YOUR AGE!",
	rows: [
	    {title: "Random Years", rowId: '.reg ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "AGES",
	rows: [
	    {title: "30 Age", rowId: '.reg ' + namae + '.30 '},
	    {title: "29 Age", rowId: '.reg ' + namae + '.29 '},
	    {title: "28 Age", rowId: '.reg ' + namae + '.28 '},
	{title: "27 Age", rowId: '.reg ' + namae + '.27 '},
	{title: "26 Age", rowId: '.reg ' + namae + '.26 '},
	{title: "25 Age", rowId: '.reg ' + namae + '.25 '},
	{title: "24 Age", rowId: '.reg ' + namae + '.24 '},
	{title: "23 Age", rowId: '.reg ' + namae + '.23 '},
	{title: "22 Age", rowId: '.reg ' + namae + '.22 '},
	{title: "21 Age", rowId: '.reg ' + namae + '.21 '}
	]
    },
    {
	title: "YOUNG",
	rows: [
	    {title: "20 Age", rowId: '.reg ' + namae + '.20 '},
	    {title: "19 Age", rowId: '.reg ' + namae + '.19 '},
	    {title: "18 Age", rowId: '.reg ' + namae + '.18 '},
	{title: "17 Age", rowId: '.reg ' + namae + '.17 '},
	{title: "16 Age", rowId: '.reg ' + namae + '.16 '},
	{title: "15 Age", rowId: '.reg ' + namae + '.15 '},
	{title: "14 Age", rowId: '.reg ' + namae + '.14 '},
	{title: "13 Age", rowId: '.reg ' + namae + '.13 '},
	{title: "12 Age", rowId: '.reg ' + namae + '.12 '},
	{title: "11 Age", rowId: '.reg ' + namae + '.11 '},
	{title: "10 Age", rowId: '.reg ' + namae + '.10 '},
	{title: "9 Age", rowId: '.reg ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `Please select your age by pressing the button...\n*NAME:* ${conn.getName(m.sender)}\POWERD BY XCOCO*${usedPrefix + command} TuNombre.TusAños*`,
  footer: global.wm,
  title: "━━━━「 FOR REGISTER XCOCO ✅」━━━━",
  buttonText: "CLICK ME!",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `[💬] Ya estás registrado\nQuieres volver a registrarte? *${usedPrefix}unreg <NUMERO SN>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, m)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'El nombre no puede estar vacío (Letras)'
  if (!age) throw 'La edad no puede estar vacía (Numeros)'
  age = parseInt(age)
  if (age > 30) throw 'Que viejo (。-`ω´-)'
  if (age < 5) throw 'Los bebes no saben escribir ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  m.reply(`
━━━━ 「 _Register Complete_ ✅  」━━━━
╭─• 〘 INFO 〙
│✧ *Number ♻:* ${name}
│✧ *Age ♻:* ${age} YEARS OLD
│✧ *ID ♻:* ${sn}
▣──────···
`.trim())
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(verify|verificar|registrar|reg(ister)?)$/i

export default handler
