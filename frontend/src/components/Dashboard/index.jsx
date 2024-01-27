import { useState } from "react"
import Sidebar from "../Sidebar"
import Students from "./Students"
import Tests from "./Tests"

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Overview")
  return (
    <div className="flex w-screen h-screen">
      <Sidebar
        selected={selectedTab}
        changeSelected={(selected) => setSelectedTab(selected)}
      />
      <div className="flex-1">
        {selectedTab === "Students" && <Students />}
        {selectedTab === "Tests" && <Tests />}
      </div>
    </div>
  )
}
export default Dashboard