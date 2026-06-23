# Ocheredko-site

Сайт о настольной игре «Особняки безумия».

## Структура

- `reakt/` — React-фронтенд
- `project/` — Django REST API

## Запуск

### Бэкенд

```bash
cd project
pip install -r requirements.txt
copy .env.example .env
python manage.py migrate
python manage.py runserver
```

### Фронтенд

```bash
cd reakt
npm install
npm start
```

## API

| Метод | URL | Описание |
|-------|-----|----------|
| POST | `/register/` | Регистрация |
| POST | `/login/` | Вход |
| GET | `/profile/` | Профиль |
| POST | `/feedback/` | Обратная связь |
