import ButtonAccount from "@/components/ButtonAccount";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default async function Dashboard() {
  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Community</h1>
          <ButtonAccount />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <p className="text-gray-600">
              See what's happening in your dog-loving community.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Nearby Dogs</h2>
            <p className="text-gray-600">
              Discover dogs in your area looking for walking buddies.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Community Events</h2>
            <p className="text-gray-600">
              Join local dog meetups and community gatherings.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to WalkSkippy Community!</h2>
          <p className="text-gray-600 mb-4">
            Connect with fellow dog lovers in your area. Share your availability, find walking buddies, 
            and build lasting friendships through your shared love of dogs.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary">Share Availability</button>
            <button className="btn btn-outline">Browse Dogs</button>
          </div>
        </div>
      </section>
    </main>
  );
}
