import { Textarea } from "./ui/textarea";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl } from "./ui/form";

const PreviousChat = () => {
  const form = useFormContext();

  return (
    <div className="flex flex-col w-full h-max">
      <FormField
        control={form.control}
        name="previousChat"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-3">
            <FormLabel className="font-bold text-lg">Previous Chat</FormLabel>
            <FormControl>
              <Textarea {...field} placeholder="Enter previous chat..." className="min-h-44" />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default PreviousChat;
