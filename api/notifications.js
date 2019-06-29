import { AsyncStorage } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions  from 'expo-permissions';


const NOTIFICATION_STORAGE_KEY = "Udacicards:notifications";

const createNotification = () => {
    return {
        title: "Daily Quiz Reminder",
        body: "Don't forget, you gotta study today!",
        android: {
            sticky: false,
            priority: "high"
        }
    }
}

export const clearNotifications = () => {
    return AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync());
}

export const setNotification = () => {
    AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
        .then(JSON.Parse)
        .then(data => {
            if (data === null){
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === "granted"){
                            Notifications.cancelAllScheduledNotificationsAsync();
                            
                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate());
                            tomorrow.setHours(tomorrow.getHours());
                            tomorrow.setMinutes(tomorrow.getMinutes() + 1);
                            console.log("scheduled for: ", tomorrow);
                            console.log("current time: ", new Date());
                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: "minute"
                                }
                            ).then(() => AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(true)))
                        }
                    }) 
            }
        })
}