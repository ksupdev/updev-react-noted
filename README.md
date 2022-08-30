# vscode extension
1. vscode-icon
2. es7/react/..
3. html to jsx
4. color highlight
5. path intellisense
6. matching tag
7. prettier

# customconfig vs code
```
# Edit Emmet Auto-Suggestion Problem (Add in setup JSON)
"emmet.syntaxProfiles": {
    "javascript": "jsx"
},
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
},
"emmet.triggerExpansionOnTab": true,

```

# updev-react-noted
for learning react

- Create project
```
npx create-react-app react-basic
```

- start project
```
cd react-basic
npm start
```

- How to add package

```
you can modify package.json and run 
npm install

```

### Project structure
- node_modules : เก็บ Lib สำหรับ Project
- public : เก็บ file ที่เป็นผลลัพธ์หลังจากเราทำการ Build
- src : เก็บ sourcecode
- package.json : ไฟล์ comfig ของ Project โดยจะมีการบอกด้วยว่ามีการนำ lib อะไรมาใช้บ้าง
- public/index.html : file html ที่เป็นตรวจแสดงผลหลัก
- src/index.js : file ที่จำทำหน้าทีในการนำ component มาแสดงผล
- src/App.js : Root Component/App Component

### Code
- `ReactDOM.createRoot` ใช้สำหรับ Generate virtual dom ซึ่งเราสามารถใช้ tag html ในการสร้าง


