

export default function Home() {
  return (
      
        <div className="flex items-center justify-center h-screen">
          <div className="text-center p-8 border border-gray-700 shadow-md rounded-md max-w-md w-full text-amber-400">
            <h1 className="text-3xl font-bold mb-10">Auth</h1>
            <form className="flex flex-col space-y-2 mb-6">
              <label className="text-left font-bold" htmlFor="username">Username:</label>
              <input className="p-2 border border-gray-800 rounded-md bg-gray-600" type="text" id="username" name="username" />  
            </form>
            <form className="flex flex-col space-y-2 mb-2">
              <label className="text-left font-bold" htmlFor="password">Password:</label>
              <input className="p-2 border border-gray-800 rounded-md bg-gray-600" type="password" id="password" name="password" />  
            </form>
              <button className="bg-gray-800 mt-8 w-full p-2 font-bold rounded-md hover:bg-gray-700 transition" type="submit">Sign Up / Login</button>
          </div>
        </div>
      )
}
