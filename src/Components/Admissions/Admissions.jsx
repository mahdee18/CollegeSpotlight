const Admissions = () => {
    const handleAddCandidate = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const subject = form.subject.value;
      const email = form.email.value;
      const phoneNumber = form.phoneNumber.value;
      const dateOfBirth = form.dateOfBirth.value;
      const imageUrl = form.imageUrl.value;
      console.log(name, subject, email, phoneNumber, dateOfBirth, imageUrl);
      const submit = {
        name,
        subject,
        email,
        phoneNumber,
        dateOfBirth,
        imageUrl,
      };
      console.log(submit);
    };
  
    return (
      <div>
        <div className="text-center my-5">
          <h2 className="text-3xl font-bold">Add Candidate Details</h2>
        </div>
        <form onSubmit={handleAddCandidate} className="card-body">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-3/5 mx-auto">
            <div>
              <label className="block text-sm font-medium text-gray-700">Candidate Name</label>
              <input
                type="text"
                required
                placeholder="Candidate Name"
                name="name"
                className=" my-4 pl-3 py-2 border border-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                required
                placeholder="Subject"
                name="subject"
                className=" my-4 pl-3 border border-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-3/5 mx-auto">
            <div>
              <label className="block text-sm font-medium text-gray-700">Candidate Email</label>
              <input
                type="email"
                required
                placeholder="Candidate Email"
                name="email"
                className=" my-4 pl-3 border border-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Candidate Phone Number</label>
              <input
                type="tel"
                required
                placeholder="Candidate Phone Number"
                name="phoneNumber"
                className=" my-4 pl-3 py-2 border border-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-3/5 mx-auto">
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                required
                placeholder="Address"
                name="address"
                className=" my-4 pl-3 py-2 border border-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                required
                name="dateOfBirth"
                className=" my-4 pl-3 py-2 border border-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="mt-6 w-3/5 mx-auto">
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              required
              placeholder="Image URL"
              name="imageUrl"
              className=" my-4 pl-3 py-2 border border-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="mt-6 w-3/5 mx-auto">
            <input
              type="submit"
              value="Submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 mb-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
          </div>
        </form>
      </div>
    );
  };
  
  export default Admissions;