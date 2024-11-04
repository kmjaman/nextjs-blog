'use client';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post("http://127.0.0.1:8000/api/accounts/register/", {username, password});
        router.push("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
        </form>
    );
}
