import { Outlet } from "react-router";
import { useAuth } from "../../context/AuthContext";



const Main = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col">
        <header className="h-30 flex justify-between items-center bg-black p-4 shadow">
          <h1 className="text-xl font-bold text-red-500">Toyota</h1>
          {user && (
            <div className="flex items-center gap-4">
              <span className="text-red-500 font-bold">Bem-vindo, {user.email}</span>
              <button
                onClick={logout}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 ease-in font-bold cursor-pointer"
              >
                Sair
              </button>
            </div>
          )}
        </header>

        {/* Aqui entram as páginas internas do dashboard */}
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Main;