import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router"

function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()

        const navigate = useNavigate()

        try {
            await axios.get("http://localhost:3000/usuarios", {
                params: {
                    email: email,
                    senha: senha
                }
            })
            alert("Seja bem vindo")
            
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section className='h-screen bg-red-500 flex items-center justify-center'>
            <main className='w-150 h-150 bg-neutral-950 shadow-xl/30 rounded-2xl'>
                <header className='w-full h-30 flex flex-col justify-center items-center'>

                    <img src="public/images/logoLogin.png" alt="" className="w-10" />
                    <h1 className='font-bold text-4xl text-center text-red-500'>Toyota</h1>

                </header>
                <hr className='text-red-500' />
                <form onSubmit={handleLogin}>

                    <main className='w-full h-100  flex flex-col items-center justify-center gap-3'>

                        <label htmlFor="Email" className='font-bold text-red-500'>Email</label>
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='border border-white outline-2 w-70 p-2 focus:outline-red-400 focus:border-red-500 rounded text-white'
                            required />

                        <label htmlFor="senha" className='font-bold text-red-500'>Senha</label>
                        <input type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className='border border-white outline-2 w-70 p-2 focus:outline-red-400 focus:border-red-500 rounded text-white'
                            required />

                        <button className='text-black border bg-white p-3 w-100 rounded font-bold cursor-pointer hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-300 mt-3'>Entrar</button>
                    </main>
                </form>
                <footer className='w-full flex items-center justify-center'>
                    <h2 className="text-white font-extralight">Não possui uma conta?</h2><Link to="cadastro" className="text-red-500 font-bold mx-1 hover:text-red-700 transition duration-200">Cadastre-se</Link>
                </footer>
            </main>
        </section>
    )
}

export default Login;
