const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{};:,./<>?';

export function generatePassword(req, res) {
  let password = '';
  let randomSet = '';
  randomSet += req.body.lowercase ? lowercase : '';
  randomSet += req.body.uppercase ? uppercase : '';
  randomSet += req.body.includeNumbers ? numbers : '';
  randomSet += req.body.includeSymbols ? symbols : '';

  // check if user didn't select any character set
  if (!randomSet) {
    return res.render('index', {
      message: 'Please select at least one character set',
      params: { passwordLength: req.body.passwordLength },
    });
  }

  // remove exclude characters
  req.body.excludeCharacters.split('').forEach((char) => {
    randomSet = randomSet.replace(char, '');
  });

  // check if the result of user password condition is empty
  if (!randomSet) {
    return res.render('index', {
      message: 'There is no characters to generate password.',
      params: { passwordLength: req.body.passwordLength },
    });
  }

  for (let i = 0; i < req.body.passwordLength; i++) {
    password += randomSet[Math.floor(Math.random() * randomSet.length)];
  }

  res.render('index', {
    message: password,
    params: {
      passwordLength: req.body.passwordLength,
      lowercase: req.body.lowercase,
      uppercase: req.body.uppercase,
      includeNumbers: req.body.includeNumbers,
      includeSymbols: req.body.includeSymbols,
      excludeCharacters: req.body.excludeCharacters,
    },
  });
}
