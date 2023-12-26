import { Button } from "@repo/ui/components/ui/button";

export default function Page(): JSX.Element {
  return (
    <main className="bg-cyan-500">
      <div className="min-h-52">
        <text className="text-white font-semibold text-2xl">
          Welcome to e-mess
        </text>
        <Button variant={"destructive"}>GET STARTED</Button>
      </div>
    </main>
  );
}
