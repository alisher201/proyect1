require("dotenv").config()
const fs = require("fs")
const TelegramBot = require("node-telegram-bot-api")
let s = [];
const bot = new TelegramBot(process.env.TELEGRAM_API_KEY, { polling: true })


bot.on("message", msg => {
    const chatId = msg.chat.id

    if (msg.text == "Orqaga") {
        console.log(s);
        s = s.slice(0, -1)
        console.log(s);
        msg.text = s.at(-1)
        if (s.length == 0) {
            bot.sendMessage(msg.chat.id, `salom ${msg.chat.first_name}`, {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: "Operatsion Sestimalar(OS)"
                            },
                            {
                                text: "Arxivlar paroli"
                            }
                        ],
                        [
                            {
                                text: "Arxivdan chiqarish qo'llanma"
                            },
                            {
                                text: "Statistika"
                            }
                        ],

                    ],
                resize_keyboard: true
                })
            })
        }
    }
})






bot.on("message", msg => {
    const chatId = msg.chat.id

    if (msg.text == '/start') {
        fs.readFile('./sts/1.txt', 'utf8', function(err, data){
            let num1= parseInt(data)
            num1++
            let num11 = ''
            num11 += num1
            fs.writeFileSync("./sts/1.txt", num11, (err) => {
                console.log(err);
            });
        })
        bot.sendMessage(msg.chat.id, `salom ${msg.chat.first_name}`, {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Operatsion Sestimalar(OS)"
                        },
                        {
                            text: "Arxivlar paroli"
                        }
                    ],
                    [
                        {
                            text: "Arxivdan chiqarish qo'llanma"
                        },
                        {
                            text: "Statistika"
                        }
                    ],

                ],
                resize_keyboard: true
            })
        })
    }








    if(msg.text == 'Statistika') {
        fs.readFile('./sts/1.txt', 'utf8', function(err, data){
            let num1= parseInt(data)
            bot.sendMessage(chatId, `Botdagi obunachilar: ${num1}ta

📊@murodk_bot statistikasi`)
        })
    }






    if (msg.text == 'Operatsion Sestimalar(OS)') {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        bot.sendMessage(chatId, 'Operatsion Sistemalardan birini tanlang', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Windows '

                        }],
                        [{
                            text: 'Linux'

                        },
                        {
                            text: 'Macos'

                        }],
                        [{
                            text: 'Android OS'

                        },
                        {
                            text: 'Orqaga'

                        },
                        {
                            text: 'Asosiy Menyu'

                        }
                    ]
                ],
                resize_keyboard: true
            })
        })

    }
})
bot.on("message", msg => {
    const chatId = msg.chat.id
    if (msg.text == 'Windows') {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        bot.sendMessage(chatId, 'Windows', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'x32'

                        },
                        {
                            text: 'x64'

                        }],
                        [{
                            text: 'Orqaga'

                        }, {
                            text: 'Asosiy Menyu'

                        }
                    ]
                ],
                resize_keyboard: true
            })
        })

    }

    if (msg.text == 'x32') {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        bot.sendMessage(chatId, 'x32', {
            parse_mode: "HTML",
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: "Windows 10 | x32"
                        },
                        {
                            text: "Windows 8 | 32"
                        },
                        {
                            text: "Windows 7 | 32"
                        }],
                        [{
                            text: "Windows Vista | 32"
                        },
                        {
                            text: "Windows   XP | 32"
                        },
                        {
                            text: "Windows 98 | x32"
                        }],
                        [{
                            text: 'Orqaga'

                        },
                        {
                            text: 'Asosiy Menyu'

                        }
                    ]
                ]
            }
        })

    }
    if (msg.text == 'Windows 10 | x32') {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        bot.sendMessage(chatId, 'Windows 10 | x32', {
            parse_mode: "HTML",
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: "1507"
                        }],
                        [{
                            text: "1511"
                        },
                        {
                            text: "1607"
                        },
                        {
                            text: "1703"
                        }],
                        [{
                            text: 'Orqaga'

                        },
                        {
                            text: 'Asosiy Menyu'

                        }
                    ]
                ]
            }
        })

    }
    if (msg.text == '1507') {
        const file1 = fs.readFileSync('./model/1.zip')
        bot.sendPhoto(msg.chat.id, 'https://www.ixbt.com/img/n1/news/2022/11/3/Hero-Bloom-Logo-800x533_large_large.jpg')
        bot.sendDocument(msg.chat.id, file1)
    }
    if (msg.text == '1511') {
        const file1 = fs.readFileSync('./model/2.zip')
        bot.sendPhoto(msg.chat.id, 'https://gagadget.com/media/post_big/MicrosoftTeams-image.png')
        bot.sendDocument(msg.chat.id, file1)
    }
    if (msg.text == '1607') {

        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://beebom.com/wp-content/uploads/2022/07/Windows-12-Release-Date-Expected-Features-Hardware-Requirements-Price-and-More.jpg?w=750&quality=75')
        bot.sendDocument(msg.chat.id, file1)
    }
    if (msg.text == '1703') {
        const file1 = fs.readFileSync('./model/4.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)
    }
    if (msg.text == 'Windows 8 | 32') {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        bot.sendMessage(msg.chat.id, 'Windows 8', {
            parse_mode: "HTML",
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: "Professional | 32"
                        }],
                        [{
                            text: "Enterprice | 32"
                        }],
                        [{
                            text: "Orqaga"
                        },
                        {
                            text: "Asosiy Menyu"
                        }
                    ]
                ]
            }
        })
    }    if (msg.text == 'Professional | 32') {

            const file1 = fs.readFileSync('./model/3.zip')
            bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
            bot.sendDocument(msg.chat.id, file1)
        }
        if (msg.text == 'Enterprice | 32') {
            const file1 = fs.readFileSync('./model/3.zip')
            bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
            bot.sendDocument(msg.chat.id, file1)
        }

     if (msg.text == 'Windows 7 | 32') {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        bot.sendMessage(msg.chat.id, 'Windows 7 | 32', {
            parse_mode: "HTML",
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: "Ultimate"
                        }],
                        [{
                            text: "Orqaga"
                        },
                        {
                            text: "Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            }
        })

    } if (msg.text == 'Ultimate') {
        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)

    }
    
    if (msg.text == 'Windows Vista | 32') {

        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)

    }
    if (msg.text == 'Windows   XP | 32') {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        bot.sendMessage(msg.chat.id, 'Windows XP | 32', {
            parse_mode: 'HTML',
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: "Professional"
                        }],
                        [{
                            text: "CHip"
                        }],
                        [{
                            text: "Orqaga"
                        },
                        {
                            text: "Asosiy Menyu"
                        }
                    ]
                ],
                resize_keyboard: true
            }
        })
    }
    if (msg.text == 'Professional') {

        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)
    } if (msg.text == 'CHip') {
        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)
    
    }
    if (msg.text == 'Windows 98 | x32') {

        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)

    } if (msg.text == 'x64') {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        bot.sendMessage(msg.chat.id, 'x64', {
            parse_mode: "HTML",
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: "Windows 11"
                        }],
                        [{
                            text: "Windows 10"
                        },
                        {
                            text: "Windows 8"
                        }],
                        [{
                            text: "Windows 7"
                        },
                        {
                            text: "Windows Vista"
                        }],
                        [{
                            text: "Orqaga"
                        },
                        {
                            text: "Asosiy Menyu"
                        }
                    ]
                ]
            }
        })
    }
})

