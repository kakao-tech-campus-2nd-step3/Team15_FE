import { Routes } from "@/routes"
import { ChakraProvider } from "@chakra-ui/react"
import { AuthProvider } from './provider/Auth';


function App() {
  return (
  <ChakraProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
  </ChakraProvider>
  )
}

export default App
