hconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="shalindajagath62@gmail.com"
global.location="kegalla,Sri lanka."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VarGi1SHVvTY5MUl0Y3S";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© ShaliTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94769744126";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/cbmc4t.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,94769744126";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94769744126";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94761167172,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_58_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYxLFxuICAgICAgICAzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5LFxuICAgICAgICA0NixcbiAgICAgICAgNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MixcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA5NixcbiAgICAgICAgMjIzLFxuICAgICAgICA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk3LFxuICAgICAgICA0MixcbiAgICAgICAgODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTksXG4gICAgICAgIDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgODYsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICA4MixcbiAgICAgICAgMTEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDksXG4gICAgICAgIDY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MixcbiAgICAgICAgNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMixcbiAgICAgICAgOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNixcbiAgICAgICAgOTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFS1JXeDhud0IxcTNJS093Z2Z5NWtrMjY4U21YMmY0Vk9zZDZadStRNTNRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzYxMTY3MTcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxOUYzMUE1RDJBNjNGRjJCNDkxMDQ4MTc4NUVGODM1QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA4OTQyNzdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVUs5VVpoNkZTSkd3UVh6RWFZWFJPQVwiLFxuICBcInBob25lSWRcIjogXCI4NjM1NjJlMy1mMThmLTQwYWEtYjFiMy02M2Y1YzQyNGJjMGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU5LFxuICAgICAgMjE5LFxuICAgICAgMjIwLFxuICAgICAgMTIyLFxuICAgICAgMTMzLFxuICAgICAgMzUsXG4gICAgICAxMTIsXG4gICAgICAxMDQsXG4gICAgICAyNDUsXG4gICAgICAyNTUsXG4gICAgICAzOSxcbiAgICAgIDk3LFxuICAgICAgMjUzLFxuICAgICAgMTA3LFxuICAgICAgOTAsXG4gICAgICAzNSxcbiAgICAgIDgsXG4gICAgICAxMjEsXG4gICAgICAxMyxcbiAgICAgIDE2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDEwMyxcbiAgICAgIDY0LFxuICAgICAgMTA4LFxuICAgICAgMTE2LFxuICAgICAgMTk0LFxuICAgICAgMTg4LFxuICAgICAgMjIyLFxuICAgICAgMjI3LFxuICAgICAgMzIsXG4gICAgICAxNzUsXG4gICAgICAzOCxcbiAgICAgIDEwNCxcbiAgICAgIDI0OSxcbiAgICAgIDEyOSxcbiAgICAgIDE5MyxcbiAgICAgIDEyNyxcbiAgICAgIDEzNixcbiAgICAgIDQ1LFxuICAgICAgMjQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkY2QU1DUEdNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MTE2NzE3MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2XpvCdl5vwnZeU8J2Xn/Cdl5xcIixcbiAgICBcImxpZFwiOiBcIjExMTQwNzc0Mzg5NzY5MDozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k3Qm1Vd1F2Yk90dVFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRmlVWk9JaS80dS9TbFlaN0duSUR5Q2ZicGFKNmpZRHB2bVk0ek5hVDEyZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLdmVHekZwcE5OZFYwRmN4TVRmemdHSjQwdnNoZXJOMEZkNlVvcGlQRldBNlhMSVBVTkhKYzRaNHF3NFRZcGFIZ2xNYU5tUk1TSDByTlpmQ1VaYnZBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnc01JTjhIOEJKeG1EL1liOTVpanVBNTRXc3ZXU2pidS8rWWltaTMrVStuZTRRZSs1MnVsUTNSTEZoby9VZEZWMno0WjJzOW10RXJLY2RBMDdBUkhDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2MTE2NzE3MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwODk0MjczLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBREI2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEQjYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYdEtkaE5TZEFuU25TQ3hMVEl4N3dkZVBtUGhwQUJ0TTdyMVR3dk4rKzhBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTgwMTQ4NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMDg4NjY5NzAwMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "𝗦𝗛𝗔𝗟𝗜",
  botname : process.env.BOT_NAME  || "𝗦𝗛𝗔𝗟𝗜-MD",
  ownername:process.env.OWNER_NAME|| "𝗦𝗛𝗔𝗟𝗜",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "▏𝙨𝙝𝙖𝙡𝙞 ▏"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
