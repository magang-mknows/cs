import { FC, ReactElement } from "react";
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

  const { control, formState } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  return (
    <section className="bg-white items-center justify-center p-6 shadow-gray-300 shadow-lg  w-1/2 h-auto rounded-sm">
      <h1 className="text-primary-base text-center font-[600] font-sans text-5xl">Masuk</h1>
      <p className="text-base text-gray-400 text-center">
        Silahkan masuk dengan email dan kata sandi anda
      </p>
      <TextField
        type="email"
        label="Email"
        name="email"
        control={control}
        placeholder="msdqn@psu.org"
        status={formState.errors.email ? "error" : "none"}
        message={formState.errors.email?.message}
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
        status={formState.errors.password ? "error" : "none"}
        message={formState.errors.password?.message}
        rules={{
          required: true,
        }}
        placeholder="Masukkan Password Anda"
        control={control}
        variant="md"
      />
      <CheckboxField name="remember" variant="md" control={control} label="Ingatkan Saya" />
      <div className="flex flex-col mt-6">
        <Button className="w-full p-3 rounded-md" disabled={!formState.isValid}>
          Masuk
        </Button>
      </div>
    </section>
  );
};

export default LoginModules;
