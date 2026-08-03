export default function isUrl(text) {

    return /^https?:\/\/[^\s]+$/i.test(text);

}
