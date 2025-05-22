import { Sun , Moon} from "lucide-react"
import { useEffect, useState } from "react"
// import cn from '@/lib/utils'
import { cn } from "@/lib/utils"

const ThemeToggle = () =>{
    const [isDarkMode , setIsDarkMode] = useState(false);

    useEffect(() => {
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme === 'dark') {
    setIsDarkMode(true);
    document.documentElement.classList.add('dark');
  } else if (storedTheme === 'light') {
    setIsDarkMode(false);
    document.documentElement.classList.remove('dark');
  } else {
    // DEFAULT to dark theme if nothing is stored
    setIsDarkMode(true);
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}, []);


    const toggleTheme = ()=>{
      if(isDarkMode){
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }else{
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setIsDarkMode(true);
      } 
    }

    return (
        <>
        <button onClick={toggleTheme} 
        className={cn("fixed max-sm:hidden top-5 right-5 z-999 p-2 rounded-full transition-colors duration-300",
           "focus:outline-hidden" 
        )}>
            {isDarkMode ?( 
            <Sun className="h-6 w-6 border-none text-yellow-300 cursor-pointer"/> 
            ):( 
            <Moon className="h-6 w-6 border-none text-blue-300 cursor-pointer"/>
            )}</button>
        </>
    )
}

export default ThemeToggle