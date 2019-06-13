
import fs from 'fs'
import path from 'path'

export function abc(s: string): Buffer {
    console.log(__dirname)
    console.log(path.join(__dirname,'/privatekey.txt'))
    console.log('读入文件中。。。。。。。。。。。。')
    const privateKey:Buffer = fs.readFileSync(path.join(__dirname,'/privatekey.txt'))
    return privateKey;
}
export function bbb(s:string):void{
    console.log('this is b' + s)
}

export namespace haha {
    export const memeda:Buffer = abc('1111111111')
}

