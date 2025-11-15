





const initialTransactions = [
    
  {
    "id": 1,
    "description": "Покупка продуктов в 'Перекресток'",
    "amount": -1850,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-11-04"
  },
  {
    "id": 2,
    "description": "Зарплата за октябрь",
    "amount": 75000,
    "type": "income",
    "category": "Зарплата",
    "currency": "RUB",
    "date": "2025-11-03"
  },
  {
    "id": 3,
    "description": "Обед в кафе 'Уют'",
    "amount": -720,
    "type": "expense",
    "category": "Питание вне дома",
    "currency": "RUB",
    "date": "2025-11-03"
  },
  {
    "id": 4,
    "description": "Оплата мобильной связи",
    "amount": -450,
    "type": "expense",
    "category": "Связь",
    "currency": "RUB",
    "date": "2025-11-02"
  },
  {
    "id": 5,
    "description": "Билеты в кино",
    "amount": -900,
    "type": "expense",
    "category": "Развлечения",
    "currency": "RUB",
    "date": "2025-11-01"
  },
  {
    "id": 6,
    "description": "Возврат долга от Ивана С.",
    "amount": 5000,
    "type": "income",
    "category": "Прочее",
    "currency": "RUB",
    "date": "2025-10-31"
  },
  {
    "id": 7,
    "description": "Покупка лекарств в 'Аптека-366'",
    "amount": -1200,
    "type": "expense",
    "category": "Здоровье",
    "currency": "RUB",
    "date": "2025-10-30"
  },
  {
    "id": 8,
    "description": "Заправка автомобиля (бензин)",
    "amount": -2300,
    "type": "expense",
    "category": "Транспорт",
    "currency": "RUB",
    "date": "2025-10-29"
  },
  {
    "id": 9,
    "description": "Ужин в ресторане 'Паприка'",
    "amount": -3800,
    "type": "expense",
    "category": "Питание вне дома",
    "currency": "RUB",
    "date": "2025-10-28"
  },
  {
    "id": 10,
    "description": "Ежемесячная аренда квартиры",
    "amount": -35000,
    "type": "expense",
    "category": "Жилье",
    "currency": "RUB",
    "date": "2025-10-27"
  },
  {
    "id": 11,
    "description": "Покупка продуктов в 'Ашан'",
    "amount": -2100,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-10-26"
  },
  {
    "id": 12,
    "description": "Подписка на Netflix",
    "amount": -599,
    "type": "expense",
    "category": "Развлечения",
    "currency": "RUB",
    "date": "2025-10-25"
  },
  {
    "id": 13,
    "description": "Оплата коммунальных услуг",
    "amount": -5100,
    "type": "expense",
    "category": "Жилье",
    "currency": "RUB",
    "date": "2025-10-24"
  },
  {
    "id": 14,
    "description": "Продажа старых книг",
    "amount": 1500,
    "type": "income",
    "category": "Прочее",
    "currency": "RUB",
    "date": "2025-10-23"
  },
  {
    "id": 15,
    "description": "Стрижка в парикмахерской",
    "amount": -1500,
    "type": "expense",
    "category": "Уход за собой",
    "currency": "RUB",
    "date": "2025-10-22"
  },
  {
    "id": 16,
    "description": "Кофе с собой",
    "amount": -250,
    "type": "expense",
    "category": "Питание вне дома",
    "currency": "RUB",
    "date": "2025-10-21"
  },
  {
    "id": 17,
    "description": "Покупка новой рубашки",
    "amount": -3500,
    "type": "expense",
    "category": "Одежда",
    "currency": "RUB",
    "date": "2025-10-20"
  },
  {
    "id": 18,
    "description": "Пополнение проездного билета",
    "amount": -1970,
    "type": "expense",
    "category": "Транспорт",
    "currency": "RUB",
    "date": "2025-10-19"
  },
  {
    "id": 19,
    "description": "Покупка продуктов на рынке",
    "amount": -1400,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-10-18"
  },
  {
    "id": 20,
    "description": "Урок английского языка",
    "amount": -1800,
    "type": "expense",
    "category": "Образование",
    "currency": "RUB",
    "date": "2025-10-17"
  },
  {
    "id": 21,
    "description": "Подарок на день рождения",
    "amount": -4000,
    "type": "expense",
    "category": "Подарки",
    "currency": "RUB",
    "date": "2025-10-16"
  },
  {
    "id": 22,
    "description": "Дивиденды по акциям",
    "amount": 2800,
    "type": "income",
    "category": "Инвестиции",
    "currency": "RUB",
    "date": "2025-10-15"
  },
  {
    "id": 23,
    "description": "Ремонт обуви",
    "amount": -700,
    "type": "expense",
    "category": "Прочее",
    "currency": "RUB",
    "date": "2025-10-14"
  },
  {
    "id": 24,
    "description": "Покупка продуктов в 'Магнит'",
    "amount": -950,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-10-13"
  },
  {
    "id": 25,
    "description": "Обед в столовой",
    "amount": -350,
    "type": "expense",
    "category": "Питание вне дома",
    "currency": "RUB",
    "date": "2025-10-12"
  },
  {
    "id": 26,
    "description": "Взнос по кредиту",
    "amount": -12000,
    "type": "expense",
    "category": "Финансы",
    "currency": "RUB",
    "date": "2025-10-11"
  },
  {
    "id": 27,
    "description": "Покупка канцелярии",
    "amount": -600,
    "type": "expense",
    "category": "Образование",
    "currency": "RUB",
    "date": "2025-10-10"
  },
  {
    "id": 28,
    "description": "Такси до аэропорта",
    "amount": -1500,
    "type": "expense",
    "category": "Транспорт",
    "currency": "RUB",
    "date": "2025-10-09"
  },
  {
    "id": 29,
    "description": "Подработка (фриланс)",
    "amount": 15000,
    "type": "income",
    "category": "Дополнительный доход",
    "currency": "RUB",
    "date": "2025-10-08"
  },
  {
    "id": 30,
    "description": "Покупка продуктов в 'Лента'",
    "amount": -3100,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-10-07"
  },
  {
    "id": 31,
    "description": "Посещение музея",
    "amount": -600,
    "type": "expense",
    "category": "Развлечения",
    "currency": "RUB",
    "date": "2025-10-06"
  },
  {
    "id": 32,
    "description": "Оплата интернета",
    "amount": -500,
    "type": "expense",
    "category": "Связь",
    "currency": "RUB",
    "date": "2025-10-05"
  },
  {
    "id": 33,
    "description": "Ужин дома (доставка)",
    "amount": -1100,
    "type": "expense",
    "category": "Питание вне дома",
    "currency": "RUB",
    "date": "2025-10-04"
  },
  {
    "id": 34,
    "description": "Покупка футболки",
    "amount": -1800,
    "type": "expense",
    "category": "Одежда",
    "currency": "RUB",
    "date": "2025-10-03"
  },
  {
    "id": 35,
    "description": "Покупка продуктов в 'ВкусВилл'",
    "amount": -1300,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-10-02"
  },
  {
    "id": 36,
    "description": "Занятие йогой",
    "amount": -800,
    "type": "expense",
    "category": "Здоровье",
    "currency": "RUB",
    "date": "2025-10-01"
  },
  {
    "id": 37,
    "description": "Зарплата за сентябрь",
    "amount": 75000,
    "type": "income",
    "category": "Зарплата",
    "currency": "RUB",
    "date": "2025-09-30"
  },
  {
    "id": 38,
    "description": "Обед в кафе 'Вкусно'",
    "amount": -680,
    "type": "expense",
    "category": "Питание вне дома",
    "currency": "RUB",
    "date": "2025-09-29"
  },
  {
    "id": 39,
    "description": "Покупка продуктов в 'Пятерочка'",
    "amount": -1150,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-09-28"
  },
  {
    "id": 40,
    "description": "Поход в театр",
    "amount": -2500,
    "type": "expense",
    "category": "Развлечения",
    "currency": "RUB",
    "date": "2025-09-27"
  },
  {
    "id": 41,
    "description": "Пополнение счета на телефоне",
    "amount": -450,
    "type": "expense",
    "category": "Связь",
    "currency": "RUB",
    "date": "2025-09-26"
  },
  {
    "id": 42,
    "description": "Покупка обуви",
    "amount": -7000,
    "type": "expense",
    "category": "Одежда",
    "currency": "RUB",
    "date": "2025-09-25"
  },
  {
    "id": 43,
    "description": "Оплата за бензин",
    "amount": -2400,
    "type": "expense",
    "category": "Транспорт",
    "currency": "RUB",
    "date": "2025-09-24"
  },
  {
    "id": 44,
    "description": "Ужин в суши-баре",
    "amount": -2200,
    "type": "expense",
    "category": "Питание вне дома",
    "currency": "RUB",
    "date": "2025-09-23"
  },
  {
    "id": 45,
    "description": "Ежемесячная аренда квартиры",
    "amount": -35000,
    "type": "expense",
    "category": "Жилье",
    "currency": "RUB",
    "date": "2025-09-22"
  },
  {
    "id": 46,
    "description": "Покупка продуктов в 'Перекресток'",
    "amount": -1700,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-09-21"
  },
  {
    "id": 47,
    "description": "Курсы повышения квалификации",
    "amount": -10000,
    "type": "expense",
    "category": "Образование",
    "currency": "RUB",
    "date": "2025-09-20"
  },
  {
    "id": 48,
    "description": "Получение налогового вычета",
    "amount": 12000,
    "type": "income",
    "category": "Прочее",
    "currency": "RUB",
    "date": "2025-09-19"
  },
  {
    "id": 49,
    "description": "Визит к стоматологу",
    "amount": -3000,
    "type": "expense",
    "category": "Здоровье",
    "currency": "RUB",
    "date": "2025-09-18"
  },
  {
    "id": 50,
    "description": "Кофе и круассан",
    "amount": -300,
    "type": "expense",
    "category": "Питание вне дома",
    "currency": "RUB",
    "date": "2025-09-17"
  },
  {
    "id": 51,
    "description": "Покупка продуктов в 'Ашан'",
    "amount": -2300,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-09-16"
  },
  {
    "id": 52,
    "description": "Оплата за электричество",
    "amount": -1200,
    "type": "expense",
    "category": "Жилье",
    "currency": "RUB",
    "date": "2025-09-15"
  },
  {
    "id": 53,
    "description": "Покупка билетов на поезд",
    "amount": -4500,
    "type": "expense",
    "category": "Транспорт",
    "currency": "RUB",
    "date": "2025-09-14"
  },
  {
    "id": 54,
    "description": "Заказ еды на дом",
    "amount": -1500,
    "type": "expense",
    "category": "Питание вне дома",
    "currency": "RUB",
    "date": "2025-09-13"
  },
  {
    "id": 55,
    "description": "Покупка книги",
    "amount": -950,
    "type": "expense",
    "category": "Развлечения",
    "currency": "RUB",
    "date": "2025-09-12"
  },
  {
    "id": 56,
    "description": "Взнос по кредитной карте",
    "amount": -8000,
    "type": "expense",
    "category": "Финансы",
    "currency": "RUB",
    "date": "2025-09-11"
  },
  {
    "id": 57,
    "description": "Покупка продуктов в 'Магнит'",
    "amount": -1050,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-09-10"
  },
  {
    "id": 58,
    "description": "Подарок коллеге",
    "amount": -1500,
    "type": "expense",
    "category": "Подарки",
    "currency": "RUB",
    "date": "2025-09-09"
  },
  {
    "id": 59,
    "description": "Подработка (репетиторство)",
    "amount": 7000,
    "type": "income",
    "category": "Дополнительный доход",
    "currency": "RUB",
    "date": "2025-09-08"
  },
  {
    "id": 60,
    "description": "Оплата интернета",
    "amount": -500,
    "type": "expense",
    "category": "Связь",
    "currency": "RUB",
    "date": "2025-09-07"
  },
  {
    "id": 61,
    "description": "Покупка продуктов в 'Лента'",
    "amount": -2800,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-09-06"
  },
  {
    "id": 62,
    "description": "Билеты в зоопарк",
    "amount": -1400,
    "type": "expense",
    "category": "Развлечения",
    "currency": "RUB",
    "date": "2025-09-05"
  },
  {
    "id": 63,
    "description": "Оплата детского сада",
    "amount": -6000,
    "type": "expense",
    "category": "Образование",
    "currency": "RUB",
    "date": "2025-09-04"
  },
  {
    "id": 64,
    "description": "Покупка куртки",
    "amount": -8500,
    "type": "expense",
    "category": "Одежда",
    "currency": "RUB",
    "date": "2025-09-03"
  },
  {
    "id": 65,
    "description": "Ремонт компьютера",
    "amount": -4000,
    "type": "expense",
    "category": "Прочее",
    "currency": "RUB",
    "date": "2025-09-02"
  },
  {
    "id": 66,
    "description": "Покупка продуктов в 'ВкусВилл'",
    "amount": -1500,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-09-01"
  },
  {
    "id": 67,
    "description": "Зарплата за август",
    "amount": 75000,
    "type": "income",
    "category": "Зарплата",
    "currency": "RUB",
    "date": "2025-08-31"
  },
  {
    "id": 68,
    "description": "Обед в кафе 'Уют'",
    "amount": -750,
    "type": "expense",
    "category": "Питание вне дома",
    "currency": "RUB",
    "date": "2025-08-30"
  },
  {
    "id": 69,
    "description": "Покупка продуктов в 'Пятерочка'",
    "amount": -900,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-08-29"
  },
  {
    "id": 70,
    "description": "Билеты на концерт",
    "amount": -3000,
    "type": "expense",
    "category": "Развлечения",
    "currency": "RUB",
    "date": "2025-08-28"
  },
  {
    "id": 71,
    "description": "Оплата за воду",
    "amount": -800,
    "type": "expense",
    "category": "Жилье",
    "currency": "RUB",
    "date": "2025-08-27"
  },
  {
    "id": 72,
    "description": "Покупка летнего платья",
    "amount": -4000,
    "type": "expense",
    "category": "Одежда",
    "currency": "RUB",
    "date": "2025-08-26"
  },
  {
    "id": 73,
    "description": "Заправка автомобиля",
    "amount": -2500,
    "type": "expense",
    "category": "Транспорт",
    "currency": "RUB",
    "date": "2025-08-25"
  },
  {
    "id": 74,
    "description": "Ужин в пиццерии",
    "amount": -1900,
    "type": "expense",
    "category": "Питание вне дома",
    "currency": "RUB",
    "date": "2025-08-24"
  },
  {
    "id": 75,
    "description": "Ежемесячная аренда квартиры",
    "amount": -35000,
    "type": "expense",
    "category": "Жилье",
    "currency": "RUB",
    "date": "2025-08-23"
  },
  {
    "id": 76,
    "description": "Покупка продуктов в 'Перекресток'",
    "amount": -2000,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-08-22"
  },
  {
    "id": 77,
    "description": "Консультация врача",
    "amount": -1800,
    "type": "expense",
    "category": "Здоровье",
    "currency": "RUB",
    "date": "2025-08-21"
  },
  {
    "id": 78,
    "description": "Подарок родителям",
    "amount": -5000,
    "type": "expense",
    "category": "Подарки",
    "currency": "RUB",
    "date": "2025-08-20"
  },
  {
    "id": 79,
    "description": "Доход от продажи актива",
    "amount": 25000,
    "type": "income",
    "category": "Инвестиции",
    "currency": "RUB",
    "date": "2025-08-19"
  },
  {
    "id": 80,
    "description": "Покупка продуктов в 'Ашан'",
    "amount": -1600,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-08-18"
  },
  {
    "id": 81,
    "description": "Подписка на онлайн-курс",
    "amount": -2500,
    "type": "expense",
    "category": "Образование",
    "currency": "RUB",
    "date": "2025-08-17"
  },
  {
    "id": 82,
    "description": "Поездка на такси",
    "amount": -650,
    "type": "expense",
    "category": "Транспорт",
    "currency": "RUB",
    "date": "2025-08-16"
  },
  {
    "id": 83,
    "description": "Обед в бизнес-центре",
    "amount": -450,
    "type": "expense",
    "category": "Питание вне дома",
    "currency": "RUB",
    "date": "2025-08-15"
  },
  {
    "id": 84,
    "description": "Взнос по ипотеке",
    "amount": -20000,
    "type": "expense",
    "category": "Финансы",
    "currency": "RUB",
    "date": "2025-08-14"
  },
  {
    "id": 85,
    "description": "Покупка продуктов в 'Магнит'",
    "amount": -850,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-08-13"
  },
  {
    "id": 86,
    "description": "Покупка солнцезащитных очков",
    "amount": -1500,
    "type": "expense",
    "category": "Уход за собой",
    "currency": "RUB",
    "date": "2025-08-12"
  },
  {
    "id": 87,
    "description": "Дополнительный заработок",
    "amount": 9000,
    "type": "income",
    "category": "Дополнительный доход",
    "currency": "RUB",
    "date": "2025-08-11"
  },
  {
    "id": 88,
    "description": "Пополнение мобильной связи",
    "amount": -500,
    "type": "expense",
    "category": "Связь",
    "currency": "RUB",
    "date": "2025-08-10"
  },
  {
    "id": 89,
    "description": "Покупка продуктов в 'Лента'",
    "amount": -3200,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-08-09"
  },
  {
    "id": 90,
    "description": "Посещение аквапарка",
    "amount": -2800,
    "type": "expense",
    "category": "Развлечения",
    "currency": "RUB",
    "date": "2025-08-08"
  },
  {
    "id": 91,
    "description": "Ремонт сантехники",
    "amount": -3500,
    "type": "expense",
    "category": "Жилье",
    "currency": "RUB",
    "date": "2025-08-07"
  },
  {
    "id": 92,
    "description": "Покупка кроссовок",
    "amount": -6000,
    "type": "expense",
    "category": "Одежда",
    "currency": "RUB",
    "date": "2025-08-06"
  },
  {
    "id": 93,
    "description": "Покупка билетов на автобус",
    "amount": -1200,
    "type": "expense",
    "category": "Транспорт",
    "currency": "RUB",
    "date": "2025-08-05"
  },
  {
    "id": 94,
    "description": "Ужин в ресторане 'Восток'",
    "amount": -4500,
    "type": "expense",
    "category": "Питание вне дома",
    "currency": "RUB",
    "date": "2025-08-04"
  },
  {
    "id": 95,
    "description": "Покупка продуктов в 'ВкусВилл'",
    "amount": -1400,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-08-03"
  },
  {
    "id": 96,
    "description": "Страхование автомобиля",
    "amount": -15000,
    "type": "expense",
    "category": "Транспорт",
    "currency": "RUB",
    "date": "2025-08-02"
  },
  {
    "id": 97,
    "description": "Покупка витаминов",
    "amount": -900,
    "type": "expense",
    "category": "Здоровье",
    "currency": "RUB",
    "date": "2025-08-01"
  },
  {
    "id": 98,
    "description": "Зарплата за июль",
    "amount": 75000,
    "type": "income",
    "category": "Зарплата",
    "currency": "RUB",
    "date": "2025-07-31"
  },
  {
    "id": 99,
    "description": "Обед в кафе 'Вкусно'",
    "amount": -600,
    "type": "expense",
    "category": "Питание вне дома",
    "currency": "RUB",
    "date": "2025-07-30"
  },
  {
    "id": 100,
    "description": "Покупка продуктов в 'Пятерочка'",
    "amount": -1100,
    "type": "expense",
    "category": "Продукты",
    "currency": "RUB",
    "date": "2025-07-29"
  }
]



export default initialTransactions;