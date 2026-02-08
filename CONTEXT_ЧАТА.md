# Контекст проекта ev_Counter — для продолжения в новом чате

Краткая выжимка из чата: что сделано, как устроен проект и что может понадобиться.

---

## Что это за проект

**Минимальное мобильное приложение-счётчик** на **React Native** и **Expo**.

- Один экран с крупным числом по центру (начальное значение **0**).
- Кнопка **«+»** — увеличивает на 1.
- Кнопка **«−»** — уменьшает на 1.
- Кнопка **«Сброс»** — сбрасывает значение в 0.
- Тёмная тема (тёмно-синий фон, светлый текст).

---

## Структура проекта

| Файл / папка | Назначение |
|--------------|------------|
| `App.js` | Единственный экран: счётчик и кнопки, стили. |
| `package.json` | Зависимости и скрипты (Expo SDK 54, React 19, React Native 0.81). |
| `app.json` | Конфиг Expo (имя, slug, ориентация, bundle id). |
| `babel.config.js` | Babel с пресетом `babel-preset-expo`. |
| `README.md` | Инструкция по установке и запуску. |

---

## Версии (важно для совместимости)

- **Expo SDK:** 54 (чтобы работало с приложением **Expo Go** на телефоне под SDK 54).
- **React:** 19.1.0  
- **React Native:** 0.81.x  
- **expo-asset**, **expo-status-bar** — подобраны под SDK 54 (через `npx expo install --fix` при необходимости).

Изначально проект был на SDK 52; из-за несовместимости с установленной Expo Go (SDK 54) проект обновили до **SDK 54**.

---

## Что делали по ходу чата

1. **Создали проект с нуля:** `App.js`, `package.json`, `app.json`, `babel.config.js`, `README.md`.
2. **Ошибка «expo-asset cannot be found»** — в `package.json` добавлена зависимость `expo-asset`.
3. **Ошибка «Project is incompatible with this version of Expo Go» (SDK 52 vs 54)** — обновили зависимости до **Expo SDK 54** (expo, react, react-native, expo-asset, babel-preset-expo и т.д.).
4. **Предупреждение про устаревший SafeAreaView** — в коде заменили `SafeAreaView` из `react-native` на `SafeAreaView` из пакета **`react-native-safe-area-context`** в `App.js`. Сам пакет в `package.json` добавлять не получилось (ошибка замены); его нужно доустановить вручную (см. ниже).

---

## Запуск (PowerShell, Windows)

```powershell
cd "d:\AI\Cursor\Curs_Cursor\ev_Counter"
npm install
npx expo start
```

После появления QR-кода — открыть приложение в **Expo Go** на телефоне или нажать `a` (Android) / `i` (iOS) для эмулятора.

При необходимости подтянуть версии пакетов под SDK 54:

```powershell
npx expo install --fix
```

---

## Что может понадобиться в новом чате

1. **Пакет `react-native-safe-area-context`**  
   В `App.js` уже используется импорт:
   `import { SafeAreaView } from 'react-native-safe-area-context';`  
   Если при запуске будет ошибка «cannot find module 'react-native-safe-area-context'», установить:
   ```powershell
   npx expo install react-native-safe-area-context
   ```
   И при необходимости добавить в `package.json` в `dependencies` строку:
   `"react-native-safe-area-context": "~5.0.0"` (или версию, которую подставит `npx expo install`).

2. **Путь к проекту:** `d:\AI\Cursor\Curs_Cursor\ev_Counter`  
   Пользователь на **Windows**, предпочтительный формат команд — **PowerShell**.

3. **Правила пользователя:** отвечать по-русски, примеры команд в формате PowerShell (не bash/Linux).

---

## Итог

Проект — рабочий счётчик на Expo SDK 54. Остаётся при необходимости один раз доустановить `react-native-safe-area-context`, чтобы убрать предупреждение про устаревший `SafeAreaView` и не зависеть от его удаления в будущих версиях React Native.
