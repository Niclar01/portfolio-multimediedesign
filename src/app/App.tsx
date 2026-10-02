import { createBrowserRouter, RouterProvider, Navigate } from "react-router"
import { SiteLayout } from "./components/Shared"
import Home from "./pages/Home"
import MyWork from "./pages/MyWork"
import SchoolProjects from "./pages/SchoolProjects"
import OnlineSikkerhed from "./pages/OnlineSikkerhed"
import GarnOgCraft from "./pages/GarnOgCraft"
import CreativeProduction from "./pages/CreativeProduction"
import SoeKnitwear from "./pages/SoeKnitwear"
import PersonalSkills from "./pages/PersonalSkills"
import Contact from "./pages/Contact"

const router = createBrowserRouter([
  {
    Component: SiteLayout,
    children: [
      { index: true, Component: Home },
      { path: "my-work", Component: MyWork },
      { path: "school-projects", Component: SchoolProjects },
      { path: "school-projects/online-sikkerhed", Component: OnlineSikkerhed },
      { path: "school-projects/garn-og-craft", Component: GarnOgCraft },
      { path: "creative-production", Component: CreativeProduction },
      { path: "soe-knitwear", Component: SoeKnitwear },
      { path: "personal-skills", Component: PersonalSkills },
      { path: "contact", Component: Contact },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
], {
  basename: "/portfolio",
})

export default function App() {
  return <RouterProvider router={router} />
}
