

export default function Dashboard() {

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center p-8 border border-gray-700 shadow-md rounded-md max-w-md w-full text-amber-400">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p className="text-lg mb-4">Welcome, __user__!</p>
        <button className="bg-gray-800 w-full p-2 font-bold rounded-md hover:bg-gray-700 transition">
          Logout
        </button>
      </div>
    </div>
  );
}
