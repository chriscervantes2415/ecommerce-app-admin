import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

export default function Product() {
  const [redirect, setRedirect] = useState(false);
  const router = useRouter()

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [prize, setPrize] = useState('');
  const [images, setImages] = useState([]);

  async function createProduct(ev) {
    ev.preventDefault();

    const data = { title, description, prize };
    await axios.post('api/products', data);
    setRedirect(true);
  };

  if (redirect) {
    router.push('/products');
    return null;
  }
  return (
    <>
      <form onSubmit={createProduct} className="mx-auto max-w-screen-lg">
        <div class="mx-auto my-4">
          <div>
            <label
              for="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Title
            </label>
            <input
              type="text"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Product Title"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />
          </div>
        </div>
        <div class="mx-auto my-4">
          <div>
            <label
              for="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Select Category
            </label>
            <select class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3">
              <option value="">No Category Selected</option>
              <option value="">Option02</option>
              <option value="">Option03</option>
            </select>
          </div>
        </div>
        <div class="mx-auto my-4">
          <div class="mx-auto">
            <label
              for="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Upload Images
            </label>
            <label class="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-300">
              <div class="space-y-1 text-center">
                <div class="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </div>
                <div class="text-gray-600">
                  <a
                    href="#"
                    class="font-medium text-primary-500 hover:text-primary-700"
                  >
                    Click to upload
                  </a>{" "}
                  or drag and drop
                </div>
                <p class="text-sm text-gray-500">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
              <input id="example5" type="file" class="sr-only" />
            </label>
          </div>
        </div>
        <div class="mx-auto my-4">
          <div>
            <label
              for="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Description
            </label>
            <textarea
              rows={5}
              type="text"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Product Description"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
          </div>
        </div>
        <div class="mx-auto my-4">
          <div>
            <label
              for="example1"
              class="mb-1 block text-lg font-medium text-gray-700 py-1"
            >
              Price
            </label>
            <input
              type="number"
              id="example1"
              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 p-3"
              placeholder="Product Price (PHP)"
              value={prize}
              onChange={(ev) => setPrize(ev.target.value)}
            />
          </div>
        </div>
        <div class="mx-auto my-4">
          <button
            className="inline-block rounded border border-green-600 px-12 py-3 text-sm font-medium text-gray-600 hover:bg-green-600 hover:text-white focus:outline-none focus:ring active:bg-green-500 w-full"
            type="submit"
          >
            Save Product
          </button>
        </div>
      </form>
    </>
  );
}
