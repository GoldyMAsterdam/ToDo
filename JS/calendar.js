var amPm = prompt('Enter AM or PM:').toUpperCase();

if (amPm === 'PM' && eventHour !== 12) {
    eventHour += 12; 
} else if (amPm === 'AM' && eventHour === 12) {
    eventHour = 0; 
}
