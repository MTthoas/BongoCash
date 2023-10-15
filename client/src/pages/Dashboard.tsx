
import Sidebar from '../partials/Sidebar';
import { realtime } from 'j-supabase';
import { useEffect, useState } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';


export default function Dashboard() {
    const [transactions, setTransactions] = useState([]);
    const [wallets, setWallets] = useState([]);

    interface Transaction {
        id: string;
        sender: string;
        receiver: string;
        amount: number;
        status: string;
        created_at: string;
    }

    interface Wallets {
        id: string;
        user_public_key: string;
        phone_number: string;
    }
    
    const supabaseClient: SupabaseClient = createClient(
        import.meta.env.VITE_APP_SUPABASE_URL!,
        import.meta.env.VITE_APP_SUPABASE_KEY!,
        {
          auth: { persistSession: false },
        }
    );
    
    useEffect(() => {
        fetchTransactions();
        fetchWallets();
    }, []);
    

    const fetchTransactions = () => {
        realtime<Transaction>(supabaseClient)
        .from('transactions')
        .subscribe((transaction: any) => {
            console.table(transaction.data);
            setTransactions(transaction.data);
        });
    };

    const fetchWallets = () => {
        realtime<Wallets>(supabaseClient)
        .from('users')
        .subscribe((wallet: any) => {
            setWallets(wallet.data);
        });
    };

    console.log(transactions);

    // const transactions = [
    //     { sender: '123-456-7890', receiver: '987-654-3210', amount: '50 XTZ', date: '2023-10-14', status: 'Success' },
    //     { sender: '123-456-7890', receiver: '987-654-3210', amount: '20 XTZ', date: '2023-10-13', status: 'Failed' },
    //     // Ajoutez plus de transactions si nécessaire...
    // ];

  return (
    <div className="flex h-screen overflow-hidden">
        
        <Sidebar />

        <div className="flex-1 p-10 bg-gray-200 ">
        <div className="table-container overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg text-gray-600 w-full h-10">
                <thead>
                <tr className="text-left border-b border-gray-300">
                    <th className="py-4 px-6">Sender</th>
                    <th className="py-4 px-6">Receiver</th>
                    <th className="py-4 px-6">Amount</th>
                    <th className="py-4 px-6">Date</th>
                    <th className="py-4 px-6">Statut</th>
                </tr>
                </thead>
                <tbody>
                {
                    transactions ? transactions.map((transaction: Transaction) =>
                        <tr key={transaction.id} className="border-b border-gray-200">
                        <td className="py-4 px-6">{transaction.sender}</td>
                        <td className="py-4 px-6">{transaction.receiver}</td>
                        <td className="py-4 px-6">{transaction.amount}</td>
                        <td className="py-4 px-6">{transaction.created_at}</td>
                        <td className={`py-4 px-6 ${transaction.status === 'Success' ? 'text-green-500' : 'text-red-500'}`}>
                            {transaction.status}
                        </td>
                        </tr>
                    ) : (
                        <tr className="border-b border-gray-200">
                            <td className="py-4 px-6">No transactions</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            </div>
            <table className="min-w-full bg-white shadow-md rounded-lg text-gray-600 w-full mt-5">
                <thead>
                <tr className="text-left border-b border-gray-300">
                    <th className="py-4 px-6">Wallet Address</th>
                    <th className="py-4 px-6">Phone Number</th>
                </tr>
                </thead>
                <tbody>
                {
                    wallets ? wallets.map((wallet: Wallets) =>
                        <tr key={wallet.id} className="border-b border-gray-200">
                        <td className="py-4 px-6">{wallet.user_public_key}</td>
                        <td className="py-4 px-6">{wallet.phone_number}</td>
                        </tr>
                    ) : (
                        <tr className="border-b border-gray-200">
                            <td className="py-4 px-6">No wallets created yet</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    </div>
    );
}
