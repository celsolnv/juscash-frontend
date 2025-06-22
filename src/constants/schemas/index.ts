import moment from "moment";
import { z } from "zod";

import { statusValuesForValidation, yesOrNoForValidation } from "..";

import masks from "@/utils/masks";

export const status = z.enum(statusValuesForValidation, {
  required_error: "Status é obrigatório."
});

export const yesOrNo = (name: string) => {
  return z.enum(yesOrNoForValidation, {
    required_error: `${name} obrigatório.`
  });
};

export const string = (name: string, g = "o") => {
  return z
    .string({
      required_error: `${name} é obrigatóri${g}.`,
      invalid_type_error: `${name} é obrigatóri${g}`
    })
    .min(1, { message: `${name} deve ter pelo menos 1 caractere.` })
    .max(255, { message: `${name} deve ter no máximo 255 caracteres.` });
};
export const phone = (name: string) => {
  return z.string({ required_error: `${name} é obrigatório.` }).refine(
    (value) => {
      const cleanValue = value.replace(/\D/g, "");
      return cleanValue.length > 10 && cleanValue.length <= 11;
    },
    { message: "Telefone inválido. Deve conter 11 dígitos." }
  );
};
export const cpf = () => {
  return z.string({ required_error: "CPF é obrigatório." }).refine(
    (value) => {
      const cleanValue = value.replace(/\D/g, "");
      return cleanValue.length === 11;
    },
    { message: "CPF inválido." }
  );
};
export const cnpj = (name = "CNPJ") => {
  return z.string({ required_error: `${name} é obrigatório.` }).refine(
    (value) => {
      const cleanValue = value.replace(/\D/g, "");
      return cleanValue.length === 14;
    },
    { message: "CNPJ inválido." }
  );
};
export const stringNotRequired = (name: string) => {
  return z
    .string({ required_error: `${name} é obrigatório.` })
    .max(255, { message: `${name} deve ter no máximo 255 caracteres.` })
    .optional()
    .nullable();
};

export const number = (name: string) => {
  return z.number({ required_error: `${name} é obrigatório.` });
};

export const numberTransform = (name: string, required = true) => {
  return z
    .any({ required_error: `${name} é obrigatório.` })
    .refine(
      (value) => {
        if (!value && required) {
          return false;
        }
        return true;
      },
      { message: "Campo obrigatório" }
    )
    .refine(
      (value) => {
        if (!value && !required) {
          return true;
        }
        if (typeof value === "number") {
          if (!required) return true;
          return !isNaN(value);
        }
        const cleanValue = value?.replace(/\D/g, "");
        return !isNaN(Number(cleanValue));
      },
      { message: "Valor inválido" }
    )
    .transform((value) => {
      if (typeof value === "number") {
        return value;
      }
      const cleanValue = masks.maskIntoNumber(value);
      return cleanValue;
    });
};

export const email = (name: string) => {
  return z
    .string({ required_error: `${name} é obrigatório.` })
    .email({ message: "E-mail inválido." })
    .min(1, { message: `${name} deve ter pelo menos 1 caractere.` })
    .max(255, { message: `${name} deve ter no máximo 255 caracteres.` });
};

export const text = (name: string) => {
  return z
    .string({ required_error: `${name} é obrigatório.` })
    .optional()
    .nullable();
};

export const select = (name: string, g = "o") => {
  return z
    .string({ required_error: `${name} é obrigatóri${g}.` })
    .min(1, { message: `${name} é obrigatóri${g}.` });
};

export const password = z
  .string({ required_error: "Senha é obrigatória" })
  .refine(
    (value) => {
      const hasMinimumLength = value.length >= 8;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

      return hasMinimumLength && hasUpperCase && hasLowerCase && hasSpecialChar;
    },
    {
      message:
        "A senha deve conter pelo menos 8 caracteres, incluindo 1 letra maiúscula, 1 letra minúscula e 1 caractere especial."
    }
  );

export const dateNotFuture = z
  .string({
    required_error: "A data é obrigatória"
  })
  .refine(
    (dateString) => {
      const date = moment(dateString, "YYYY-MM-DD");
      return (
        date.isBefore(moment().startOf("day")) ||
        date.isSame(moment().startOf("day"))
      ); // Verifica se a data não é futura
    },
    {
      message: "A data não pode ser uma data futura"
    }
  );

export const dateOnlyFuture = z
  .string({
    required_error: "A data é obrigatória"
  })
  .refine(
    (dateString) => {
      const date = moment(dateString, "YYYY-MM-DD");
      return date.isAfter(moment().startOf("day")); // Verifica se a data é futura
    },
    {
      message: "A data deve ser uma data futura"
    }
  );

export const dateFutureAllowed = z.string({
  required_error: "A data é obrigatória"
});

export const boolean = (name: string) => {
  return z.boolean({ required_error: `${name} é obrigatório.` });
};

export const money = (name: string) => {
  return z.string({ required_error: `${name} é obrigatório.` }).refine(
    (value) => {
      const cleanValue = value.replace(/\D/g, "");
      return !isNaN(Number(cleanValue));
    },
    { message: "Valor inválido" }
  );
};
