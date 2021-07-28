const daysContainer = document.querySelector('#days')
const hoursContainer = document.querySelector('#hours')
const minutesContainer = document.querySelector('#minutes')
const secondsContainer = document.querySelector('#seconds')
const birthdayDate = document.querySelector('#birthdayDate');
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const days = ['Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const date = new Date(2021, 07, 11, 00, 0, 00, 00);
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const month = months[date.getMonth()];
const dayWeek = days[date.getDay()];
const day = date.getDate();

birthdayDate.textContent = `${dayWeek}, ${day} ${month} ${year} ${hours > 9 ? hours : "0" + hours}:${minutes > 9 ? minutes : "0" + minutes} Am`;

function getRemainingTime(date) {
    let milSeconds = date.getTime() - new Date().getTime();
    let daymil = 24 * 60 * 60 * 1000;
    let hourmil = 60 * 60 * 1000;
    let minutemil = 60 * 1000;
    let secondmil = 1000;

    let daysNum = Math.floor(milSeconds / daymil);
    let hoursNum = Math.floor((milSeconds % daymil) / hourmil);
    let minutesNum = Math.floor((milSeconds % hourmil) / minutemil);
    let secondsNum = Math.floor((milSeconds % minutemil) / secondmil);


    daysContainer.textContent = daysNum;
    hoursContainer.textContent = hoursNum;
    minutesContainer.textContent = minutesNum;
    secondsContainer.textContent = secondsNum;

}
window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        getRemainingTime(date);
    }, 1000)

})