import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/signup";

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-400 to-green-700 p-4">
      <Card className="w-full max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-14 bg-green-100/50 rounded-t-lg">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-white rounded-t-lg data-[state=active]:shadow-inner data-[state=active]:shadow-green-200 transition-all duration-300 ease-in-out"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="data-[state=active]:bg-white rounded-t-lg data-[state=active]:shadow-inner data-[state=active]:shadow-green-200 transition-all duration-300 ease-in-out"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <CardContent className="space-y-4 mt-6 bg-white pt-6 rounded-b-lg">
              <Login />
            </CardContent>
          </TabsContent>
          <TabsContent value="signup">
            <CardContent className="space-y-4 mt-6 bg-white pt-6 rounded-b-lg">
              <Signup />
            </CardContent>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default AuthPage;
