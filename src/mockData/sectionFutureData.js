import logo from "../assets/img/GPT-3.svg";

export const logot = {
  src: logo,
  alt: "gpt",
};

export const sectionFutureData = {
    title: "Хотите Шагнуть в Будущее Раньше Других?",
    buttonText: "Запросить ранний доступ",
    companyInfo: {
        address: "ул. Профессора Поздеева, 13, к.Г,<br>Пермь, Пермский край, 614013",
        copyright: "Все права защищены"
    },
    columns: [
        {
            title: "Ссылки",
            items: ["Оверсен", "Соц. сети", "Счетчики", "Контакты"],
            type: "links"
        },
        {
            title: "Компания", 
            items: ["Условия использования", "Перс. данные", "Контакты"],
            type: "company"
        },
        {
            title: "Контакты",
            items: [
                "ул. Профессора <br> Поздеева, 13, к.Г, Пермь",
                "+7 (342) 2-198-520", 
                "info@pstu.ru"
            ],
            type: "contacts"
        }
    ]
};

export default sectionFutureData;