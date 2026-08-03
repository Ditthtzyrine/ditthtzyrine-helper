# ditthtzyrine-helper

<p align="center">

<img src="https://img.shields.io/github/license/ditthtzyrine/ditthtzyrine-helper?style=for-the-badge"/>

<img src="https://img.shields.io/github/stars/ditthtzyrine/ditthtzyrine-helper?style=for-the-badge"/>

<img src="https://img.shields.io/github/forks/ditthtzyrine/ditthtzyrine-helper?style=for-the-badge"/>

<img src="https://img.shields.io/github/issues/ditthtzyrine/ditthtzyrine-helper?style=for-the-badge"/>

</p>

A lightweight helper library for JavaScript, Node.js, WhatsApp Bots, and Telegram Bots.

---

## ✨ Features

- 📡 Fetch JSON
- 📥 Fetch Buffer
- 😴 Sleep
- 🎲 Random Number
- 🆔 Generate ID
- 💾 Format Bytes
- ⏱ Runtime Formatter
- 🔗 URL Validator
- 🔠 Capitalize String

---

## 📦 Installation

```bash
npm install @ditthtzyrine/helper
```

> Coming soon. Currently available via GitHub.

---

## 📖 Example

```js
import {
    fetchJSON,
    generateID,
    runtime
} from "@ditthtzyrine/helper";

const data = await fetchJSON("https://api.github.com");

console.log(generateID());

console.log(runtime(process.uptime()));
```

---

## 📜 License

MIT © Radithya Atha R
console.log(github);

await sleep(1000);

console.log(generateID());

console.log(runtime(process.uptime()));

console.log(formatBytes(1024 * 1024));

console.log(isUrl("https://github.com"));

console.log(capitalize("hello world"));
```

---

## 📚 API

### fetchJSON(url, options)

Fetch JSON data.

```js
const data = await fetchJSON("https://example.com/api");
```

---

### fetchBuffer(url)

Download file as Buffer.

```js
const buffer = await fetchBuffer(imageUrl);
```

---

### sleep(ms)

Pause execution.

```js
await sleep(2000);
```

---

### random(min, max)

Generate random integer.

```js
random(1, 100);
```

---

### generateID(length)

Generate random ID.

```js
generateID(16);
```

---

### runtime(seconds)

Convert seconds into readable format.

```js
runtime(7261);
// 2h 1m 1s
```

---

### formatBytes(bytes)

Convert bytes into human-readable format.

```js
formatBytes(1048576);
// 1.00 MB
```

---

### isUrl(text)

Validate URL.

```js
isUrl("https://github.com");
```

---

### capitalize(text)

Capitalize first character.

```js
capitalize("hello");
// Hello
```

---

## 🤝 Contributing

Pull requests and feature suggestions are welcome.

If you find a bug, please open an issue.

---

## 📄 License

MIT License © Radithya Atha R
