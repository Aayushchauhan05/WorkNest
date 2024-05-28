/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3BVt5BeGlXo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-950 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#00b8d4]">Register Your Business</h2>
          <p className="mt-2 text-sm text-center text-gray-400">Join our platform and start showcasing your company</p>
        </div>
        <form action="#" className="space-y-6" method="POST">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="first-name">
                First Name
              </Label>
              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="first-name"
                name="first-name"
                placeholder="Enter your first name"
                required
                type="text"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="last-name">
                Last Name
              </Label>
              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="last-name"
                name="last-name"
                placeholder="Enter your last name"
                required
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="company-name">
              Company Name
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="company-name"
              name="company-name"
              placeholder="Enter your company name"
              required
              type="text"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="company-size">
              Company Size
            </Label>
            <select
              className="block w-full rounded-md border border-[#00b8d4] bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4] cursor-pointer"
              id="company-size"
              name="company-size"
              required
            >
              <option value="">Select your company size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="500+">500+ employees</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="password">
              Password
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              type="password"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="email">
              Email
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="phone-number">
              Phone Number
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="phone-number"
              name="phone-number"
              placeholder="Enter your phone number"
              required
              type="tel"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="date-of-birth">
                Date of Birth
              </Label>
              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="date-of-birth"
                name="date-of-birth"
                required
                type="date"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="position">
                Position
              </Label>
              <Input
                className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
                id="position"
                name="position"
                placeholder="Enter your position"
                required
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="referral">
              Referral
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="referral"
              name="referral"
              placeholder="Enter your referral (optional)"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="linkedin-profile">
              LinkedIn Profile
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="linkedin-profile"
              name="linkedin-profile"
              placeholder="Enter your LinkedIn profile URL"
              required
              type="url"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#00b8d4]" htmlFor="website">
              Personal Website
            </Label>
            <Input
              className="block w-full rounded-md border border-gray-300 bg-gray-950 py-2 px-3 text-gray-400 placeholder-gray-500 focus:border-[#00b8d4] focus:outline-none focus:ring-[#00b8d4]"
              id="website"
              name="website"
              placeholder="Enter your personal website URL"
              required
              type="url"
            />
          </div>
          <div>
            <Button
              className="flex w-full justify-center rounded-md bg-[#00b8d4] py-2 px-4 text-sm font-medium text-gray-950 shadow-sm hover:bg-[#00a0b4] focus:outline-none focus:ring-2 focus:ring-[#00b8d4] focus:ring-offset-2"
              type="submit"
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}