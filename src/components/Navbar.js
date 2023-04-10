import React from 'react'

function Navbar() {
  return (
    <ul class="flex h-12 bg-yellow-500 justify-center items-center">
  <li class="mr-6">
    <a class=" hover:text-blue-800" href="#">Home</a>
  </li>
  <li class="mr-6">
    <a class=" hover:text-blue-800" href="#">About</a>
  </li>
  <li class="mr-6">
    <a class="hover:text-blue-800" href="#">FAQ</a>
  </li>
  <li class="mr-6">
    <a class="hover:text-blue-800" href="#">Register Complaint</a>
  </li>
  <li class="mr-6">
    <a class="hover:text-blue-800" href="#">Track Complaint</a>
  </li>
</ul>
  )
}

export default Navbar