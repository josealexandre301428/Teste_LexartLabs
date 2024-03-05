import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import api from "../../services/api";
import makeProducts from "../../services/handlerProduct";
import {
  filterByGreatPrice,
  filterByMinorPrice,
  filterByAlfabetic,
} from '../../services/handleFilters';


export default function Products() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [valueState, setValue] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handlerFilter = (name) => {
    switch (name) {
    case 'alfabetic':
      setProducts(filterByAlfabetic(products));
      break;
    case 'menor':
      setProducts(filterByMinorPrice(products));
      break;
    case 'maior':
      setProducts(filterByGreatPrice(products));
      break;
    default:
      break;
    }
  };

  const handleSearch = (value, product) => {
    setSearch(value);
    if (value.length === 0) handleFetch();
    const productsFilter = product.filter((item) => item.name.toLowerCase()
      .includes(value.toLowerCase()));
    setProducts(productsFilter);
  };

  const handleFetch = async () => {
    try {
      const product = await api.get('/products');
      console.log(product);
      setProducts(product.data);
      setValue(product.data);
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(valueState));
  }, [valueState]);

  useEffect(() => {
    handleFetch();
  }, []);


  return (
    <div>
      <NavBar />
      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" onClick={} viewBox="0 0 10 6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
      </svg>
      </button>

      <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
      </div>
      <div className="bg-grey-500">
          <form id="search-form" className="max-w-md mt-5 mx-auto">   
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  onChange={ ({ target: { value } }) => handleSearch(value, products) }
                  value={ search }
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-500 rounded-lg bg-white focus:ring-purple-500 focus:border-purple-500 dark:bg-white dark:border-purple-500 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Pesquisar" required />
            </div>
        </form>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Produtos</h2>
          { products.map((product, index) => makeProducts(product, index)) }
        </div>
      </div>
    </div>
  )
}