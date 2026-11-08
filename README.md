# hamama.org

האתר של החממה, בעברית ובאנגלית. אתר סטטי שנבנה עם [Astro](https://astro.build) ומתארח בחינם ב-GitHub Pages.

## עריכת תוכן

כל הטקסטים נמצאים בשני קבצים:

- `src/content/he.yaml`: עברית (hamama.org/)
- `src/content/en.yaml`: אנגלית (hamama.org/en/)

כדי לשנות טקסט פותחים את הקובץ ב-GitHub, לוחצים על סמל העיפרון, עורכים את הטקסט שבין המירכאות ושומרים (Commit). האתר מתעדכן לבד תוך כדקה או שתיים.

כמה כללים:
- לא לשנות את הרווחים בתחילת השורות ולא את השמות שלפני הנקודתיים.
- אם הטקסט עצמו מכיל מירכאות כפולות ("), צריך לשים לפניהן `\`. אפשר גם להשתמש במירכאות עבריות (״).
- כשמוסיפים או משנים משהו באחת השפות, כדאי לעדכן גם את השנייה.

## עיצוב

- מבנה הדף: `src/components/Home.astro`
- צבעים וגופנים: `src/styles/global.css`. כל הערכים (צבעים, גדלים, רווחים, צללים, נקודות שבירה 810/1200) נמדדו מאתר ה-Framer המקורי.

## הרצה מקומית

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # בונה את האתר לתיקייה dist/
```

## פרסום

האתר מוגש בכתובת https://hamama.org. אם צריך להגיש אותו מתת-נתיב (למשל github.io/HamamaSite), מגדירים `BASE_PATH` ב-workflow.


כל דחיפה (push) לענף `main` מפעילה את `.github/workflows/deploy.yml`, שבונה את האתר ומפרסם אותו ב-GitHub Pages. הדומיין מוגדר בקובץ `public/CNAME`.

הגדרה חד-פעמית ב-GitHub:
1. Settings ← Pages ← Source: **GitHub Actions**
2. Settings ← Pages ← Custom domain: `hamama.org`, ואחרי שה-DNS מתעדכן לסמן **Enforce HTTPS**

הגדרות DNS ב-GoDaddy:
- רשומות `A` עבור `@`: ‏185.199.108.153, ‏185.199.109.153, ‏185.199.110.153, ‏185.199.111.153
- רשומת `CNAME` עבור `www`: ‏`<github-user-or-org>.github.io`
