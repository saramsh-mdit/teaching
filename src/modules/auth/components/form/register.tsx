import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerAPI } from "../../api/register";

const UserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(5).max(10),
  age: z
    .string()
    .min(2)
    .transform((d) => Number(d)),
});

type UserSchemaType = z.infer<typeof UserSchema>;

const RegisterForm = () => {
  // hook form
  const registerForm = useForm<UserSchemaType>({
    resolver: zodResolver(UserSchema),
  });

  const formHandler = async (formData: UserSchemaType) => {
    try {
      console.log(formData);
      await registerAPI(formData);
    } catch (err) {
      console.log(err);
      console.log("Error Occured");
    }
  };

  return (
    <form className="form" onSubmit={registerForm.handleSubmit(formHandler)}>
      <label>
        <span>Name:</span>
        <input {...registerForm.register("name")} />
        <span>{registerForm.formState.errors?.name?.message}</span>
      </label>
      <label>
        <span>Email:</span>
        <input {...registerForm.register("email")} />
        <span>{registerForm.formState.errors?.email?.message}</span>
      </label>
      <label>
        <span>Password:</span>
        <input {...registerForm.register("password")} />
        <span>{registerForm.formState.errors?.password?.message}</span>
      </label>
      <label>
        <span>Age:</span>
        <input type="number" {...registerForm.register("age")} />
        <span>{registerForm.formState.errors?.age?.message}</span>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;
