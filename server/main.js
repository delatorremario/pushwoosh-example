/*Pushwoosh.createMessage({
    "send_date": "now",
    "ignore_user_timezone": true,
    "content": "Your message"
});*/

Meteor.methods({
    sendMessage:function(message,badges){
        console.log(Meteor.userId(),this.userId)
        Pushwoosh.createMessage({
            "query": { _id: Meteor.userId() },
            "send_date": "now",
            //"ignore_user_timezone": true,
            "content": message,
            "android_badges": +badges, // Optional, integer. Android application icon badge number. Use "+n" or "-n" to increment/decrement the badge value by n
            //"android_gcm_ttl": 604800, // Optional. Time to live parameter - the maximum lifespan of a message in seconds
            //"android_header":"android_header",
            //"android_icon": "icon"
            //"android_vibration": 1//,   // Android force-vibration for high-priority pushes, boolean
            //,"android_led":"#ffff00"  // LED hex color, device will do its best approximation
            //,"android_priority":0  // Priority of the push in the Android push drawer, valid values are -2, -1, 0, 1 and 2
            //,"android_ibc":"##ffff00"
        });
    }
})