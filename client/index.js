Meteor.startup(function(){
    Pushwoosh.initPushwoosh('XXXX-XXXXX');

    document.addEventListener('push-notification', function(event){
        alert('viene un mensaje');
        if (device.platform === "iOS") {
            //get the notification payload
            var notification = event.notification;

            //display alert to the user for example
            alert(notification.aps.alert);
        } else if (device.platform === "Android") {
            var title = event.notification.title;
            var userData = event.notification.userdata;

            if(typeof(userData) != "undefined") {
                console.warn('user data: ' + JSON.stringify(userData));
            }

            alert(title);
        }else{
            var title = event.notification.title;
            var userData = event.notification.userdata;

            if(typeof(userData) != "undefined") {
                console.warn('user data: ' + JSON.stringify(userData));
            }

            alert(title);
        }
    });
});
