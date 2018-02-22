var month = ["Januari", "Februari", "Mars", 
"April", "Maj", "Juni", "July", "Augusti", "September", 
"Oktober", "November", "December"];

var weekDays = ["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"];

var myDate = new Date();
var sweLocal = weekDays[myDate.getDay()] + " den " + myDate.getDate() + " "
+ month[myDate.getMonth()];
export default sweLocal;