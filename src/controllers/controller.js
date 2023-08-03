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
    });
  }

  for (let i = 0; i < req.body.passwordLength; i++) {
    password += randomSet[Math.floor(Math.random() * randomSet.length)];
  }

  res.render('index', {
    message: password,
    params: {
      passwordLength: req.body.passwordLength,
      lowercase: req.body.lowercase ? 'checked' : '',
      uppercase: req.body.uppercase ? 'checked' : '',
      includeNumbers: req.body.includeNumbers ? 'checked' : '',
      includeSymbols: req.body.includeSymbols ? 'checked' : '',
      excludeCharacters: req.body.excludeCharacters,
    },
  });
}
