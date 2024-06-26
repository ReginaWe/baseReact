// Определение функционального компонента WelcomeMessage
function WelcomeMessage({ name }) {
    // Компонент возвращает JSX, который представляет собой HTML-разметку
    // Если имя не было передано, используем значение по умолчанию "пользователь"
  // Логический оператор || возвращает первый операнд, если он истинный, второй – если первый ложный
    return <h1>Добро пожаловать на наш сайт, { name || "пользователь"}!</h1>;
  }
  
  // Экспорт компонента, чтобы его можно было использовать в других частях приложения
  export default WelcomeMessage;