bot.on("message", msg => {
    const chatId = msg.chat.id
    if (msg.text == 'Windows 11') {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        bot.sendMessage(chatId, 'Windows 11', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [

                        {
                            text: "Original obraz"
                        },
                        {
                            text: "Windows 11 by SmokieBlahBlah"
                        }],
                        [{
                            text: "Windows 11 21H2 by Tatata"
                        },
                        {
                            text: "Windows 11 21H2by OneSmile"
                        }],
                        [{
                            text: 'Orqaga'

                        },
                        {
                            text: 'Asosiy Menyu'

                        }
                    ]
                ],
                resize_keyboard: true
            })
        })

    }

    if (msg.text == "Original obraz") {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        bot.sendMessage(chatId, 'Original obraz', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Windows 11Russian Pro 21H2 by"
                        }],
                        [{
                            text: "Orqaga"
                        },
                        {
                            text: "Asosiy menyu"
                        }
                    ]
                ],  resize_keyboard: true
            })
        })
    }
    if (msg.text == "Windows 11Russian Pro 21H2 by") {
        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)

    }
    if (msg.text == "Asosiy menyu") {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        bot.sendMessage(msg.chat.id, 'Asosiy Menyu', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Operatsion Sestimalar(OS)"
                        },
                        {
                            text: "Arxivlar paroli"
                        }
                    ],
                    [
                        {
                            text: "Arxivdan chiqarish qo'llanma"
                        },
                        {
                            text: "Statistika"
                        },
                        {
                            text: 'Orqaga'

                        },
                        {
                            text: 'Asosiy Menyu'

                        }
                    ],

                ],
                resize_keyboard: true
            })
        })
    }

   
    if (msg.text == 'Windows 11 21H2 by Tatata') {

        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)

    }
    if (msg.text == 'Windows 11 by SmokieBlahBlah') {
            
        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)

    }
    if (msg.text == 'Windows 11 21H2by OneSmile') {

        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)

    }
    if (msg.text == "Windows 10") {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        bot.sendMessage(chatId, 'Original obraz', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "1507|x64"
                        }],
                        [{
                            text: "1511|x64"
                        },
                        {
                            text: "1607|x64"
                        },
                        {
                            text: "1703|x64"
                        }],
                        [{
                            text: 'Orqaga'

                        },
                        {
                            text: 'Asosiy Menyu'

                        }
                    ]
                ]
            })
        })
    }
    if (msg.text == "1507|x64") {
        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)
    }
    if (msg.text == "1511|x64") {
        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)
    }
    if (msg.text == "1607|x64") {
        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)
    }
    if (msg.text == "1703|x64") {
        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)
    }
    if (msg.text == "Windows 8") {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        bot.sendMessage(chatId, 'Windows 8', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Professional | x64"
                        }],
                        [{
                            text: "ENterpricel | x64"
                        },
                        {
                            text: "Orqaga"
                        }],
                        [{
                            text: "Asosiy menyu"
                        }
                    ]
                ]
            })
        })
    }
  
    if (msg.text == "Professional | x64") {
        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)
    }
    if (msg.text == "ENterpricel | x64") {
        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)
    }

    if (msg.text == "Windows 7") {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        bot.sendMessage(chatId, 'Windows 7', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Ultimate | x64"
                        }],
                        [{
                            text: "Orqaga"
                        },
                        {
                            text: "Asosiy menyu"
                        }
                    ]
                ],resize_keyboard:true
            })
        })  
    }
    if (msg.text == "Ultimate | x64") {
        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)
    }

    if (msg.text == 'Windows Vista') {
        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)
    }


})

