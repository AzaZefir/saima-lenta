export const questions = [
  {
    title: "HTML – это",
    variants: ["Скриптовый язык", "Библиотека гипертекста", " Язык разметки"],
    correct: 2,
  },
  {
    title: "Обязательно ли использование тэгов <html> … </html>?",
    variants: [
      "Да, если HTML-документ создается в блокноте или другом текстовом редакторе. В специальном компиляторе HTML эти тэги можно не использовать",
      "Да, без них браузер не распознает HTML-документ",
      "Не обязательно",
    ],
    correct: 1,
  },
  {
    title: "Расшифруйте аббревиатуру HTML",
    variants: [
      "HyperText Markup Language",
      "HeadText Modulation Language",
      "HeadingText Mode Language",
    ],
    correct: 0,
  },
  {
    title: "Как добавить текст всплывающей подсказки при наведении на ссылку?",
    variants: [
      "С помощью атрибута <title>",
      "С помощью атрибута <alt>",
      "С помощью атрибута <placeholder>",
    ],
    correct: 0,
  },
  {
    title: "Для чего используется атрибут alt в теге <img/> ?",
    variants: [
      "Используется для перехода на другую страницу",
      "Используется для указания пути к картинке",
      "Используется для альтернативного добавления названия или описания",
    ],
    correct: 2,
  },
  {
    title: "Опишите разницу между тегами <p>, <div> , <span>",
    variants: [
      "<p> нужен для создания абзаца, <div> для создания блока, <span> используется как строчный тег",
      "<p> используется как строчный тег, <div> для создания блока, <span> нужен для создания абзаца",
      "<p> нужен для создания абзаца, <div> используется как строчный тег, <span> для создания блока",
    ],
    correct: 0,
  },
  {
    title: "Как сделать чтобы ссылка сайта открывалась в новом окне?",
    variants: [
      "Через  атрибут target",
      "Указать в <src> адрес ссылки",
      "Указать в <target> адрес ссылки",
    ],
    correct: 0,
  },
  {
    title:
      "Петру надо сделать нумерованный список, какой из тегов ему надо использовать:",
    variants: ["<list>", "<ul>", "<ol>"],
    correct: 2,
  },
  {
    title:
      "Василию требуется вывести на страницу код, который он написал на языке JavaScript. Какой тег для этого ему необходимо использовать?",
    variants: ["<code>", "<script>", "<pre>"],
    correct: 0,
  },
  {
    title: "Какого тега НЕ существует:",
    variants: ["<phone>", "<pre>", "<address>"],
    correct: 0,
  },
  {
    title: "Какой из представленных вариантов является валидным",
    variants: [
      '<img src="foto.jpg" title="Изображение" />',
      '<img src="foto.jpg" alt="Изображение" />',
      '<img src="foto.jpg" alt="Изображение">',
    ],
    correct: 1,
  },
  {
    title: "Как правильно задать ссылку на адрес электронной почты:",
    variants: [
      '<a href="myrusakov @gmail.com"> Написать</a>',
      '<a href="email:myrusakov @gmail.com"> Написать</a>',
      '<a href="mailto:myrusakov @gmail.com"> Написать</a>',
    ],
    correct: 2,
  },
  {
    title:
      "Какой тег нужно добавить для переноса строки, сохранив при этом валидность HTML5?",
    variants: ["<hr>", "<br>", "<br />"],
    correct: 1,
  },
  {
    title:
      "Напишите код HTML, который бы создавал кнопку отправки заполненной формы. Имя кнопки – ОК.",
    variants: [
      '<input type="ОК" value="Submit"/>',
      '<p> input type="submit" value="OK"< /p>',
      '<input type="submit" value="ОК"/>',
    ],
    correct: 2,
  },
  {
    title:
      "Какой тэг при создании страницы добавляет имя страницы, которое будет отображаться в строке заголовка в браузере пользователя?",
    variants: [
      "<title> … </title>",
      "<header> … </header>",
      "<body> … </body>",
    ],
    correct: 0,
  },
  {
    title: "Что содержит в себе атрибут href?",
    variants: [
      "Имя страницы, на которую произойдет перенаправление",
      "URL страницы, на которую произойдет перенаправление",
      "Указание на то, где будет открываться новая страница: в том же или новом окне",
    ],
    correct: 1,
  },
  {
    title: "Какие из перечисленных тэгов относятся к созданию таблицы?",
    variants: [
      "<ul> <li> <tr> <td>",
      "<header> <body> <footer>",
      "<table> <tr> <td>",
    ],
    correct: 2,
  },
  {
    title: "Укажите тэг, который соответствует элементу списка:",
    variants: ["<ol>", "<li>", "<ul>"],
    correct: 1,
  },
  {
    title: "Разница между атрибутами id и class? ",
    variants: [
      "class указывает на определенный элемент, id на группу элементов",
      "Id указывает на определенный элемент, class на группу элементов",
      "нет разницы",
    ],
    correct: 1,
  },
  {
    title:
      "Какое значение следует задать атрибуту type, чтобы оно превращало входной тэг в форму отправки?",
    variants: ["Submit", "Checkbox", "RadioButton"],
    correct: 0,
  },
  {
    title: "Выберите верное утверждение.",
    variants: [
      "В HTML цвета задаются комбинацией значений двоичной системы исчисления: 0 или 1",
      "В HTML цвета задаются комбинацией значений шестнадцатеричной системы исчисления: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, A, B, C, D, E, F",
      "В HTML цвета задаются комбинацией значений восьмеричной системы исчисления: 0, 1, 2, 3, 4, 5, 6, 7",
    ],
    correct: 1,
  },
  {
    title: "Какие тэги делают шрифт текста жирным",
    variants: ["<ins> и <del>", "<li> и <ul>", "<b> и <strong>"],
    correct: 2,
  },
  {
    title: "Какие тэги используются для определения заголовков?",
    variants: ["Heading", "Header", "h1-h6"],
    correct: 2,
  },
  {
    title: "Комментарии в HTML задаются следующим образом:",
    variants: [
      "<! -- Your comment -->",
      "<! -- Your comment --!>",
      "<!p> Your comment </!p>",
    ],
    correct: 0,
  },
  {
    title: "Укажите, какой элемент HTML5 отвечает за воспроизведение видео",
    variants: ["<video>", "<media>", "<movie>"],
    correct: 0,
  },
  {
    title: "Какой тэг содержит навигацию?",
    variants: ["<metanav>", "<geo>", "<nav>"],
    correct: 2,
  },
  {
    title: "Какой атрибут позволяет объединить ячейки таблицы по вертикали?",
    variants: ["Union", "Colspan", "Rowspan"],
    correct: 2,
  },
  {
    title: "В HTML не существует … тэгов.",
    variants: ["Одиночных", "Парных", "Тройных"],
    correct: 2,
  },
  {
    title: "При создании сайтов используют кодировку:",
    variants: ["UTF8", "UTF-32", "ASCII"],
    correct: 0,
  },
  {
    title: "HTML-документ может иметь расширения:",
    variants: [".html", ".xml", ".txt"],
    correct: 0,
  },
  {
    title: "Укажите корректную запись для создания чек-бокса:",
    variants: [
      "<input checkbox>",
      "<type input=”checkbox”/>",
      "<input type=”checkbox”>",
    ],
    correct: 2,
  },
  {
    title:
      "Какой атрибут HTML указывает альтернативный текст для изображения, если данное изображение не отобразится?",
    variants: ["imgalt", "title", "alt"],
    correct: 2,
  },
  {
    title: "HTML-тэг, позволяющий воспроизводить аудиозаписи – это:",
    variants: ["<music>", "<audio>", "<sound>"],
    correct: 1,
  },
  {
    title: "Все input теги стоит записывать в теге...",
    variants: ["fields", "table", "form"],
    correct: 2,
  },
  {
    title: "Что не так в коде? <img href='/img/test.png' alt=''>",
    variants: [
      "Путь к изображению указан не полностью ",
      "Вместо href необходимо прописывать src",
      "Нужен закрывающий тег img",
    ],
    correct: 1,
  },
  {
    title: "Какого поля input не существует?",
    variants: ["input type='color'", "input type='name'", "input type='reset'"],
    correct: 1,
  },
  {
    title: "Где верно записан DOCTYPE для HTML5 версии?",
    variants: ["<!DOCTYPE html5>", "<DOCTYPE html>", "<!DOCTYPE html>"],
    correct: 2,
  },
  {
    title: "Где правильно использовать тег title?",
    variants: ["в теге body", "в теге head", "в теге footer"],
    correct: 1,
  },
  {
    title: "При помощи какого тега можно создать ссылку в документе?",
    variants: ["<a>", "<link>", "<p>"],
    correct: 0,
  },
  {
    title: "Какой атрибут используется для определения URL-адреса в ссылке?",
    variants: ["alt", "name", "href"],
    correct: 2,
  },
  {
    title: "Элемент div является строчным или блочным элементом?",
    variants: [
      "является как строчным, так и блочным элементом",
      "строчным",
      "блочным",
    ],
    correct: 2,
  },
  {
    title: "Для чего предназначен тег <doctype>?",
    variants: [
      "для указания версии HTML, которая используется в документе",
      "для прикрепления в форме документов с типом .doc",
      "тег специально введён для медицинских сайтов для указания специальности доктора",
    ],
    correct: 0,
  },
  {
    title: "Какое значение атрибута type указывается для поля-галочки в форме?",
    variants: ["name", "checkbox", "radio"],
    correct: 1,
  },
  {
    title: "Как выглядит тег <form> на странице?",
    variants: [
      "тег <form> представляет из себя поле для ввода текста",
      "тег <form> не имеет собственного графического представления - это контейнер для других элементов",
      "тег <form> не имеет собственного графического представления - это контейнер для текста",
    ],
    correct: 1,
  },
  {
    title: "Укажите свойство стиля position:",
    variants: ["top", "fixed", "block"],
    correct: 1,
  },
  {
    title: "Каким псевдоклассом можно обратиться к каждому второму элементу?",
    variants: [":second-child()", ":nth-child(2)", ":nth-child(2n)"],
    correct: 2,
  },
  {
    title: "Какой стиль отвечает за внешний отступ от элемента?",
    variants: ["outline", "padding", "margin"],
    correct: 2,
  },
  {
    title: "Какой стиль отвечает за прозрачность?",
    variants: ["z-index", "rgb", "opacity"],
    correct: 2,
  },
  {
    title:
      "Какой псевдокласс нужно использовать для описания дополнительных стилей при наведении на элемент?",
    variants: ["hover", "focus", "active"],
    correct: 0,
  },
  {
    title: "Укажите устаревшие тэги для HTML5?",
    variants: [
      "<ul>, <audio>, <pre>",
      "<applet>, <blink>, <u>",
      "<code>, <s>, <embed>",
    ],
    correct: 1,
  },
  {
    title:
      "Укажите правильный синтаксис CSS для выделения всех элементов <p> жирным шрифтом?",
    variants: [
      "p {font-weight:bold;}",
      "p {text-size:bold;}",
      "<p style='font-size:bold;'>",
    ],
    correct: 2,
  },
  {
    title:
      "Какое максимальное одновременное количество значений может быть у свойства border-radius?",
    variants: ["8", "2", "4"],
    correct: 2,
  },
  {
    title:
      "Какой порядок следования отступов у свойства padding: 10px 20px 30px?",
    variants: [
      "сверху, слева и снизу, справа",
      "слева, сверху и снизу, справа",
      "сверху, справа и слева, снизу",
    ],
    correct: 2,
  },
  {
    title: "Какое из значений свойств display делает HTML-элемент блочным?",
    variants: ["inline", "block", "inline-block"],
    correct: 1,
  },
  {
    title:
      "Какие из CSS-селекторов являются селекторами по атрибуту id HTML-элемента?",
    variants: [".div", "div", "#div"],
    correct: 2,
  },
  {
    title: "Как расшифровывается CSS?",
    variants: [
      "Common Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
    ],
    correct: 1,
  },
  {
    title: "Выберите синтаксически корректное CSS правило:",
    variants: [
      "div:[font_size-2em]",
      "div [font-size:2em]",
      "div {font-size:2em}",
    ],
    correct: 2,
  },
  {
    title: "Укажите CSS свойство позволяющее устанавливать размер шрифта?",
    variants: ["font-weight", "font-size", "size"],
    correct: 1,
  },
  {
    title:
      "Какой селектор позволяет выбрать все элементы div имеющие атрибут id='wrap'?",
    variants: ["div id.wrap", "div#wrap", "div.wrap"],
    correct: 1,
  },
  {
    title: "Какое из этих значений НЕ может быть значением для font-size?",
    variants: ["50%", "4", "2mm"],
    correct: 1,
  },
  {
    title:
      "Какая строка задает изображение для фона и повторяет его по вертикали?",
    variants: [
      "background-image: url(images/back.png) repeat-y;",
      "background: url(images/back.png) repeat-x;",
      "background: url(images/back.png) repeat-y;",
    ],
    correct: 2,
  },
  {
    title:
      "Какое свойство нужно добавить в тег img, чтобы получить тень внутри картинки?",
    variants: [
      "box-shadow: inset 0 0 5px #000;",
      "box-shadow: 0 0 5px #000;",
      "img-shadow: inset 5px #000;",
    ],
    correct: 0,
  },
  {
    title: "Какое значение НЕ может быть у border-style?",
    variants: ["dotted", "inset", "color"],
    correct: 2,
  },
  {
    title: "Как правильно писать комментарии в CSS файле?",
    variants: ["*** Комментарий ***", " /* Комментарий */", "// Комментарий"],
    correct: 1,
  },
  {
    title:
      "Как правильно задать тег, который будет описывать класс стиля для элемента div?",
    variants: ["#class", ".class", "div:class"],
    correct: 1,
  },
  {
    title: "Как объявить медиа запрос?",
    variants: ["media(){ }", ".media(){ }", "@media(){ }"],
    correct: 2,
  },
  {
    title: "Как задать цвет шрифту?",
    variants: ["font: #FF0000;", "font-color: #FF0000;", "color: red;"],
    correct: 2,
  },
  {
    title:
      "К какому селектору нужно применить свойство margin, чтобы изменить отступы на всей странице?",
    variants: ["html", "body", "head"],
    correct: 1,
  },
  {
    title:
      "Для чего используется символ плюса между селекторами (например, P + B { /* style */ })?",
    variants: [
      "Для управления стилем соседних элементов",
      "Для объединения стилей",
      "Для задания общих правил стиля",
    ],
    correct: 0,
  },
  {
    title:
      "Как при помощи CSS можно создать такую рамку вокруг элемента: Верхняя граница = 7px, Нижняя граница = 3px, Левая граница = 14px, Правая граница = 8px",
    variants: [
      "border-width:7px 8px 3px 14px;",
      "border-width:3px 14px 7px 8px;",
      "border-width:7px 14px 3px 8px;",
    ],
    correct: 0,
  },
  {
    title:
      "Необходимо задать цвет фона у текстового поля. Какой стиль для этой цели подойдет?",
    variants: [
      "input[type='textfield'] { background: #acdacc; }",
      "input[type='textarea'] { background: #acdacc; }",
      "input[type='text'] { background: #acdacc; }",
    ],
    correct: 1,
  },
  {
    title: "Как выбрать все элементы p внутри элемента div?",
    variants: ["div p", "div + p", "div > p"],
    correct: 0,
  },
  {
    title: "Какой правильный синтаксис CSS?",
    variants: [
      "{body;color:black;}",
      "{body:color=black;}",
      "body {color: black;}",
    ],
    correct: 2,
  },
  {
    title: "Как правильно группировать селекторы?",
    variants: [
      "Разделить каждый селектор знаком /",
      "Разделить каждый селектор запятой",
      "Разделить каждый селектор пробелом",
    ],
    correct: 1,
  },
  {
    title: "Как сделать текст жирным?",
    variants: ["size:bold;", "style:bold;", "font-weight:bold;"],
    correct: 2,
  },
  {
    title: "Укажите правильную ссылку на внешнюю таблицу стилей:",
    variants: [
      "<link rel='stylesheet' href='mystyle.css'>",
      "<style src='mystyle.css'>",
      "<stylesheet>mystyle.css </stylesheet>",
    ],
    correct: 0,
  },
  {
    title: "Какой атрибут используется для определения встроенных стилей?",
    variants: ["style", "styles", "font"],
    correct: 0,
  },
  {
    title: "Можно ли использовать отрицательные значения для свойства padding?",
    variants: ["Да", "Нет", "X"],
    correct: 1,
  },
  {
    title:
      "Где в HTML-документе нужно вставлять ссылки на внешнюю таблицу стилей?",
    variants: ["<aside>", "<body>", "<head>"],
    correct: 2,
  },
  {
    title: "Как добавить цвет фона для всех элементов <h2>?",
    variants: [
      "h2.all {background-color:#FFFFFF;}",
      "h2 {background-color:#FFFFFF;}",
      ".h2>h2 {background-color:#FFFFFF;}",
    ],
    correct: 1,
  },
  {
    title: "Какое свойство CSS определяет размер текста?",
    variants: ["text-size", "font-style", "font-size"],
    correct: 2,
  },
  {
    title:
      "Какой тег HTML используется для определения внутренней таблицы стилей?",
    variants: ["<style>", "<script>", "<css>"],
    correct: 0,
  },
  {
    title: "Как убрать подчеркивание у гиперссылки?",
    variants: [
      "a {underline:none;}",
      "a {text-decoration:no-underline;}",
      "a {text-decoration:none;}",
    ],
    correct: 2,
  },
  {
    title: "Как выбрать элемент с class = 'block'?",
    variants: [".block", "#block", "block"],
    correct: 0,
  },
  {
    title:
      "Укажите правильный синтаксис CSS для выделения всех элементов <p> жирным шрифтом?",
    variants: [
      "p {text-size:bold;}",
      "<p style='font-size:bold;'>",
      "p {font-weight:bold;}",
    ],
    correct: 2,
  },
  {
    title: "Какое значение по умолчанию у свойства position?",
    variants: ["absolute", "relative", "static"],
    correct: 2,
  },
  {
    title: "Какое свойство используется для изменения шрифта элемента?",
    variants: ["font-family", "font-style", "font-size"],
    correct: 0,
  },
  {
    title: "Как выбрать элемент с id = 'block'?",
    variants: ["block", ".block", "#block"],
    correct: 1,
  },
  {
    title:
      "Как сделать так, чтобы каждое слово в тексте начиналось с заглавной буквы?",
    variants: [
      "transform:capitalize",
      "text-style:capitalize",
      "Это нельзя сделать через CSS",
    ],
    correct: 1,
  },
  {
    title: "Как можно изменить правый внешний отступ у элемента?",
    variants: ["padding-right", "border-right", "margin-right"],
    correct: 2,
  },
  {
    title:
      "Какие из вариантов записи свойства background-position сделают отступ сверху 15px, слева 10px?",
    variants: [
      "background-position: left 10px top 15px;",
      "background-position: left 15px;",
      "background-position: 10px 15px 10px 15px",
    ],
    correct: 0,
  },
  {
    title: "Какое свойство влияет на размер фонового изображения?",
    variants: ["background-repeat", "background-size", "background-width"],
    correct: 1,
  },
  {
    title:
      "Какая запись идентична записи @media all and (max-width:800px) { … }?",
    variants: [
      "@media (max-width:800px) { … }",
      "@media all and (orientation: portrait) { … }",
      "@media (all:max-width:800px) { … }",
    ],
    correct: 0,
  },
  {
    title: "Можно задавать margin пикселями? (Например, margin-right: 10px?)",
    variants: ["Да", "Нет", "X"],
    correct: 0,
  },
  {
    title: "Величина 2vw в CSS означает",
    variants: [
      "ширину 2% от видимой части окна",
      "ширину 20px",
      "ширину 20% от видимой части окна",
    ],
    correct: 0,
  },
  {
    title: "Какой из селекторов покрасит второй элемент li?",
    variants: ["li:nth-child(2n+1)", "li:nth-child(2n)", "li:nth-child(2)"],
    correct: 2,
  },
  {
    title:
      "Какой из указанных CSS-селекторов называется универсальным селектором и выбирает любые элементы?",
    variants: ["+", "*", "#all"],
    correct: 1,
  },
  {
    title: "Какое значение установлено по умолчанию для opacity?",
    variants: ["1", "0", "auto"],
    correct: 0,
  },
  {
    title:
      "Какой из перечисленных ниже селекторов имеет самый высокий приоритет?",
    variants: [
      "div#text { color: black; }",
      "#text { color: red; }",
      "div.text { color: yellow; }",
    ],
    correct: 0,
  },
  {
    title:
      "Как сделать так, чтобы каждое слово в тексте начиналось с прописной буквы?",
    variants: [
      "text-transform: uppercase;",
      "Это невозможно в CSS",
      "text-transform: capitalize;",
    ],
    correct: 2,
  },
];
