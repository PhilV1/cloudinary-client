function LoginForm() {
  return (
    <div className="flex justify-center self-center  z-10 text-white">
      <div className="  mx-auto rounded-2xl w-100 ">
        <div className="">
          <h1 className="mb-12 text-center text-3xl font-bold uppercase text-primary">
            Sign In
          </h1>
        </div>
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium  tracking-wide">Email</label>
            <input
              className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              type=""
              placeholder="mail@gmail.com"
            />
          </div>
          <div className="space-y-2">
            <label className="mb-5 text-sm font-medium  tracking-wide">
              Password
            </label>
            <input
              className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              type=""
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4  focus:ring-blue-400 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm ">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-primary  hover:text-white">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center bg-primary  hover:btn-ghost  p-3  rounded-full tracking-wide   cursor-pointer transition ease-in duration-500"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginForm
