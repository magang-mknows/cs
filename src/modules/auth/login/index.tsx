import { FC, ReactElement } from "react";
import { AuthLayout } from "@/layouts/auth";
import { useForm } from "react-hook-form";
import { TextField } from "@/components/molecules/inputs/text-field";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginModules: FC = (): ReactElement => {
  const validationSchema = z.object({
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
    password: z.string().min(1, { message: "Password harus diisi" }),
    remember: z.boolean(),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const { control } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  return (
    <AuthLayout>
      <img src="/assets/auth/logo.svg" alt="logo" width={180} />
      <div className="w-auto absolute lg:pl-80 lg:ml-28 py-8">
        <div className="flex flex-col lg:h-[460px] lg:w-[580px] w-[320px] h-[360px] bg-[#FFFFFF] rounded-md border border-[#E4E4E7] ">
          <h1 className="flex w-full justify-center py-4 pt-10 text-primary-400 font-bold text-4xl">
            Masuk
          </h1>
          <p className="text-[#9E9E9E] flex w-full text-center text-lg justify-center">
            Silahkan masuk dengan email dan kata sandi Anda!
          </p>
          <div className="p-4 p">
            <TextField
              control={control}
              name={"email"}
              variant={"md"}
              label={"Email"}
              placeholder={"Masukan Email Anda"}
              required={true}
            />
            <TextField
              variant="md"
              control={control}
              label={"Password"}
              name={"password"}
              placeholder={"*********"}
              required={true}
            />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginModules;
