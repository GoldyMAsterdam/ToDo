var amPm = prompt('Enter AM or PM:').toUpperCase();

if (amPm === 'PM' && eventHour !== 12) {
    eventHour += 12; // Convert PM hour to 24-hour format
} else if (amPm === 'AM' && eventHour === 12) {
    eventHour = 0; // Convert 12 AM to 0 hours
}
