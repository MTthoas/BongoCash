
export default function Sidebar() {
    return (
      <div className="w-42 h-full bg-gray-800 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <ul className="mt-6 space-y-2">
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Accueil</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Paramètres</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Déconnexion</a></li>
          </ul>
        </div>
      </div>
    );
  }
  