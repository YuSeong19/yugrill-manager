# 🔥 YuGrill Manager — Firebase Realtime

## โครงสร้างไฟล์
```
yugrill-app/
├── index.html          ← แอปหลัก
├── firebase.js         ← Firebase config (แก้ตรงนี้)
├── firebase.json       ← Firebase Hosting config
├── database.rules.json ← Database security rules
├── vercel.json         ← Vercel config
├── .gitignore
└── README.md
```

---

## ขั้นตอนการ Setup

### 1. สร้าง Firebase Project
1. ไปที่ [console.firebase.google.com](https://console.firebase.google.com)
2. กด **Add project** → ตั้งชื่อ เช่น `yugrill-manager`
3. เปิด **Realtime Database** → Create Database → เลือก region (Asia)
4. ไปที่ **Project Settings** → **Your apps** → Add Web App
5. Copy `firebaseConfig` ที่ได้

### 2. แก้ไข firebase.js
เปิดไฟล์ `firebase.js` แล้วแทนค่า:
```js
const firebaseConfig = {
  apiKey:            "AIza...",
  authDomain:        "yugrill-manager.firebaseapp.com",
  databaseURL:       "https://yugrill-manager-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "yugrill-manager",
  storageBucket:     "yugrill-manager.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123..."
};
```

### 3. ตั้ง Database Rules
ใน Firebase Console → Realtime Database → Rules:
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

---

## Deploy

### 🔵 Firebase Hosting (แนะนำ)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # เลือก project, public dir = "."
firebase deploy
```

### ⚫ GitHub Pages
1. Push ทั้ง folder ขึ้น GitHub repo
2. Settings → Pages → Source: main branch / root
3. ✅ ได้ URL: `https://username.github.io/yugrill-app`

### 🔺 Vercel
1. Push ขึ้น GitHub
2. ไปที่ [vercel.com](https://vercel.com) → Import Repository
3. Framework: **Other** → Deploy
4. ✅ ได้ URL อัตโนมัติ

---

## ฟีเจอร์ Realtime
- ✅ ข้อมูลรายรับ/รายจ่ายที่เพิ่มใหม่ sync ทุก device ทันที
- ✅ แก้ไข/ลบ รายการ sync realtime
- ✅ ตั้งค่าร้าน/หมวด sync ข้าม device
- ✅ indicator สถานะเชื่อมต่อ (🟡 กำลังเชื่อมต่อ / 🟢 เชื่อมต่อแล้ว / 🔴 ออฟไลน์)
- ✅ ข้อมูล seed (ก.ค.–ต.ค. 2025) อยู่ใน index.html ไม่ต้อง import

---

## หมายเหตุ
- ข้อมูลเดิม (seed data) ฝังใน `index.html` ใช้ได้เลยโดยไม่ต้อง Firebase
- รายการ**ใหม่**ที่เพิ่มจากแอปจะถูกเก็บใน Firebase Realtime Database
- ถ้าไม่ได้ใส่ firebaseConfig แอปจะยังใช้งานได้แต่จะไม่ sync