//===================================================================================================================================================
bot.on("message", msg => {
    const chatId = msg.chat.id
    if (msg.text == 'Linux') {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        bot.sendMessage(chatId, 'Linux', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Ubuntu'

                        }],
                        [{
                            text: 'Kali'

                        },
                        {
                            text: 'PureOS'

                        }],
                        [{
                            text: 'Debian'

                        },
                        {
                            text: 'CentOS'

                        },
                        {
                            text: 'Puppy'

                        }],[ {
                            text: 'BlackLab'

                        }, {
                            text: 'BunsenLabs'

                        }],
                        [{
                            text: 'Orqaga'

                        },
                        {
                            text: 'Asosiy Menyu'

                        }
                    ]
                ],
                resize_keyboard: true
            })
        })

    }


    if (msg.text == 'Ubuntu') {
        const file1 = fs.readFileSync('./model/2.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)


    }
    if (msg.text == 'Kali') {
        const file1 = fs.readFileSync('./model/2.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)
    }
    if (msg.text == 'PureOS') {
        const file1 = fs.readFileSync('./model/2.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)
    }

    if (msg.text == 'Debian') {
        const file1 = fs.readFileSync('./model/2.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)


    }
    if (msg.text == 'CentOS') {
        const file1 = fs.readFileSync('./model/2.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)


    }
    if (msg.text == 'Puppy') {
        const file1 = fs.readFileSync('./model/2.zip')
        bot.sendPhoto(msg.chat.id, 'https://cdn.mos.cms.futurecdn.net/uPALkW3UzvgE6FhMy3nCzD-480-80.png')
        bot.sendDocument(msg.chat.id, file1)


    }
})
bot.on('message', msg => {
    if (msg.text == 'BlackLab') {
        const file1 = fs.readFileSync('./model/2.zip')
        bot.sendPhoto(msg.chat.id, 'https://media.loom-app.com/gizmodo/dist/images/2021/06/08/210607_macosmontereyall1.jpg?w=1280')
        bot.sendDocument(msg.chat.id, file1)


    }




})
bot.on('message', msg => {
    if (msg.text == 'BunsenLabs') {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        const chatId = msg.chat.id
        bot.sendMessage(chatId, 'BunsenLabs', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "x86"
                        },
                        {
                            text: 'amd64 '
                        }],
                        [{
                            text: 'Orqaga'
                        },
                        {
                            text: 'Asosiy Menyu'
                        }
                    ]
                ]
            })
        })
    }


    if (msg.text == "x86") {
        const file1 = fs.readFileSync('./model/2.zip')
        bot.sendPhoto(msg.chat.id, 'https://media.loom-app.com/gizmodo/dist/images/2021/06/08/210607_macosmontereyall1.jpg?w=1280')
        bot.sendDocument(msg.chat.id, file1)


    }

    if (msg.text == "amd64") {
        const file1 = fs.readFileSync('./model/2.zip')
        bot.sendPhoto(msg.chat.id, 'https://www.abacustechnologies.com/wp-content/uploads/2019/11/140812REDMackieWin7.jpg')
        bot.sendDocument(msg.chat.id, file1)


    }

})
//==========================================================================
bot.on('message', msg => {
    if (msg.text == 'Macos') {
        const file1 = fs.readFileSync('./model/3.zip')
        bot.sendPhoto(msg.chat.id, 'https://images.macrumors.com/article-new/2021/06/macOS-Monterey-on-MBP-Feature.jpg')
        bot.sendDocument(msg.chat.id, file1)

    }

})
//==========================================================================
bot.on('message', msg => {
    if (msg.text == 'Android OS') {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        const chatId = msg.chat.id
        bot.sendMessage(chatId, 'Android OS', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Android 09'
                        },
                        {
                            text: 'Prime OS '
                        },
                        {
                            text: 'Bliss OS'
                        }],
                        [{
                            text: 'Orqaga'
                        },
                        {
                            text: 'Asosiy Menyu'
                        }
                    ]
                ]
            })
        })
    }
})
bot.on('message', msg => {

    const chatId = msg.chat.id
    if (msg.text == 'Android 09') {
        if (s.at(-1) != msg.text) {
            s.push(msg.text)
        }
        bot.sendMessage(chatId, 'Android 09', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: '32 bit'
                        },
                        {
                            text: '64 bit'
                        }],
                        [{
                            text: 'Orqaga'
                        },
                        {
                            text: 'Asosiy Menyu'
                        }
                    ]
                ],resize_keyboard:true
            })

        })
    }
    if (msg.text == '32 bit') {
        const file1 = fs.readFileSync('./model/2.zip')
        bot.sendPhoto(msg.chat.id, 'https://static.toiimg.com/thumb/msid-81464620,width-1200,height-900,resizemode-4/.jpg')
        bot.sendDocument(msg.chat.id, file1)
    }
    if (msg.text == '64 bit') {
        const file1 = fs.readFileSync('./model/1.zip')
        bot.sendPhoto(msg.chat.id, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWuGST9fR3LVKyd3cdn6pfGgQ0NEbnaBhgO-68eAOBfChpcChUFzTFnQOS4SDEN7hBRQ&usqp=CAU')
        bot.sendDocument(msg.chat.id, file1)

    }
    if (msg.text == 'Asosiy Menyu') {
        bot.sendMessage(msg.chat.id, 'Asosiy Menyu', {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Operatsion Sestimalar(OS)"
                        },
                        {
                            text: "Arxivlar paroli"
                        }
                    ],
                    [
                        {
                            text: "Arxivdan chiqarish qo'llanma"
                        },
                        {
                            text: "Statistika"
                        },
                        {
                            text: 'Orqaga'

                        },
                        {
                            text: 'Asosiy Menyu'

                        }
                    ],

                ],
                resize_keyboard: true
            })
        })
    }
    if (msg.text == 'Prime OS') {
        const file1 = fs.readFileSync('./model/2.zip')
        bot.sendPhoto(msg.chat.id, 'https://static.toiimg.com/thumb/msid-81464620,width-1200,height-900,resizemode-4/.jpg')
        bot.sendDocument(msg.chat.id, file1)

    }
    if (msg.text == 'Bliss OS') {
        const file1 = fs.readFileSync('./model/2.zip')
        bot.sendPhoto(msg.chat.id, 'https://static.toiimg.com/thumb/msid-81464620,width-1200,height-900,resizemode-4/.jpg')
        bot.sendDocument(msg.chat.id, file1)

    }
 
})
//======================================================================================================================
bot.on('message', msg => {
    if (msg.text == "Arxivlar paroli") {
        bot.sendPhoto(msg.chat.id, 'https://media.proglib.io/wp-uploads/2018/02/How-Risky-is-Your-Password-4-Secure-password-tips-feature.jpg', {
            caption: `
             Arxiv paroli rasimda kursatilgan`
        })
    }

})
bot.on('message', msg => {
    if (msg.text == "Arxivdan chiqarish qo'llanma") {
        bot.sendPhoto(msg.chat.id, 'https://complitra.ru/wp-content/uploads/2019/12/parol-na-arhiv.jpg', {
            caption: `
             Kop faylli arxivlarni arxivdan xalos qilish uchun qollanma !!
             `
        })
    }

})
//=======================================================================================================================

bot.on("message", msg => {

    if (msg.text == 'video') {
        bot.sendVideo(msg.chat.id, './img/3.mp4', {
            caption: 'Video haqida...'
        })
    }

    if (msg.text == 'audio') {
        bot.sendAudio(msg.chat.id, './img/music.ogg', {
            caption: 'Nasafiy music'
        })
    }

    if (msg.text == 'documentation') {
        bot.sendDocument(msg.chat.id, './img/test.txt', {
            caption: 'Umumiy malumot olish'
        })
    }

    if (msg.text == 'contact') {
        bot.sendContact(msg.chat.id, '+998911234567', msg.chat.first_name)
    }
})




