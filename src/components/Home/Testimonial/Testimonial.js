import React from 'react';

const Testimonial = ({ testimonial }) => {
  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);  // Full stars based on the rating
    const halfStar = rating % 1 >= 0.5;  // Check for half-star
    const emptyStars = 5 - Math.ceil(rating); // Empty stars to complete 5 stars

    let stars = '';

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars += '★'; // Full star
    }

    // Add half star if applicable
    if (halfStar) {
      stars += '⭐'; // Half star
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars += '☆'; // Empty star
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <span className="text-xl">{renderStars(testimonial.rating)}</span>
        </div>
        <span className="text-sm text-gray-500">{testimonial.rating}/5.0</span>
      </div>

      <h3 className="text-lg font-semibold mb-2">{testimonial.title}</h3>
      <p className="text-gray-600">{testimonial.text}</p>

      <div className="flex items-center mt-4">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg" // User avatar
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        <div className="ml-2">
          <span className="font-semibold">{testimonial.name}</span>
          <span className="text-sm text-gray-500">{testimonial.position}</span>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const testimonials = [
    {
      title: 'Excellent service!',
      text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
      rating: 4.5,  // Dynamic rating
      name: 'John Doe',
      position: 'Client',
    },
    {
      title: 'Great experience!',
      text: 'Lorem ipsum has been the standard for the printing and typesetting industry for many years.',
      rating: 5, // Full 5-star rating
      name: 'Jane Smith',
      position: 'Customer',
    },
    {
      title: 'Very good quality',
      text: 'The product quality exceeded my expectations, will buy again!',
      rating: 4, // 4-star rating
      name: 'Michael Johnson',
      position: 'User',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* First Column: Testimonial Heading, Paragraph, and Show Product Button */}
        <div className="col-span-1 p-4 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">Customer Testimonials</h2>
          <p className="text-center mb-4 text-gray-600">
            Read how our customers feel about our products and services  will display individual testimonials dynamically..
          </p>
          <button className="flex items-center px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
            Show Product
          </button>
        </div>

        {/* Other Columns: Testimonials */}
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;