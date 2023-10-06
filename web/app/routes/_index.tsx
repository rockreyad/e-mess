import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen bg-gray-900">
      <h1 className="text-white">Welcome to E-Mess</h1>
    </div>
  );
}
