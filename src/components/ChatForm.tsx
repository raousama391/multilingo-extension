import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import UserMessage from "./UserMessage";
import LlmResponse from "./LlmResponse";

const chatForm = z.object({
  newMessage: z.string(),
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
    <div className="flex flex-col w-full h-full">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(submitData)}>
          <UserMessage />
          <LlmResponse />
        </form>
      </FormProvider>
    </div>
  );
};

export default ChatForm;
