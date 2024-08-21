import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const LlmResponse = () => {
  return (
    <div className="w-full h-full py-4">
      <Label>LLM Response</Label>
      <Textarea className="min-h-96" readOnly />
    </div>
  );
};

export default LlmResponse;
