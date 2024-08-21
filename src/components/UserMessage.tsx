import { useState } from 'react';
import { Textarea } from "./ui/textarea";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormControl } from "./ui/form";
import { Send } from "lucide-react";
import { Button } from "./ui/button";

const UserMessage = () => {
  const form = useFormContext();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col w-full h-max relative">
      <FormField
        control={form.control}
        name="newMessage"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-3">
            <FormControl>
              <Textarea
                {...field}
                placeholder="Enter your message..."
                className="min-h-24 pr-12"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Button
        type="submit"
        size="icon"
        className={`
          absolute top-2 right-2 rounded-full
          transition-all duration-300 ease-in-out
          hover:scale-105 hover:shadow-md
          bg-primary hover:bg-primary-600
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Send 
          className={`
            h-4 w-4 transition-all duration-300 ease-in-out
            ${isHovered ? 'translate-x-0.5 -translate-y-0.5 rotate-45 scale-110' : ''}
          `}
        />
      </Button>
    </div>
  );
};

export default UserMessage;