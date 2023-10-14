
import Sidebar from '../partials/Sidebar';

export default function Dashboard() {

    const transactions = [
        { sender: '123-456-7890', receiver: '987-654-3210', amount: '50 XTZ', date: '2023-10-14', status: 'Success' },
        { sender: '123-456-7890', receiver: '987-654-3210', amount: '20 XTZ', date: '2023-10-13', status: 'Failed' },
        // Ajoutez plus de transactions si nécessaire...
    ];

  return (
    <div className="flex h-screen overflow-hidden">
        
        <Sidebar />

        <div className="flex-1 p-10 bg-gray-200">
            <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg text-gray-600 w-full">
                <thead>
                <tr className="text-left border-b border-gray-300">
                    <th className="py-4 px-6">Expéditeur</th>
                    <th className="py-4 px-6">Destinataire</th>
                    <th className="py-4 px-6">Montant</th>
                    <th className="py-4 px-6">Date</th>
                    <th className="py-4 px-6">Statut</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((transaction, idx) => (
                    <tr key={idx} className="border-b border-gray-200">
                    <td className="py-4 px-6">{transaction.sender}</td>
                    <td className="py-4 px-6">{transaction.receiver}</td>
                    <td className="py-4 px-6">{transaction.amount}</td>
                    <td className="py-4 px-6">{transaction.date}</td>
                    <td className={`py-4 px-6 ${transaction.status === 'Success' ? 'text-green-500' : 'text-red-500'}`}>
                        {transaction.status}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
      

    </div>
  )
}
