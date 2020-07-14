speed(100);
var endMinute;
var startMinute;
var minDuration;
var expEarnings;
var pennyTime;
var quarterTime;
var dollarTime;
var startTime = 0;
var active = 0;
onEvent("button1", "click", function( ) {
    endMinute = getProperty("dropdown3", "text")*60 + getProperty("dropdown4", "text")*1.0;
    startMinute = getProperty("dropdown1", "text")*60 + getProperty("dropdown2", "text")*1.0;
    minDuration = Math.abs(endMinute - startMinute);
    console.log(minDuration);
    expEarnings = minDuration/60 * getProperty("text_input3","text");
    startTime = getTime();
    //console.log(startTime);
    pennyTime = 3600/(getProperty("text_input3","text")/0.01);
    quarterTime = pennyTime * 25;
    dollarTime = quarterTime * 4;
    setProperty("slider1","max",pennyTime*100);
    setProperty("slider2","max",quarterTime*100);
    setProperty("slider3","max",dollarTime*100);
    setProperty("slider4","max",minDuration*6000);
    setProperty("label21","text","Total = $" + (minDuration/60)*getProperty("text_input3","text"));
    active = 1;
    speed(90);
    speed(100);
    while (((getTime()-startTime)/60000 != minDuration)&&(active == 1)){
    //console.log(((getTime()-startTime)/1000)%pennyTime + " / " + pennyTime);  
    setProperty("slider1","value",(((getTime()-startTime)/1000)%pennyTime)*100);
    //console.log(getProperty("slider1","value"));
    setProperty("slider2","value",(((getTime()-startTime)/1000)%quarterTime)*100);
    //console.log(getProperty("slider2","value"));
    setProperty("slider3","value",(((getTime()-startTime)/1000)%dollarTime)*100);
    //console.log(getProperty("slider3","value"));
    setProperty("slider4","value",(((getTime()-startTime)/1000)%(minDuration*60))*100);
    setProperty("text_area3","text","$" + ((getTime()-startTime)/3600000)*getProperty("text_input3","text"));
    }
});




