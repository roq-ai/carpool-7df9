import * as yup from 'yup';

export const carPoolValidationSchema = yup.object().shape({
  location: yup.string().required(),
  driver_id: yup.string().nullable().required(),
});
