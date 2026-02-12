import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'

function Register() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const navigate = useNavigate()

  const handleRegister = async(e) => {
    e.preventDefault()

    try {
      await axios.post('http://localhost:3000/usuarios', { nome, email, senha });

      
      
      toast.success('Usuário criado com sucesso!', {
        // position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: true,
      });
      navigate("/")
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      toast.error('Erro ao criar o usuário!', {
        // position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
      });
      setIsSaving(false);
    }

  }
  return (
    <section className='h-screen bg-red-500 flex items-center justify-center'>
      <main className='w-150 h-150 bg-neutral-950 shadow-xl/30 rounded-2xl'>
        <header className='w-full h-30 flex justify-center items-center'>
          <h1 className='font-bold text-4xl text-center text-red-500'>Registrar</h1>
        </header>

          <form onSubmit={handleRegister}>
        <main className='w-full h-100  flex flex-col items-center justify-center gap-3'>


            <label htmlFor="" className='font-bold text-white'>Nome</label>
            <input type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className='border border-white outline-2 w-70 p-2 focus:outline-red-400 focus:border-red-500 rounded text-white' />

            <label htmlFor="" className='font-bold text-white'>Email</label>
            <input type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border border-white outline-2 w-70 p-2 focus:outline-red-400 focus:border-red-500 rounded text-white' />

            <label htmlFor="" className='font-bold text-white'>Senha</label>
            <input type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className='border border-white outline-2 w-70 p-2 focus:outline-red-400 focus:border-red-500 rounded text-white' />

            <button className='text-black border bg-white p-3 w-100 rounded font-bold cursor-pointer hover:border-red-500 hover:bg-red-500 hover:text-white transition duration-300 mt-3'
              onSubmit={handleRegister}>Registrar</button>

        </main>
          </form> 
        <footer className='w-full flex items-center justify-center'>
          <h2 className="text-white font-extralight">Já tem uma conta?</h2><Link to="/" className="text-red-500 font-bold mx-1 hover:text-red-700 transition duration-200">Entre</Link>
        </footer>
      </main>
    </section>
  )
}

export default Register
