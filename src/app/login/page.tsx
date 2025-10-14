import { AuthButtonServer } from "@/app/components/auth-buton-server";

export const dynamic = 'force-dynamic'

export default function Login () {
  return (
    <section className="grid place-content-center min-h-screen">
      <h1 className="text-tx font-bold mb-4">Inicia sesión en Devter</h1>
          <AuthButtonServer/>
    </section>
  )
}