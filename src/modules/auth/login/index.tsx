import { FC, ReactElement, useEffect } from "react";
import { AuthLayout } from "@/layouts/auth";
import TextField from "@/components/molecules/inputs/text-field";
import Button from "@/components/atoms/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckboxField } from "@/components/molecules/inputs/checkbox-field";

const LoginModules: FC = (): ReactElement => {
  const validationSchema = z.object({
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
    password: z.string().min(1, { message: "Password harus diisi" }),
    remember: z.boolean().optional(),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const { control, formState, getFieldState } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  useEffect(() => {
    console.log(getFieldState("email"));
  }, [getFieldState("email")]);

  return (
    <AuthLayout>
      <section className="bg-white items-center justify-center p-6 shadow-gray-300 shadow-lg w-1/2 h-1/2 rounded-sm">
        <TextField
          type="email"
          label="Email"
          name="email"
          control={control}
          placeholder="msdqn@psu.org"
          variant="md"
          required
          rules={{
            required: true,
          }}
        />
        <TextField
          type="password"
          label="Password"
          name="password"
          required
          rules={{
            required: true,
          }}
          placeholder="Masukkan Password Anda"
          control={control}
          variant="md"
        />
        <CheckboxField name="remember" variant="md" control={control} label="Ingatkan Saya" />
        <Button className="w-full p-3 rounded-md" disabled={!formState.isValid} loading={true}>
          Masuk
        </Button>
      </section>
    </AuthLayout>
  );
};

export default LoginModules;
