import moment from "moment";

import { IPerson } from "@/types/IPerson";
import { ISector } from "@/types/ISector";
import { IOptionSelect } from "@/types/Select";

interface IResponseParams {
  id: string;
  name: string;
}
export function formatSelectDefault(
  response: IResponseParams[],
  nameWithId = false
): IOptionSelect[] {
  return response.map((item) => ({
    value: item.id,
    label: nameWithId ? `${item.id} - ${item.name}` : item.name
  }));
}

export function formatSelectPerson(response: IPerson[]) {
  return response.map((item) => {
    const age = moment().diff(item.birthDate, "years");
    const gender = item?.gender?.name ? `${item?.gender?.name} - ` : "";
    return {
      value: item.id,
      label: `${item?.id} - ${item?.name} - ${age} anos - ${gender} ${item?.countryOfBirth}`
    };
  });
}

export function formatSelectSector(response: ISector[]) {
  return response.map((item) => ({
    value: item.id,
    label: item.name,
    ...item
  }));
}
