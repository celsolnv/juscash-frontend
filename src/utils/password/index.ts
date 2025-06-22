export function generate() {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const specialCharacters = /[!@#$%^&*()_+{}[\]:;<>,.?~\\|]/;

  const getRandomChar = (characters: string): string => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  };

  let password =
    getRandomChar(uppercaseLetters) +
    getRandomChar(lowercaseLetters) +
    getRandomChar(specialCharacters.toString());

  for (let i = 0; i < 3; i++) {
    const randomType = Math.floor(Math.random() * 4);
    if (randomType === 0) {
      password += getRandomChar("0123456789");
    } else {
      password += getRandomChar(
        `${uppercaseLetters}${lowercaseLetters}${specialCharacters}`
      );
    }
  }

  const shuffledPassword = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return shuffledPassword;
}
export function hasUpperCase(arg: string): boolean {
  for (let i = 0; i < arg?.length; i++) {
    if (arg[i] >= "A" && arg[i] <= "Z") {
      return true; // Encontrou um caractere maiúsculo
    }
  }
  return false; // Não encontrou nenhum caractere maiúsculo
}
export function hasLowerCase(arg: string): boolean {
  for (let i = 0; i < arg?.length; i++) {
    if (arg[i] >= "a" && arg[i] <= "z") {
      return true; // Encontrou um caractere maiúsculo
    }
  }
  return false; // Não encontrou nenhum caractere maiúsculo
}
export function hasSpecialCaracter(arg: string): boolean {
  for (let i = 0; i < arg?.length; i++) {
    if (/[!@#$%^&*()_+{}[\]:;<>,.?~\\|]/.test(arg[i])) {
      return true; // Encontrou um caractere especial
    }
  }
  return false; // Não encontrou nenhum caractere especial
}
