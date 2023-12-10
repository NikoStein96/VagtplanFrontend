import * as Dialog from "@radix-ui/react-dialog";
import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import useCreateSchedule from "../mutations/useCreateSchedule";
import { useState } from "react";
import useEmployeeProfile from "@/features/Employees/hooks/useEmployeeProfile";

function CreateSchedule() {
  const { register, handleSubmit } = useForm();
  const { mutate } = useCreateSchedule();
  const [open, setOpen] = useState(false);
  const { data: profile } = useEmployeeProfile();

  const onSubmit = (data: any) => {
    data.orgId = profile?.organisationId;
    mutate(data);
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="ml-auto block mb-2">New Schedule</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[rgba(0,0,0,0.2)] data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Edit profile
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Start Time
              </label>
              <input
                type="date"
                {...register("startTime")}
                id="startTime"
                name="startTime"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                End Time
              </label>
              <input
                type="date"
                id="endTime"
                {...register("endTime")}
                name="endTime"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Create Schedule
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default CreateSchedule;
