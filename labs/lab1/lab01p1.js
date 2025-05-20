import bob from "lodash"

const holidays = [
  { name: "New Year's Day", date: new Date("2026-01-01") },
  { name: "Christmas", date: new Date("2025-12-25") },
  { name: "Canada Day", date: new Date("2025-07-01") },
  { name: "My Birthday", date: new Date("2026-01-01") },
]


let today = new Date()

holidays.forEach(holiday => {
    const diffrence = holiday.date - today;
    const daystill = ((Math.ceil(diffrence/(1000*60*60*24))))
    console.log (`${holiday.name} is in ${daystill} days`);
    

});

const randomHoliday = bob.sample(holidays);
console.log(randomHoliday.name);

const index_chrismas = bob.findIndex(holidays, { name: "Christmas" });
const index_canada_day = bob.findIndex(holidays, { name: "Canada Day" });

console.log(`Index of Christmas: ${index_chrismas}`);
console.log(`Index of Canada Day: ${index_canada_day}`);

