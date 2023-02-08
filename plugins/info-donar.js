/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━ ┅ ━*
*┇          「 DONATE 」*
*┣ ┅ ━━━━━━━━━ ┅ ━*
*┃ 𝙷I ${name} 💙*
*┃*
*┃ 👉🏻 HERE SOME DATA*
*┃ IN CASE YOU LIKE TO SUPPORT :𝟹*
*┃*
*┃ ➤ CLUE:* 
*┃ 646180192175788481*
*┃ ➤ BANK: STP* 
*┃ ➤ BENEFICIARY:* 
*┃ BRUNO NEPHEW* 
*┃ ➤ CONCEPT: SUPPORT*  
*┃ ➤ 𝙿𝙰𝚈𝙿𝙰𝙻: https://www.paypal.me/NeKosmicOFC*
*┃*
*┃ 👉🏻 CONTACT ME IF*  
*┃ YOU NEED MORE*
*┃ INFORMATION AND* 
*┃ TO THANK YOU<𝟹*
*┃ wa.me/94775207710*
*┗ ┅ ━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.paypal.me/NeKosmicOFC', '𝙿𝙰𝚈𝙿𝙰𝙻', null, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
