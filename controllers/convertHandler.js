function ConvertHandler(){
    this.getNum = function(input){
        let regex = RegExp('[a-zA-Z]')
        let end = regex.exec(input).index 
        return input(0,end)
    }

}

module.exports = ConvertHandler