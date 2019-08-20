export function setCookie (name,val,time) {        
    //存的名称name,存的值val,存的天数time(过期时间)
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+time);   
    document.cookie=name+"="+val+";expires="+oDate;//过期时间           
}
export function getCookie (name) {
    var str = document.cookie;
    var arrStr=str.split("; ")  
    //遍历数组
    for (var i = 0; i < arrStr.length; i++) {
        console.log(arrStr[i]); 
        var arr=arrStr[i].split("=")
        console.log(arr);
        if(arr[0]==name){
            return arr[1]
        }
    }
}
export function removeCookie(name){
    setCookie(name,"",-1);
}