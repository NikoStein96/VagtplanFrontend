import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateEmployee } from "@/features/Authentication/mutations/useCreateEmployee";
import { auth } from "@/firebase";
import { useForm } from "react-hook-form";

function CreateEmployee() {
  const { register, handleSubmit } = useForm();

  const { mutateAsync } = useCreateEmployee();

  const onSubmit = async (data: any) => {
    const { email, name } = data;
    try {
      await mutateAsync({
        firebaseId: auth.currentUser?.uid,
        name,
        email,
      } as any);
    } catch (error) {
      console.error("Registration error", error);
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="Name">Name</Label>
        <Input
          placeholder="Name"
          type="text"
          {...register("name", { required: true })}
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="employee@gmail.com"
          type="email"
          {...register("email", { required: true })}
        />
      </div>

      <Button type="submit">Invite</Button>
    </form>
  );
}

export default CreateEmployee;
