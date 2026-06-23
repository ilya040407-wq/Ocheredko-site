# Ocheredko-site

Сайт о настольной игре «Особняки безумия».

## Структура

- `reakt/` — React-фронтенд (Vercel)
- `project/` — Django REST API (Render)

## Деплой

### Render (backend)

| Поле | Значение |
|------|----------|
| Root Directory | `project` |
| Build Command | `pip install -r requirements.txt && python manage.py migrate` |
| Start Command | `gunicorn project.wsgi:application` |

Environment Variables: `SECRET_KEY`, `DEBUG=False`, SMTP (`EMAIL_HOST_USER`, `EMAIL_HOST_PASSWORD`, и т.д.)

### Vercel (frontend)

| Поле | Значение |
|------|----------|
| Root Directory | `reakt` |
| Build Command | `npm install && npm run build` |
| Output Directory | `build` |

Environment Variable:

```
REACT_APP_API_URL=https://ocheredko-site.onrender.com
```

## Локальный запуск

```bash
# Backend
cd project
pip install -r requirements.txt
copy .env.example .env
python manage.py migrate
python manage.py runserver

# Frontend
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
