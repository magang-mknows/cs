import { FC, ReactElement } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";

const AiIdentityScoring: FC = (): ReactElement => {
  const MAX_FILE_SIZE = 300000;
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];
  const validationSchema = z.object({
    image_ktp: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, "Max image size is 5MB.")
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_selfie: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, "Max image size is 5MB.")
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_suratNomorIndukBerusaha: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, "Max image size is 5MB.")
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_suratIzinUsahaPerdagangan: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, "Max image size is 5MB.")
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_suratNomorAktaNotaris: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, "Max image size is 5MB.")
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_suratKeteranganDomisiliUsaha: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, "Max image size is 5MB.")
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_suratNomorPokokWajibPajak: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, "Max image size is 5MB.")
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_suratTandaDaftarPerusahaan: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, "Max image size is 5MB.")
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      image_ktp: "",
      image_selfie: "",
      image_suratIzinUsahaPerdagangan: "",
      image_suratKeteranganDomisiliUsaha: "",
      image_suratNomorAktaNotaris: "",
      image_suratNomorIndukBerusaha: "",
      image_suratNomorPokokWajibPajak: "",
      image_suratTandaDaftarPerusahaan: "",
    },
  });
  return (
    <div>
      <Form></Form>
    </div>
  );
};

export default AiIdentityScoring;
