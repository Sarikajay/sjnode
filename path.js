const path =require('path')
console.log(path.sep)
const filepath = path.join('./subfolder','tst.txt')
console.log(filepath)
const name =path.basename(filepath)
console.log(name)

const abs = path.resolve(__dirname,'subfolder','tst.txt')
console.log(abs)


