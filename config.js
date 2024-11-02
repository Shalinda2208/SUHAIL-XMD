const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_23_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzksXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDczLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDcyLFxuICAgICAgICA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDQyLFxuICAgICAgICA3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OCxcbiAgICAgICAgNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNixcbiAgICAgICAgMjI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL1ZJWG5xL1N0aUxNSzZja2p1dVRheXptZzdxVUI1SlBBR1BYVnV0K0pxbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic2FIODlaMFJSSjZBd0JXUEN3S0VZUVwiLFxuICBcInBob25lSWRcIjogXCJjYmE0MjM0Ni1iOWM4LTRhNjAtYWE5MS00ZDU2YmQzNjU4ZmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAxOTgsXG4gICAgICAxMTcsXG4gICAgICA2LFxuICAgICAgMTQxLFxuICAgICAgMTcxLFxuICAgICAgOTEsXG4gICAgICA1OCxcbiAgICAgIDIyMixcbiAgICAgIDE5OSxcbiAgICAgIDYyLFxuICAgICAgMTY2LFxuICAgICAgMixcbiAgICAgIDE2NSxcbiAgICAgIDE1NixcbiAgICAgIDIyNyxcbiAgICAgIDIyOSxcbiAgICAgIDIyMixcbiAgICAgIDY0LFxuICAgICAgMTM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxLFxuICAgICAgMjQ3LFxuICAgICAgNyxcbiAgICAgIDE3OCxcbiAgICAgIDI1MyxcbiAgICAgIDI0NCxcbiAgICAgIDE0MSxcbiAgICAgIDgyLFxuICAgICAgMTg5LFxuICAgICAgOTYsXG4gICAgICAxMjksXG4gICAgICAyNTIsXG4gICAgICAxNzMsXG4gICAgICAxOTUsXG4gICAgICAxMjAsXG4gICAgICAxODMsXG4gICAgICAxNzksXG4gICAgICAyMjEsXG4gICAgICAxMjcsXG4gICAgICA2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGTERTMVgxRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Njk3NDQxMjY6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZem8J2Xm/Cdl5TwnZef8J2XnFwiLFxuICAgIFwibGlkXCI6IFwiMTYyNDE0NzU4NzQ0Mjk2OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l2Qm1Vd1FsYmFXdVFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRmlVWk9JaS80dS9TbFlaN0duSUR5Q2ZicGFKNmpZRHB2bVk0ek5hVDEyZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4QlBJZXE1Vi9FNzNNMWp5eGxSejI1cG1tNXlYdjBLRnF0UHFFc01LRlN2LzhMZjNINW4yNDB0YzVVZllMcC9xcUFYbG1yMytlYkRPMlZ1bW90cVpBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwcjlycXo4TGNuaUFNQ1U0QU1SWFF1Vm80OTNrOUFNMzhPVXBmWFF3NnZwaWtGa0N4OHBFSVR5L0s3eGNYOXUxa09KdGJ3TEVvMVFaYWZHSEcrMnJEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2OTc0NDEyNjoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDUxNzc4NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU4rM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTiszLmpzb24iOiAie1wia2V5RGF0YVwiOlwibWsxcEtzd3VWRnd6SDdJS3BraDVZVkhMU1hYQnZaeFN5OG45NENlS0ZFWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTk4MDE0ODEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
