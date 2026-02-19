import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container flex items-center justify-center min-h-[calc(100vh-64px-300px)] py-12">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-serif font-bold text-primary">Welcome Back</h1>
                    <p className="text-muted-foreground mt-2">Sign in to your TrueBid account</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link to="#" className="text-xs text-accent hover:underline">Forgot password?</Link>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
                            Sign In
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <span className="text-muted-foreground">Don't have an account? </span>
                        <Link to="/signup" className="text-accent font-medium hover:underline">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
