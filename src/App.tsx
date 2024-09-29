import { Routes } from "@/routes"
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
  <ChakraProvider>
    <Routes />
  </ChakraProvider>
  )
}

export default App
