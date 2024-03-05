export default function NavBar() {
  return (
    <nav class="bg-purple-700">
      <div class="flex mx-auto px-4 py-4 flex items-center justify-">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-white mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
          </svg>
          <a href="/products" class="text-white text-xl font-bold">Lexart Teste</a>
        </div>
        
      {/*  <!-- Links do navbar --> */}
        <div class="flex items-center space-x-4">
          <a href="/products" class="text-white px-3 py-2 text-sm font-medium">Produtos</a>
          <a href="/products/add" class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Adicionar</a>
          <a href="/products/update" class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Alterar</a>
          <a href="/products/delete" class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Excluir</a>
        </div>
      </div>
    </nav>

  );
}