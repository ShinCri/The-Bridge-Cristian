function isPalindrome(phrase, ignoreSpaces, ignoreMayus, ignoreAccent) {
  if (ignoreMayus) {
    phrase = phrase.toLowerCase(); // toUpperCase()
  }

  let splittedPhrase = phrase.split('');
  if (ignoreSpaces) {
    splittedPhrase = splittedPhrase.filter(function (character) {
      return character !== ' ';
    });
  }

  if (ignoreAccent) {
    const accents = 'ÈÉÊËÛÙÏÎÀÂÔèéêëûùïîàâôÇçÃãÕõçÇáéíóúýÁÉÍÓÚÝàèìòùÀÈÌÒÙãõñäëïöüÿÄËÏÖÜÃÕÑâêîôûÂÊÎÔÛ'.split();
    const withoutAccents = 'EEEEUUIIAAOeeeeuuiiaaoCcAaOocCaeiouyAEIOUYaeiouAEIOUaonaeiouyAEIOUAONaeiouAEIOU'.split();

    splittedPhrase = splittedPhrase.map(function (letter) {
      const accentsIndex = accents.indexOf(letter);
      if (accentsIndex !== -1) {
        return withoutAccents[accentsIndex];
      }
    });
  }

  const filteredPhrase = splittedPhrase.join('');
  const reversedPhrase = splittedPhrase.reverse().join('');

  return filteredPhrase === reversedPhrase;
}

console.log('ANA', isPalindrome('ANA'));
console.log('PEPE', isPalindrome('PEPE'));
console.log('ATAR A LA RATA / false', isPalindrome('ATAR A LA RATA'));
console.log('ATAR A LA RATA / true', isPalindrome('ATAR A LA RATA', true));
