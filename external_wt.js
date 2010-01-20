function genWtValues() {
    //simplified webtrends cookie reading & invoice values, etc

    //find cookie trail
    if (Cookie.get('trail_txt')!==null) {       
        wt = Cookie.get('trail_txt'); //read in cookie
        Cookie.erase('trail_txt');
    }

    //build invoice number, date & time
    var tmpDate = new Date();
    wtInv = Math.floor(Math.random()*1000000000);
    wtDate = tmpDate.getMonth() + ':' + tmpDate.getDate() + ':' + tmpDate.getFullYear();
    wtTime = tmpDate.getHours() + ':' + tmpDate.getMinutes() + ':' + tmpDate.getSeconds();
}