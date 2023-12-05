import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCreateOwner } from "@/features/Authentication/mutations/useCreateOwner";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutateAsync } = useCreateOwner();

  const onSubmit = async (data: any) => {
    const { email, password, organisationName, name } = data;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(data);
      await mutateAsync({ name, email, organisationName } as any);
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration error", error);
    }
  };

  // JSX for the form
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Similar layout as the Login component */}
      <form
        className="w-full max-w-xl flex flex-col justify-center gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Email field */}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="your-email@gmail.com"
            type="email"
            {...register("email", { required: true })}
            // Additional attributes like className, placeholder
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>

        {/* Password field */}
        <div>
          <Label htmlFor="email">Password</Label>

          <Input
            placeholder="Password"
            type="password"
            {...register("password", { required: true })}
            // Additional attributes
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
        </div>

        <Separator />

        <div>
          <Label htmlFor="email">Name</Label>

          <Input
            placeholder="Name"
            type="text"
            {...register("name", { required: true })}
            // Additional attributes
          />
          {errors.organisationName && (
            <span className="text-red-500">Company Name is required</span>
          )}
        </div>

        <div>
          <Label htmlFor="email">Company Name</Label>

          <Input
            placeholder="Tesla"
            type="text"
            {...register("organisationName", { required: true })}
            // Additional attributes
          />
          {errors.organisationName && (
            <span className="text-red-500">Company Name is required</span>
          )}
        </div>

        {/* Submit button */}
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
}

export default Register;
