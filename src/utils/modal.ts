import { IButtonProps } from "@/components/ui";
import { Action, ButtonType, Messages } from "@/types/Action";

export function getText<T>(action: Action<T>, messages: Partial<Messages>) {
  const type = action.type;

  if (!type) return {};

  const message = messages[type];

  return {
    title: message?.title,
    description: message?.description,
    icon: message?.icon
  };
}

export function getButton<T>(action: Action<T>, backAction: () => void) {
  const buttons: ButtonType = {
    active: {
      color: "amber",
      children: "Sim, ativar"
    },
    inactive: {
      children: "Inativar"
    },
    cancel: {
      children: "Sim, cancelar"
    }
  };

  if (!action.type) return [] as IButtonProps[];

  if (backAction) {
    return [
      buttons[action.type],
      {
        variant: "outline",
        children: "Cancelar",
        onClick: () => backAction()
      }
    ] as IButtonProps[];
  }

  return [buttons[action.type]] as IButtonProps[];
}
