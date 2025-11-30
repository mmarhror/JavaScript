function letterSpaceNumber(text) {
  let query = /[a-zA-Z]\s[\d](?![\w])/g;
  return text.match(query) || [];
}
