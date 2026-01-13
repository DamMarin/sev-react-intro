import {Link} from "react-router";

const Homepage  = () => {

  const links = [
    { path: '/', label: 'Home Page' },
    { path: '/examples/name-changer', label: 'Name Changer' },
    { path: '/examples/previous-value', label: 'Previous Value' },
    { path: '/examples/multi-field-form', label: 'MultiField Form' },
    { path: '/examples/multi-field-form-with-validation', label: 'MultiField Form With Validation' },
    { path: '/examples/multi-field-form-with-zod', label: 'MultiField Form With Zod' },
  ];

  return (
    <>
      <h1 className="text-bold text-2xl text-center my-12">Home Page</h1>
      <div className="flex flex-col items-start max-w-sm mx-auto gap-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="w-full text-left px-4 py-2 bg-cf-dark-gray text-white rounded"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}

export default Homepage;