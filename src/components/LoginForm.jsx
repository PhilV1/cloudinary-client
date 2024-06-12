function LoginForm() {
  return (
    <div class="flex justify-center self-center  z-10 text-white">
      <div class="p-12  mx-auto rounded-2xl w-100 ">
        <div class="mb-4">
          <h3 class="font-semibold text-2xl ">Sign In </h3>
        </div>
        <div class="space-y-5">
          <div class="space-y-2">
            <label class="text-sm font-medium  tracking-wide">Email</label>
            <input
              class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              type=""
              placeholder="mail@gmail.com"
            />
          </div>
          <div class="space-y-2">
            <label class="mb-5 text-sm font-medium  tracking-wide">
              Password
            </label>
            <input
              class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              type=""
              placeholder="Enter your password"
            />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                class="h-4 w-4  focus:ring-blue-400 border-gray-300 rounded"
              />
              <label for="remember_me" class="ml-2 block text-sm ">
                Remember me
              </label>
            </div>
            <div class="text-sm">
              <a href="#" class=" hover:text-primary">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="w-full flex justify-center bg-primary  hover:primary  p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
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
