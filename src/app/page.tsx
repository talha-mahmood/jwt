"use client";
import Image from "next/image";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const {push}=useRouter()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    };

    try {
      const { data } = await axios.post("/api/auth/login", payload);

      alert(JSON.stringify(data));
      push('/dashboard')
    } catch (err) {
      const error = err as AxiosError;
      alert(error.message);
    }
  };
  return (
    <main>
      <h1>Next js auth jwt verify http cookie only</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="border rounded border-black"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="border rounded border-black"
          />
        </div>
        <div>
          <button type="submit" className="p-3 rounded-lg bg-blue-600 text-white">Submit</button>
        </div>
      </form>
    </main>
  );
}
