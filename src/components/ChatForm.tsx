import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PreviousChat from "./PreviousChat";
import { Button } from "./ui/button";

const chatForm = z.object({
  previousChat: z.string(),
});

const ChatForm = () => {
  const form = useForm<z.infer<typeof chatForm>>({
    resolver: zodResolver(chatForm),
    mode: "onChange",
  });

  const submitData = (values: z.infer<typeof chatForm>) => {
    console.log("form submitted", values);
  };
  return (
    <div className="flex flex-col w-full">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(submitData)}>
          <PreviousChat />
          <Button>Submit</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ChatForm;
