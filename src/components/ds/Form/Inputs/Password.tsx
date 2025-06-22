/* eslint-disable no-use-before-define */
import { useFormContext } from "react-hook-form";

import { clsx } from "clsx";
import { KeyRound } from "lucide-react";

import { IInputContainerProps, InputContainer } from "./Container";

import { Button, Flex, Grid, Text } from "@/components/ui";
import { PasswordInput } from "@/components/ui/password-input";
import { useManagerForm } from "@/logic/form";
import * as utilsPassword from "@/utils/password";

export interface IInputPasswordProps
  extends Omit<IInputContainerProps, "InputComponent" | "label" | "name">,
    Pick<React.InputHTMLAttributes<HTMLInputElement>, "autoComplete"> {
  hasGenerate?: boolean;
  hasInfo?: boolean;
  label?: string;
  name?: string;
}

export function InputPassword({
  placeholder = "Insira sua senha",
  name = "password",
  label = "Senha *",
  hasGenerate = false,
  hasInfo = false,
  className,
  disabled,
  autoComplete,
  ...rest
}: Readonly<IInputPasswordProps>) {
  const { setValue } = useFormContext();
  const { canEdit, isLoading } = useManagerForm();

  return (
    <Grid
      columns={{ initial: "1", md: "5" }}
      justify="center"
      align="center"
      gap="4"
      className={className}
    >
      <InputContainer
        label={label}
        name={name}
        className={clsx("w-full", {
          "col-span-4": hasGenerate,
          "col-span-5": !hasGenerate
        })}
        {...rest}
        InputComponent={({ field }) => (
          <Flex direction="row">
            <Flex width="100%" gap="4">
              <PasswordInput
                placeholder={placeholder}
                autoComplete={autoComplete}
                loading={isLoading}
                disabled={false}
                {...field}
              />
              {hasInfo && <PasswordVerify password={field.value} />}
            </Flex>
          </Flex>
        )}
      />
      {hasGenerate && (
        <Button
          size={"lg"}
          type="button"
          disabled={!canEdit || disabled}
          className="h-full w-full md:h-auto"
          onClick={() => {
            const password = utilsPassword.generate();
            setValue(name, password);
          }}
        >
          <KeyRound size="14px" />
          Gerar senha
        </Button>
      )}
    </Grid>
  );
}

function PasswordVerify({ password }: Readonly<{ password: string }>) {
  const activeClass = "line-through transition-all duration-300";
  return (
    <div className="mx-2 inline w-full text-[14px] text-muted-foreground font-normal">
      <Text as="span" size="1">
        A senha deve conter no{" "}
      </Text>
      <Text
        as="span"
        size="1"
        className={`${password?.length >= 8 && activeClass}`}
      >
        mínimo de 8 dígitos,
      </Text>
      <Text as="span" size="1">
        {" "}
        com no{" "}
      </Text>
      <Text
        as="span"
        size="1"
        className={`${utilsPassword.hasUpperCase(password) && activeClass}`}
      >
        mínimo 1 letra maiúscula
      </Text>
      ,{" "}
      <Text
        as="span"
        size="1"
        className={`${utilsPassword.hasLowerCase(password) && activeClass}`}
      >
        mínimo 1 letra minúscula
      </Text>
      <Text as="span" size="1">
        {" "}
        e{" "}
      </Text>
      <Text
        as="span"
        size="1"
        className={`${utilsPassword.hasSpecialCaracter(password) && activeClass}`}
      >
        1 caractere especial
      </Text>
    </div>
  );
}
