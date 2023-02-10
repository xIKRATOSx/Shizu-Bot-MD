/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「⫹⫺ DONATE ⫹⫺」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ HEY BRO ${name} 💙*
*┃*
*┃ 👉🏻 HERE SOME DATA*
*┃ IN CASE YOU LIKE TO SUPPORT :𝟹*
*┃*
*┃ ⫹⫺ CLUE:* 
*┃ 646180192175788481*
*┃ ⫹⫺ BANK: STP* 
*┃ ⫹⫺ BENEFICIARY:* 
*┃ BRUNO NEPHEW* 
*┃ ⫹⫺ CONCEPT: SUPPORT*  
*┃ ⫹⫺ PAYPAL: https://www.paypal.me/XCOCO*
*┃*
*┃ 👉🏻 CONTACT ME IF*  
*┃ YOU NEED MORE*
*┃ INFORMATION AND* 
*┃ TO THANK YOU<𝟹*
*┃ wa.me/94764497078*
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.paypal.me/Sandaru', 'PAYPAL', null, null, [['XCOCO MENU', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
