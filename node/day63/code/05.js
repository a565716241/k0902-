// 要求读完1-3 txt文件 
// 要求 必须先读取1  再读取2 再读取3 
const fs=require('fs')
fs.readFile('./1.txt', (err, data) => {
    console.log(data.toString())

    fs.readFile('./2.txt', (err, data) => {
        console.log(data.toString())

        fs.readFile('./3.txt', (err, data) => {
            console.log(data.toString())
            fs.readFile('./1.txt', (err, data) => {
                console.log(data.toString())

                fs.readFile('./2.txt', (err, data) => {
                    console.log(data.toString())

                    fs.readFile('./3.txt', (err, data) => {
                        console.log(data.toString())
                        fs.readFile('./1.txt', (err, data) => {
                            console.log(data.toString())

                            fs.readFile('./2.txt', (err, data) => {
                                console.log(data.toString())

                                fs.readFile('./3.txt', (err, data) => {
                                    console.log(data.toString())
                                    fs.readFile('./1.txt', (err, data) => {
                                        console.log(data.toString())

                                        fs.readFile('./2.txt', (err, data) => {
                                            console.log(data.toString())

                                            fs.readFile('./3.txt', (err, data) => {
                                                console.log(data.toString())
                                                fs.readFile('./1.txt', (err, data) => {
                                                    console.log(data.toString())
                                                
                                                    fs.readFile('./2.txt', (err, data) => {
                                                        console.log(data.toString())
                                                
                                                        fs.readFile('./3.txt', (err, data) => {
                                                            console.log(data.toString())
                                                            fs.readFile('./1.txt', (err, data) => {
                                                                console.log(data.toString())
                                                
                                                                fs.readFile('./2.txt', (err, data) => {
                                                                    console.log(data.toString())
                                                
                                                                    fs.readFile('./3.txt', (err, data) => {
                                                                        console.log(data.toString())
                                                                        fs.readFile('./1.txt', (err, data) => {
                                                                            console.log(data.toString())
                                                
                                                                            fs.readFile('./2.txt', (err, data) => {
                                                                                console.log(data.toString())
                                                
                                                                                fs.readFile('./3.txt', (err, data) => {
                                                                                    console.log(data.toString())
                                                                                    fs.readFile('./1.txt', (err, data) => {
                                                                                        console.log(data.toString())
                                                
                                                                                        fs.readFile('./2.txt', (err, data) => {
                                                                                            console.log(data.toString())
                                                
                                                                                            fs.readFile('./3.txt', (err, data) => {
                                                                                                console.log(data.toString())
                                                                                            })
                                                                                        })
                                                                                    })
                                                
                                                                                })
                                                                            })
                                                                        })
                                                
                                                                    })
                                                                })
                                                            })
                                                
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })

                                })
                            })
                        })

                    })
                })
            })

        })
    })
})



