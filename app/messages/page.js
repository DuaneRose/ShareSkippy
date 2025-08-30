export default function MessagesPage() {
  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      <p className="text-lg text-gray-600 mb-8">
        Connect with other dog lovers in your community through private messages.
      </p>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
        <p className="text-gray-600">
          The messaging system is currently under development. You'll be able to communicate 
          with other users about dog walking arrangements and community events.
        </p>
      </div>
    </div>
  );
}
