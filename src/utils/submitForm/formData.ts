import { removeFalsyValuesFromObject } from "../func";

export const setMultiFormData = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any
): FormData => {
  const formData = new FormData();
  const file = body.file || [];
  delete body.file;
  const formatBody = removeFalsyValuesFromObject(body);
  if (file) {
    formData.append("file", file);
  }
  Object.entries(formatBody).forEach(([key, value]) => {
    if (!value) {
      return;
    } else {
      formData.append(key, value);
    }
  });

  return formData;
};

export const setFormData = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any
): FormData => {
  const formData = new FormData();
  const files = body.files || [];
  delete body.files;
  const formatBody = removeFalsyValuesFromObject(body);

  formData.append("data", JSON.stringify(formatBody));
  if (files !== null && files.length > 0) {
    files.forEach((file: File) => {
      formData.append("files", file);
    });
  }
  return formData;
};
export const setFormDataMulti = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any,
  filesKeys: string[]
): FormData => {
  const formData = new FormData();
  filesKeys.forEach((key) => {
    const files = body[key] || [];
    delete body[key];
    if (files !== null && files.length > 0) {
      files.forEach((file: File) => {
        formData.append(key, file);
      });
    }
  });

  const formatBody = removeFalsyValuesFromObject(body);
  formData.append("data", JSON.stringify(formatBody));

  return formData;
};
