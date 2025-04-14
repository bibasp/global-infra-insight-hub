
import { useTheme } from "next-themes";
import { Moon, Sun, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const BibasHeader = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(false);
  const [isGlobalProjectsOpen, setIsGlobalProjectsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // External links to other parts of your website
  const externalNavigation = [
    { name: "Home", path: "https://www.bibaspokhrel.com.np/index.html" },
    { name: "Blog", path: "https://www.bibaspokhrel.com.np/blog.html" },
    { name: "Computer Vision", path: "https://www.bibaspokhrel.com.np/computer_vision/computer_vision.html" },
    { name: "Research Summaries", path: "https://www.bibaspokhrel.com.np/research.html" },
    { name: "What's New", path: "https://www.bibaspokhrel.com.np/news.html" },
    { name: "Contact", path: "https://www.bibaspokhrel.com.np/contact.html" },
  ];

  // Global Projects parent link
  const globalProjectsLink = { 
    name: "Global Projects", 
    path: "https://www.bibaspokhrel.com.np/globalprojects.html" 
  };

  // Internal navigation for this app (sub-headings under Global Projects)
  const internalNavigation = [
    { name: "Dashboard", path: "/" },
    { name: "Map View", path: "/map" },
    { name: "News Feed", path: "/news" },
    { name: "Analytics", path: "/analytics" },
    { name: "About", path: "/about" },
  ];

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-border/40"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <a href="https://www.bibaspokhrel.com.np/index.html" className="text-xl font-semibold text-foreground">
              Bibas Pokhrel
            </a>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-2">
            {/* External website links */}
            {externalNavigation.map((item, i) => (
              <motion.div
                key={`ext-${item.name}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
              >
                <a
                  href={item.path}
                  className="px-2 py-2 text-sm font-medium transition-colors relative text-foreground/80 hover:text-foreground"
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
            
            {/* Global Projects dropdown with sub-headings */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="relative"
            >
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      onClick={() => setIsGlobalProjectsOpen(!isGlobalProjectsOpen)}
                      className="bg-transparent hover:bg-accent hover:text-accent-foreground px-2 py-2 text-sm font-medium"
                    >
                      Global Projects
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute bg-popover border rounded-md shadow-md p-2 min-w-[200px] z-50">
                      <ul className="grid gap-1 p-2">
                        <li>
                          <a 
                            href={globalProjectsLink.path}
                            className="block px-2 py-1.5 text-sm rounded hover:bg-accent hover:text-accent-foreground"
                          >
                            Overview
                          </a>
                        </li>
                        <li className="my-1 border-t border-border/30"></li>
                        {internalNavigation.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.path}
                              className={`block px-2 py-1.5 text-sm rounded ${
                                location.pathname === item.path ? 
                                "bg-accent text-accent-foreground" : 
                                "hover:bg-accent hover:text-accent-foreground"
                              }`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </motion.div>
          </nav>

          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            {isMounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full w-10 h-10 flex items-center justify-center transition-transform hover:scale-110"
              >
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default BibasHeader;
