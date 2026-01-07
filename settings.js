//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtnTkFYTlI0cGhDSDltc0NBQ0tEMVcvcmJkeThseFMvOHVROW5oQWpVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidktiUS9ibU9oQ1ZiT3FYSGlCNXplOXJEdTdteTVMUzJBUnVVdnR6REUwMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSW9GNkdNUTd4V0RlNjlpV0pGVjY3ZjVoNW16UHhUZFJSM2RYa2FMclgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQk5OUGRETmdOaEpmSTkrelNPb3BXMmppT1FvWWw4Qm5KTUh2VjVidnk4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVFU2hKSWs2cGZxYUM3QmY3dFgxdk4wM1Q0bW5Ka2YvcWdmQkFNM1lPWDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJzbTdPZS8xSHNRb3VVNFB1SUJPUDg2S3NwdXBFdDJUQ3JxWUlKc2RQR289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0FLTW5abjhjVGJLdXZ2ODFMNHEvTHdGWXV2UXhWUUZ2V3RaTkxNYXRVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzFJNE9GSnRGYlNaUnVSUGhYMEcvcTgrQ3dkcG9vY1NuWGF0a1V1cGlYdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNuTTRLTXpMNmFoVDdZNDZmOGJvMDgrRXgvODBHU1owZDlveEt1VlpzdEJTMlpBMVIzUldhMnJoenJWQlNMZU5lMlJFVklrNkVZRjJlaDV3SjRlbUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6IkhYREFZd0R0LzhCZ2JQeVEyR2tVYktkbjNDM3pEQXc4MHczc0d2aVRVRW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiODgwMTk3MjgwMTkwMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTUzOUY0MUYxMEREOUU1QkFGNDQxQzVDRjBFRkYwQTEiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2Nzc5MTMyOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiODgwMTk3MjgwMTkwMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTVBMTQ0Nzk1Q0FCNUM5MjEwMTAzQUNFRjgxNTdCNTkiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2Nzc5MTMyOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiODgwMTk3MjgwMTkwMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTUzNTE1QjU5NUI4QkM1OEQ0QkQ5Mzk5QTU0RDk2NTkiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2Nzc5MTMyOX1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJLRTFLTE04UiIsIm1lIjp7ImlkIjoiODgwMTk3MjgwMTkwMjo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKIr8qAyarqnLDhtIDhtJtfypnKmeG0ojopIiwibGlkIjoiMTkzOTk5OTMxNDUzNTA4OjdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKZWtxcG9CRU5HMStjb0dHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIydG01MkFMLy9JbER2UExXMWViSHdpTkFrd3FnRURlb3REL25HaDBuYkRzPSIsImFjY291bnRTaWduYXR1cmUiOiJTaFVHOVVrM2c3U2tRSkdXS21aV2pTdXZuSEtSRUtTMThTL3lSMXdpZWtiQmVTT0l1TENwTHoxUkhuSDJUbkxvUUE5Tm5UMlpBSmhjU2pQZk9RQXdCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieGRoYzN4TVBMbmhEbVRWdlhHNjZia3NjVW9qUnZaTSszL1pGZDUrbWxQMTZDV2gvWS9hUDh4ZGptVEd3TlpKVEwrTlJubmlRNU1jemI2d1FoTVVTQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxOTM5OTk5MzE0NTM1MDg6N0BsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHJadWRnQy8veUpRN3p5MXRYbXg4SWpRSk1Lb0JBM3FMUS81eG9kSjJ3NyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRZ0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY3NzkxMzI3LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUMwdCJ9' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'RIFAT-BBZ' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '8801707327375' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'RIFAT BRO' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "RIFAT BBZ" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
