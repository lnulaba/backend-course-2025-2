// Константи для варіанту 2 - Доходи та витрати банків
const date = "20240801"; // серпень 2024р (формат YYYYMMDD)
const time_period = "m"; // місяць

// Створення URL об'єкта
const url = new URL("https://bank.gov.ua/");

// Встановлення шляху для API
url.pathname = "NBUStatService/v1/statdirectory/banksincexp";

// Додавання параметрів через SearchParams
url.searchParams.append("date", date);
url.searchParams.append("period", time_period);
url.searchParams.append("json", "");

// Виведення URL у консоль
console.log(url.toString());
